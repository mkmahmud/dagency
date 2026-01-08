'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useParams } from 'next/navigation';
import projectsData from '@/data/projects.json';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const projectId = params.id;
  const container = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<any>(null);

  // Fetch project by id
  useEffect(() => {
    const proj = projectsData.find(p => p.id === projectId);
    setProject(proj || null);
  }, [projectId]);

  // GSAP animations
  useEffect(() => {
    if (!project || !container.current) return;

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
  }, [project]);

  if (!project) return <div className="text-center py-20 text-muted">Project not found.</div>;

  return (
    <div ref={container} className="font-barlow bg-background text-foreground">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 border-b border-sidebar">
        {/* Background Image */}
        <Image
          src={project.visual.images[0].src}
          alt={project.visual.images[0].alt}
          fill
          className="object-cover z-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-primary/70 via-black/90 to-black/90 z-10"></div>

        {/* Content */}
        <div className="max-w-5xl relative z-20 text-white">
          <p className="uppercase tracking-widest mb-6 text-secondary font-medium">
            {project.hero.subtitle}
          </p>
          <h1 className="text-[54px] leading-tight font-bold">{project.hero.title}</h1>
          <p className="mt-6 max-w-3xl text-gray-200 leading-relaxed">{project.hero.description}</p>
          <Button className="mt-10 bg-primary text-primary-foreground hover:bg-primary/80 transition">
            Start Project
          </Button>
        </div>
      </section>



      {/* Context Section */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] font-semibold mb-6 text-primary">{project.context.title || 'Project Context'}</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed">{project.context.description}</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {project.context.details.map((d: any) => (
            <div key={d.label} className="border border-sidebar rounded-lg p-6 hover:shadow-lg transition">
              <p className="text-gray60 text-sm">{d.label}</p>
              <h4 className="text-lg font-semibold mt-2">{d.value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Section */}
      <section className="step py-24 px-6 max-w-6xl mx-auto bg-sidebar rounded-xl">
        <h2 className="text-[34px] font-semibold mb-6 text-primary">The Challenge</h2>
        <ul className="text-gray60 space-y-4 max-w-3xl leading-relaxed pl-4 list-disc">
          {project.challenge.points.map((p: string, i: number) => <li key={i}>{p}</li>)}
        </ul>
      </section>

      {/* Strategy Section */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] font-semibold mb-6 text-primary">Strategy & Decisions</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed mb-8">{project.strategy.description}</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-sidebar rounded-lg p-6 hover:shadow-lg transition">
            <h4 className="font-semibold mb-3">What I Prioritized</h4>
            <ul className="text-gray60 space-y-2 pl-4 list-disc">{project.strategy.prioritized.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
          </div>
          <div className="border border-sidebar rounded-lg p-6 hover:shadow-lg transition">
            <h4 className="font-semibold mb-3">What I Avoided</h4>
            <ul className="text-gray60 space-y-2 pl-4 list-disc">{project.strategy.avoided.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="step py-24 px-6">
        {project.visual.images.map((img: any, i: number) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="mx-auto rounded-xl border border-sidebar shadow-lg"
          />
        ))}
      </section>

      {/* Implementation Section */}
      <section className="step py-24 px-6 max-w-6xl mx-auto bg-sidebar rounded-xl">
        <h2 className="text-[34px] font-semibold mb-6 text-primary">Implementation</h2>
        <p className="text-gray60 max-w-3xl leading-relaxed mb-6">{project.implementation.description}</p>
        <ul className="text-gray60 space-y-3 pl-4 list-disc">{project.implementation.points.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul>
      </section>

      {/* Results Section */}
      <section className="step py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-[34px] font-semibold mb-6 text-primary">Results & Impact</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {project.results.metrics.map((m: any, i: number) => (
            <div key={i} className="border border-sidebar rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-3xl font-semibold text-secondary">{m.value}</h3>
              <p className="text-gray60 mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reflection Section */}
      <section className="step py-32 px-6 border-t border-sidebar">
        <h2 className="text-[36px] max-w-4xl leading-snug font-semibold">{project.reflection.title}</h2>
        <p className="text-gray60 max-w-3xl mt-6">{project.reflection.description}</p>
        <div className="mt-10 flex gap-4">
          {project.reflection.actions.map((a: any, i: number) => (
            <Button key={i} variant={a.variant}>{a.label}</Button>
          ))}
        </div>
      </section>

    </div>
  );
}
