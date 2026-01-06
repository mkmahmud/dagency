"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function NotFound() {
    const progressRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const numberRef = useRef<HTMLHeadingElement>(null);

    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("Preparing experience");

    useEffect(() => {
        const tl = gsap.timeline();

        // Progress bar animation
        tl.fromTo(
            progressRef.current,
            { width: "0%" },
            {
                width: "100%",
                duration: 1.6,
                ease: "power2.inOut",
            }
        );

        // Moving dot
        gsap.fromTo(
            dotRef.current,
            { x: 0 },
            {
                x: 280,
                duration: 1.6,
                ease: "power2.inOut",
            }
        );

        // Text changes
        setTimeout(() => setText("Building interface"), 600);
        setTimeout(() => setText("Almost there"), 1200);

        // End loading
        setTimeout(() => {
            gsap.to(".loader", {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: () => setLoading(false),
            });
        }, 1800);
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
        <div className="min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
            {/* ===== LOADER ===== */}
            {loading && (
                <div className="loader text-center space-y-6">
                    <p className="tracking-widest text-gray-400 uppercase text-sm">
                        {text}
                    </p>

                    <div className="relative w-[300px] h-[2px] bg-gray-800 overflow-hidden rounded">
                        <div
                            ref={progressRef}
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-lime-400 to-emerald-500"
                        />
                        <div
                            ref={dotRef}
                            className="absolute -top-1 w-3 h-3 rounded-full bg-lime-400 blur-[1px]"
                        />
                    </div>
                </div>
            )}

            {/* ===== 404 CONTENT ===== */}
            {!loading && (
                <div ref={contentRef} className="text-center px-6">
                    <h1
                        ref={numberRef}
                        className="text-[140px] md:text-[180px] font-extrabold
            text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-500"
                    >
                        404
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mt-4">
                        Page not found
                    </p>

                    <p className="text-gray-500 mt-2">
                        Looks like this page doesn’t exist anymore.
                    </p>

                    <a
                        href="/"
                        className="inline-block mt-8 px-8 py-3 rounded-lg
            bg-gradient-to-r from-lime-400 to-emerald-500
            text-black font-semibold
            hover:scale-105 transition-transform duration-300"
                    >
                        Go Home
                    </a>
                </div>
            )}
        </div>
    );
}
