"use client";

import Faq from "@/components/sections/home/faq";
import Hero from "@/components/sections/home/hero";
import Ourservice from "@/components/sections/home/ourservice";
import Partners from "@/components/sections/home/partners";
import StartProject from "@/components/sections/home/startProject";
import Testimonial from "@/components/sections/home/testimonial";
import WhyChooseUs from "@/components/sections/home/whyChooseUs";

export default function Home() {
  return (
    <div>
      {/*  Hero Section */}
      <Hero />
      {/*  Partners Section */}
      <Partners />
      {/*  Our Services Section */}
      <Ourservice />
      {/*  Why Choose Us Section */}
      <WhyChooseUs />
      {/* Testimonial */}
      <Testimonial />

      {/* Faq */}
      <Faq />
      {/* Start Project */}
      <StartProject />
    </div>
  );
}
