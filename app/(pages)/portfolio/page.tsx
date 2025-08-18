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
import AboutUsSection from "@/components/breadcrum";
import Portfolio from "@/components/(portfolio Components)/projects";

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
      <AboutUsSection
        title="Our Projects"
        backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755459467/social-media-entertainment-lifestyle-graphic-concept-min_ddgskp.jpg"
        subtitle=" We provide comprehensive technology solutions to help your business thrive"
      />

      <Portfolio />
    </div>
  );
}
