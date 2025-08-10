// pages/index.tsx
"use client";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import FeaturedCaseStudies from "@/components/featured-case-studies";
import Footer from "@/components/footer";
import PortfolioScrollStack from "@/components/portfolio-scroll-stack";
import { useRef } from "react";

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null)

  const handlePortfolioScrollEnd = () => {
    // Smooth transition to next section
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }


  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <HeroSection />
      <ServicesSection />
        <WhyChooseUs />
        <div>
       {/* <PortfolioScrollStack onScrollEnd={handlePortfolioScrollEnd} /> */}
      </div>
      {/* <FeaturedCaseStudies /> */}
      <Footer/>
    </div>
  );
}