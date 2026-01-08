"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SubServiceCard from "@/components/card/subServiceCard";
import SectionHead from "@/components/sections/home/sectionHead";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= SECTION FADE ================= */
      gsap.utils.toArray<HTMLElement>(".service-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });

      /* ================= GRID STAGGER ================= */
      gsap.utils.toArray<HTMLElement>(".service-grid").forEach((grid) => {
        gsap.from(grid.children, {
          opacity: 0,
          y: 40,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 90%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="border-t border-sidebar">
      {/* ================= HEADER ================= */}
      <SectionHead
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />

      {/* ================= DESIGN ================= */}
      <div className="mt-10 border-t border-sidebar service-section">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold">Design</h2>
          <p className="text-gray90 py-4">
            At Zevrot, our design team is passionate about creating stunning,
            user-centric designs that captivate your audience and elevate your
            brand. We believe that great design is not just about aesthetics;
            it's about creating seamless and intuitive user experiences.
          </p>
          <Button className="mt-6" variant="secondary">
            Our design services include:
          </Button>
        </div>

        {/* UX */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          User Experience (UX) Design
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/design/1.png" title="User Research and Persona Development" />
          <SubServiceCard iconSrc="/icons/services/design/2.png" title="Information Architecture and Wireframing" />
          <SubServiceCard iconSrc="/icons/services/design/3.png" title="Interactive Prototyping and User Testing" />
          <SubServiceCard iconSrc="/icons/services/design/4.png" title="UI Design and Visual Branding" />
        </div>

        {/* UI */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          User Interface (UI) Design
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/design/ui1.png" title="Intuitive and Visually Appealing Interface Design" />
          <SubServiceCard iconSrc="/icons/services/design/ui2.png" title="Custom Iconography and Illustration" />
          <SubServiceCard iconSrc="/icons/services/design/ui3.png" title="Typography and Color Palette Selection" />
          <SubServiceCard iconSrc="/icons/services/design/ui4.png" title="Responsive Design for Various Devices" />
        </div>

        {/* Branding */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Branding and Identity
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/design/ui5.png" title="Logo Design and Visual Identity Development" />
          <SubServiceCard iconSrc="/icons/services/design/ui6.png" title="Brand Strategy and Positioning" />
          <SubServiceCard iconSrc="/icons/services/design/ui7.png" title="Brand Guidelines and Style Guides" />
          <SubServiceCard iconSrc="/icons/services/design/ui8.png" title="Marketing Collateral Design" />
        </div>
      </div>

      {/* ================= ENGINEERING ================= */}
      <div className="mt-10 service-section">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold">Engineering</h2>
          <p className="text-gray90 py-4">
            Our engineering team combines technical expertise with a passion for
            innovation to build robust and scalable digital solutions.
          </p>
          <Button className="mt-6" variant="secondary">
            Our engineering services include:
          </Button>
        </div>

        {/* Web */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Web Development
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/engr/e1.png" title="Front-End Development (HTML, CSS, JavaScript)" />
          <SubServiceCard iconSrc="/icons/services/engr/e2.png" title="Back-End Development (Node, TypeScript, Python)" />
          <SubServiceCard iconSrc="/icons/services/engr/e3.png" title="CMS Development (WordPress, Drupal)" />
          <SubServiceCard iconSrc="/icons/services/engr/e4.png" title="E-Commerce Platform Development" />
        </div>

        {/* Mobile */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Mobile App Development
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/engr/e5.png" title="Native iOS and Android App Development" />
          <SubServiceCard iconSrc="/icons/services/engr/e6.png" title="Cross-Platform App Development" />
          <SubServiceCard iconSrc="/icons/services/engr/e7.png" title="UI/UX Integration" />
          <SubServiceCard iconSrc="/icons/services/engr/e8.png" title="Testing, Deployment, Maintenance" />
        </div>

        {/* Custom */}
        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Custom Software Development
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/engr/e9.png" title="Enterprise Software Development" />
          <SubServiceCard iconSrc="/icons/services/engr/e10.png" title="Custom Web Application Development" />
          <SubServiceCard iconSrc="/icons/services/engr/e11.png" title="Third-Party API Integrations" />
          <SubServiceCard iconSrc="/icons/services/engr/e12.png" title="Legacy System Modernization" />
        </div>
      </div>

      {/* ================= PROJECT MANAGEMENT ================= */}
      <div className="mt-10 service-section">
        <div className="p-10 border-b border-sidebar">
          <h2 className="text-[30px] font-bold">Project Management</h2>
          <p className="text-gray90 py-4">
            Our experienced project management team ensures that your projects
            are delivered on time, within budget, and according to specifications.
          </p>
          <Button className="mt-6" variant="secondary">
            Our project management services include:
          </Button>
        </div>

        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Project Planning and Scoping
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/project/p1.png" title="Requirements Gathering and Analysis" />
          <SubServiceCard iconSrc="/icons/services/project/p2.png" title="Project Roadmap and Timeline Development" />
          <SubServiceCard iconSrc="/icons/services/project/p3.png" title="Resource Allocation and Task Assignment" />
          <SubServiceCard iconSrc="/icons/services/project/p4.png" title="Risk Assessment and Mitigation" />
        </div>

        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Agile Development
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/project/p5.png" title="Iterative Development and Sprints" />
          <SubServiceCard iconSrc="/icons/services/project/p6.png" title="Scrum or Kanban Methodology" />
          <SubServiceCard iconSrc="/icons/services/project/p7.png" title="Regular Progress Updates" />
          <SubServiceCard iconSrc="/icons/services/project/p8.png" title="Continuous Improvement" />
        </div>

        <h2 className="text-[28px] font-barlow text-gray60 p-10">
          Quality Assurance and Testing
        </h2>
        <div className="service-grid border-t border-b border-sidebar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <SubServiceCard iconSrc="/icons/services/project/p9.png" title="Test Planning and Execution" />
          <SubServiceCard iconSrc="/icons/services/project/p10.png" title="Functional and Usability Testing" />
          <SubServiceCard iconSrc="/icons/services/project/p11.png" title="Performance and Security Testing" />
          <SubServiceCard iconSrc="/icons/services/project/p12.png" title="Bug Tracking and Resolution" />
        </div>
      </div>
    </div>
  );
}
