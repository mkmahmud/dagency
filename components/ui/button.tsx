"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-sidebar text-white/80   ",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-sidebar text-secondary-foreground hover:bg-sidebar/80",
        ghost:
          " hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-green-400 via-lime-400 to-green-600 text-white shadow-lg",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const el = buttonRef.current;

    // Hover animation: scale + glow
    const hoverEnter = () => {
      gsap.to(el, {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(158, 255, 0, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const hoverLeave = () => {
      gsap.to(el, {
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Click animation
    const clickDown = () => {
      gsap.to(el, { scale: 0.95, duration: 0.1, ease: "power2.out" });
    };
    const clickUp = () => {
      gsap.to(el, { scale: 1.05, duration: 0.1, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", hoverEnter);
    el.addEventListener("mouseleave", hoverLeave);
    el.addEventListener("mousedown", clickDown);
    el.addEventListener("mouseup", clickUp);

    return () => {
      el.removeEventListener("mouseenter", hoverEnter);
      el.removeEventListener("mouseleave", hoverLeave);
      el.removeEventListener("mousedown", clickDown);
      el.removeEventListener("mouseup", clickUp);
    };
  }, []);

  return (
    <Comp
      ref={buttonRef as any}
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
