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
        background:
          scrolled
            ? "linear-gradient(to bottom, rgba(10,10,10,0.95), rgba(20,20,20,0.85))"
            : "linear-gradient(to bottom, rgba(10,10,10,0.8), rgba(20,20,20,0.6))",
        boxShadow: scrolled
          ? "0 10px 30px rgba(0,0,0,0.25)"
          : "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(14px)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Work", "Services", "Contact"];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 px-6"
      style={{
        background:
          "linear-gradient(to bottom, rgba(158,255,0,0.12), rgba(0,0,0,0.65))",
      }}
    >
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div >
          <Link className="flex items-center gap-2" href="/">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h2 className="font-bold text-lg">ZevroT</h2>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-sm font-medium transition-all duration-300 group-hover:-translate-y-0.5"
              >
                {item}
              </Link>

              {/* underline hover */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
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
          <Link href="/contact/#start-project">Get Started</Link>
        </Button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 rounded-xl bg-background/90 backdrop-blur-xl shadow-lg">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium transition-all duration-300 hover:text-lime-400 hover:translate-y-[-2px]"
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
