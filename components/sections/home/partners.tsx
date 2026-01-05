"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Partners() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (!logosRef.current) return;

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        logosRef.current.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <section className="border-t border-sidebar">
      {/* Title */}
      <h2
        ref={titleRef}
        className="px-4 py-2 rounded-full border border-sidebar w-fit mx-auto -mt-5 bg-background"
      >
        Trusted By 250+ Companies
      </h2>

      {/* Logos */}
      <div
        ref={logosRef}
        className="flex flex-wrap justify-center md:justify-between items-center"
      >
        {[
          "zapier",
          "slack",
          "zoom",
          "spotify",
          "amazon",
          "adobe",
        ].map((name) => (
          <div
            key={name}
            className="mx-6 my-10 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
          >
            <Image
              src={`/logos/${name}.png`}
              alt={name}
              width={100}
              height={80}
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
}
