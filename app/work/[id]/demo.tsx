'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

export default function ProjectCaseStudy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-section', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="font-barlow bg-background">
      {/* Hero */}
      <section className="border-b border-sidebar px-6 py-12">
        <h1 className="text-[42px] font-semibold text-primary">
          Chic Boutique – E-Commerce Platform
        </h1>
        <p className="text-gray60 max-w-3xl mt-4">
          A modern fashion e-commerce solution focused on performance,
          conversion, and seamless user experience across devices.
        </p>
      </section>

      {/* Preview Image */}
      <section className="case-section px-6 py-12 max-w-6xl mx-auto">
        <Image
          src="/images/1.png"
          alt="Chic Boutique Preview"
          width={1200}
          height={700}
          className="rounded-xl border border-sidebar"
        />
      </section>

      {/* Content */}
      <section
        ref={sectionsRef}
        className="max-w-6xl mx-auto px-6 pb-20 space-y-16"
      >
        {/* Overview */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            Project Overview
          </h2>
          <p className="text-gray60 mt-4 leading-relaxed max-w-4xl">
            Chic Boutique was built for a fashion brand that needed a fast,
            visually appealing, and scalable e-commerce platform. The goal was
            to improve user engagement, simplify product browsing, and increase
            conversion rates.
          </p>
        </div>

        {/* Problem */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            The Problem
          </h2>
          <p className="text-gray60 mt-4 max-w-4xl leading-relaxed">
            The client struggled with a slow website, poor mobile experience,
            and an outdated UI that failed to represent the brand. Customers
            were abandoning carts due to long load times and confusing
            navigation.
          </p>
        </div>

        {/* Solution */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            The Solution
          </h2>
          <p className="text-gray60 mt-4 max-w-4xl leading-relaxed">
            I designed and developed a fully responsive e-commerce experience
            with a clean UI, optimized image delivery, and a structured product
            flow. Performance optimization and accessibility were prioritized
            from day one.
          </p>
        </div>

        {/* Role */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            My Role
          </h2>
          <ul className="text-gray60 mt-4 space-y-2">
            <li>• UI/UX design implementation</li>
            <li>• Frontend development with Next.js</li>
            <li>• Performance optimization</li>
            <li>• Component architecture & state management</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              'Next.js',
              'React',
              'Tailwind CSS',
              'GSAP',
              'ShadCN UI',
              'Vercel',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-sidebar rounded-full text-sm text-gray60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="case-section">
          <h2 className="text-[26px] border-b border-sidebar pb-3">
            Results & Impact
          </h2>
          <ul className="text-gray60 mt-4 space-y-2 max-w-4xl">
            <li>• 40% faster page load time</li>
            <li>• Improved mobile conversion rate</li>
            <li>• Reduced bounce rate</li>
            <li>• Positive client feedback on usability & design</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="case-section flex gap-4 pt-8">
          <Button variant="secondary" className="text-gray60">
            Live Project
          </Button>
          <Button variant="secondary">
            <Image src="/icons/arrow.png" alt="Arrow" width={20} height={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
