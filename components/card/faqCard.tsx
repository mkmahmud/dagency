"use client";

import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import gsap from "gsap";

export default function FaqCard({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleFaq = () => {
    if (!contentRef.current || !iconRef.current) return;

    if (!isOpen) {
      // OPEN animation
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(iconRef.current, {
        rotate: 45,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      // CLOSE animation
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });

      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="flex space-x-4 p-6 items-start border-b border-sidebar">
      {/* INDEX */}
      <div className="bg-gradient-to-b from-sidebar to-black/10 p-4 rounded-md w-fit shrink-0">
        <h1 className="font-bold text-xl text-primary/90">
          {index.toString().padStart(2, "0")}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="w-full">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-xl text-primary/90">{question}</h2>

          <div
            ref={iconRef}
            className="cursor-pointer text-primary/80"
            onClick={toggleFaq}
          >
            <FaPlus />
          </div>
        </div>

        {/* ANSWER */}
        <div
          ref={contentRef}
          className="overflow-hidden h-0 opacity-0"
        >
          <p className="mt-4 text-gray90 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
