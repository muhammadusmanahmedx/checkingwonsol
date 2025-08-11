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
    <div className="">
      <HeroSection />

<AboutSection/>
<ServicesSection2/>


      {/* <IntroSection/>
      <ServicesSection/>
      <ClientTestimonials/> */}
      {/* <ServiceHighlights /> */}
     

        <WhyChooseUs />
        <div className="mb-20">

         <CTASection/>
        </div>

      <Footer/>
    </div>
  );
}