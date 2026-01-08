"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SectionHeadProps {
  title?: string;
  description?: string;
}

export default function SectionHead({ title, description }: SectionHeadProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative text-center mt-24 mb-16 px-4 font-barlow"
    >
      {/* Accent line */}
      <div className="mx-auto mb-4 h-[3px] w-16 rounded-full bg-gradient-to-r from-lime-400 to-emerald-500" />

      {/* Title */}
      <h1 className="font-extrabold text-2xl md:text-4xl lg:text-5xl tracking-tight">
        <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {/* Description */}
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}

      {/* Soft glow background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-40 w-40 rounded-full bg-lime-400/10 blur-3xl" />
      </div>
    </div>
  );
}
