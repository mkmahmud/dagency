"use client";

import Hero from "@/components/sections/home/hero";
import Ourservice from "@/components/sections/home/ourservice";
import Partners from "@/components/sections/home/partners";
import StartProject from "@/components/sections/home/startProject";
import Testimonial from "@/components/sections/home/testimonial";
import WhyChooseUs from "@/components/sections/home/whyChooseUs";
import Faq from "@/components/sections/home/faq";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current || !dotRef.current) return;

    const updateDotPosition = () => {
      const content = contentRef.current!;
      const dot = dotRef.current!;
      const scrollTop = window.scrollY;
      const contentTop = content.offsetTop;
      const contentHeight = content.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Scroll progress (0 → 1)
      const progress = Math.min(
        Math.max((scrollTop - contentTop) / (contentHeight - viewportHeight), 0),
        1
      );

      // Dot moves along right border
      const y = progress * (content.offsetHeight - dot.offsetHeight);
      gsap.to(dot, { y, duration: 0.2, ease: "power2.out" });
    };

    // Event listeners
    window.addEventListener("scroll", updateDotPosition);
    window.addEventListener("resize", updateDotPosition);

    // Initial position
    updateDotPosition();

    return () => {
      window.removeEventListener("scroll", updateDotPosition);
      window.removeEventListener("resize", updateDotPosition);
    };
  }, []);

  return (
    <div ref={contentRef} className="relative overflow-x-hidden">
      {/* ===== Scroll Dot ===== */}
      <div
        ref={dotRef}
        className="absolute right-0 w-2 h-2 rounded-full -translate-x-1/2"
        style={{
          background: "linear-gradient(90deg, #9eff00, #262626)",
          filter: "blur(0.5px)",
          top: 0,
        }}
      />

      {/* ===== PAGE SECTIONS ===== */}
      <Hero />
      <Partners />
      <Ourservice />
      <WhyChooseUs />
      <Testimonial />
      <Faq />
      <StartProject />
    </div>
  );
}
