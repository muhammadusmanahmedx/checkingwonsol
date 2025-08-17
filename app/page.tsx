// pages/index.tsx
"use client";
import HeroSection from "@/components/(home Components)/hero";
import ServicesSection from "@/components/(home Components)/services";
import WhyChooseUs from "@/components/(home Components)/why-choose-us";
import Footer from "@/components/(home Components)/footer";
import { useRef } from "react";
import HeroSection2 from "@/components/(home Components)/companyintro";
import IntroSection from "@/components/(home Components)/companyintro";
import ServiceHighlights from "@/components/(home Components)/Servicesection";
import ClientTestimonials from "@/components/(home Components)/clienttestimonials";
import CTASection from "@/components/(home Components)/Calltoaction";

import ServicesSection2 from "@/components/(home Components)/services-section";
import AboutSection from "@/components/(home Components)/about-section";
import TestimonialCarousel from "@/components/(home Components)/testimonials";
import { InfiniteSlider } from "@/components/(home Components)/logocarousal";
// import { HeroSectionnew } from "@/components/(home Components)/hero-section";

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handlePortfolioScrollEnd = () => {
    // Smooth transition to next section
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="">
      <HeroSection />

     {/* <HeroSectionnew/> */}

      <AboutSection />

      <ServicesSection2 />

      {/* <IntroSection/>
      <ServicesSection/>
      <ClientTestimonials/> */}
      {/* <ServiceHighlights /> */}

      <WhyChooseUs />
      <div className="mb-0">
        <TestimonialCarousel />
        <CTASection />
      </div>

      <div className="space-y-2">
  <InfiniteSlider
    gap={32}
    duration={20}
    durationOnHover={60}
    className="w-full bg-card rounded-lg p-8"
  />
</div>

   
    </div>
  );
}
