"use client";

import { CircleXFillIcon } from "@/components/icons/akar-icons-circle-x-fill";
import { Bars3BottomRight16SolidIcon } from "@/components/icons/heroicons-bars-3-bottom-right-16-solid";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🔥 Entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    gsap.from(navRef.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  // 🔥 Scroll reaction
  useEffect(() => {
    if (!navRef.current) return;

    const onScroll = () => {
      const scrolled = window.scrollY > 20;

      gsap.to(navRef.current, {
        paddingTop: scrolled ? 10 : 16,
        paddingBottom: scrolled ? 10 : 16,
        backgroundColor: scrolled
          ? "rgba(15,15,15,0.85)"
          : "rgba(15,15,15,0.6)",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.25)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(12px)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 px-6"
      style={{
        background:
          "linear-gradient(120deg, rgba(158,255,0,0.08), rgba(0,0,0,0.3))",
      }}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h2 className="font-bold text-lg">Zevro IT</h2>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About", "Work", "Services", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="transition-transform duration-300 hover:-translate-y-1"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <CircleXFillIcon /> : <Bars3BottomRight16SolidIcon />}
          </button>
        </div>

        {/* CTA */}
        <Button
          className="hidden md:inline-block font-semibold"
          variant="gradient"
        >
          Get Started
        </Button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 rounded-xl bg-background shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            {["Home", "About", "Work", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
