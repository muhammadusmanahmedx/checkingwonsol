// pages/index.tsx
"use client";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Footer from "@/components/footer";
import { useRef } from "react";
import HeroSection2 from "@/components/companyintro";
import IntroSection from "@/components/companyintro";
import ServiceHighlights from "@/components/Servicesection";
import ClientTestimonials from "@/components/clienttestimonials";
import CTASection from "@/components/Calltoaction";

import ServicesSection2 from "@/components/services-section";
import AboutSection from "@/components/about-section";
import TestimonialCarousel from "@/components/testimonials";
import { InfiniteSlider } from "@/components/logocarousal";

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

      <div className="space-y-4">
        <InfiniteSlider
          gap={32}
          duration={20}
          durationOnHover={60}
          className="w-full bg-card rounded-lg p-8"
        >
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/apple-logo.png"
              alt="Apple"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/google-logo.png"
              alt="Google"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/microsoft-logo.png"
              alt="Microsoft"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/netflix-inspired-logo.png"
              alt="Netflix"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/spotify-logo.png"
              alt="Spotify"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6">
            <img
              src="/tesla-logo.png"
              alt="Tesla"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </InfiniteSlider>
      </div>

      <AboutSection />

      <ServicesSection2 />

      {/* <IntroSection/>
      <ServicesSection/>
      <ClientTestimonials/> */}
      {/* <ServiceHighlights /> */}

      <WhyChooseUs />
      <div className="mb-20">
        <TestimonialCarousel />
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
