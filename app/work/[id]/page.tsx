'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCaseStudy() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.step').forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          y: 70,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="font-barlow bg-background">

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-6 border-b border-sidebar">
        <div className="max-w-5xl">
          <p className="text-gray60 uppercase tracking-widest mb-6">
            Real Client Case Study
          </p>
          <h1 className="text-[54px] leading-tight font-semibold">
            Chic Boutique:
            <br />
            Turning aesthetic into performance.
          </h1>
          <p className="text-gray60 mt-6 max-w-3xl leading-relaxed">
            Chic Boutique is a fashion eCommerce brand with strong visual
            identity — but weak digital performance.  
            This project focused on **conversion, clarity, and confidence**.
          </p>
        </div>
      </section>

      {/* ================= CONTEXT ================= */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] mb-6">Project Context</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed">
          The brand already had traffic from Instagram and ads.
          The real issue was **what happened after users landed**.
          Drop-offs were high, especially on mobile.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            ['Industry', 'Fashion & Retail'],
            ['Timeline', '4 Weeks'],
            ['Role', 'Design + Development'],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-sidebar rounded-lg p-6"
            >
              <p className="text-gray60 text-sm">{label}</p>
              <h4 className="text-lg font-semibold mt-2">{value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHALLENGE ================= */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] mb-6">The Challenge</h2>
        <ul className="text-gray60 space-y-4 max-w-3xl leading-relaxed">
          <li>• Homepage overwhelmed users with too many choices</li>
          <li>• Product discovery felt slow and unclear</li>
          <li>• Visual quality was high, but trust signals were missing</li>
          <li>• Mobile experience was inconsistent</li>
        </ul>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] mb-6">Strategy & Decisions</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed mb-8">
          Instead of adding features, I focused on **reducing cognitive load**.
          Every screen had to guide the user to the *next confident action*.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-sidebar rounded-lg p-6">
            <h4 className="font-semibold mb-3">What I Prioritized</h4>
            <ul className="text-gray60 space-y-2">
              <li>• Clear visual hierarchy</li>
              <li>• Faster perceived performance</li>
              <li>• Fewer but stronger CTAs</li>
            </ul>
          </div>

          <div className="border border-sidebar rounded-lg p-6">
            <h4 className="font-semibold mb-3">What I Avoided</h4>
            <ul className="text-gray60 space-y-2">
              <li>• Heavy animations without purpose</li>
              <li>• Complex navigation patterns</li>
              <li>• Feature overload</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= VISUAL ================= */}
      <section className="step py-24 px-6">
        <Image
          src="/images/1.png"
          alt="Chic Boutique UI"
          width={1400}
          height={800}
          className="mx-auto rounded-xl border border-sidebar"
        />
      </section>

      {/* ================= BUILD ================= */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] mb-6">Implementation</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed mb-6">
          The site was built using a modern, component-driven architecture
          focused on performance and maintainability.
        </p>

        <ul className="text-gray60 space-y-3">
          <li>• Next.js for routing, SEO, and performance</li>
          <li>• Tailwind + ShadCN for consistent UI</li>
          <li>• GSAP for subtle, meaningful motion</li>
          <li>• Optimized images & layout stability</li>
        </ul>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] mb-6">Results & Impact</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            ['40%', 'Faster Load Time'],
            ['↑ Engagement', 'Improved Product Discovery'],
            ['↓ Bounce Rate', 'Cleaner Navigation'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border border-sidebar rounded-xl p-6"
            >
              <h3 className="text-3xl font-semibold">{value}</h3>
              <p className="text-gray60 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REFLECTION ================= */}
      <section className="step py-32 px-6 border-t border-sidebar">
        <h2 className="text-[36px] max-w-4xl leading-snug">
          The biggest lesson?
          <br />
          Good design is not decoration —
          <span className="text-primary"> it’s direction.</span>
        </h2>

        <p className="text-gray60 max-w-3xl mt-6">
          This project reinforced the idea that clarity beats complexity.
          When users feel guided, conversion follows naturally.
        </p>

        <div className="mt-10 flex gap-4">
          <Button variant="secondary">View Live Project</Button>
          <Button variant="secondary">Next Case Study →</Button>
        </div>
      </section>
    </div>
  );
}
