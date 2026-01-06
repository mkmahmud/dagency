"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLHeadingElement>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Loader animation
    tl.from(loaderRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(loaderRef.current, {
        rotation: 360,
        repeat: -1,
        ease: "linear",
        duration: 1.2,
      });

    // Stop loading after delay
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        scale: 0.6,
        duration: 0.4,
        onComplete: () => setLoading(false),
      });
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();

      tl.from(contentRef.current, {
        opacity: 0,
        duration: 0.6,
      })
        .from(
          numberRef.current,
          {
            y: -60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .to(numberRef.current, {
          y: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
    }
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* ===== LOADER ===== */}
      {loading && (
        <div className="flex flex-col items-center gap-6">
          <div
            ref={loaderRef}
            className="w-16 h-16 rounded-full border-4 border-t-transparent border-lime-400"
          />
          <p className="text-gray-400 tracking-wide animate-pulse">
            Finding your page...
          </p>
        </div>
      )}

      {/* ===== 404 CONTENT ===== */}
      {!loading && (
        <div ref={contentRef} className="text-center px-6">
          <h1
            ref={numberRef}
            className="text-[140px] md:text-[180px] font-extrabold leading-none
            text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-300 to-emerald-500"
          >
            404
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mt-4">
            Oops! The page you’re looking for doesn’t exist.
          </p>

          <p className="text-gray-500 mt-2">
            It may have been moved or deleted.
          </p>

          <a
            href="/"
            className="inline-block mt-8 px-8 py-3 rounded-lg
            bg-gradient-to-r from-lime-400 to-emerald-500
            text-black font-semibold
            hover:scale-105 transition-transform duration-300"
          >
            Back to Home
          </a>
        </div>
      )}
    </div>
  );
}
