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
import { InfiniteSlider } from "@/components/(home Components)/infinity_slider";
import FlowingMenu from "@/components/(home Components)/flowingmenu";
import { motion } from "framer-motion";
// import { InfiniteSlider } from "@/components/(home Components)/logocarousal";
// import { HeroSectionnew } from "@/components/(home Components)/hero-section";

// export const metadata = {
//   title: "Welcome to Super Store – Best Online Shopping",
//   description: "Discover amazing deals, trending products, and top-quality items. Shop smart, shop Super Store.",
//   keywords: ["super store", "online shopping", "trending products", "best deals"],
//   openGraph: {
//     title: "Super Store – Best Online Shopping",
//     description: "Discover amazing deals, trending products, and top-quality items.",
//     images: ["/og-home.png"],
//   },
// };

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
      <div className="">
        <InfiniteSlider gap={32} duration={30} durationOnHover={60} />
      </div>

      {/* <HeroSectionnew/> */}

      <AboutSection />

      <ServicesSection2 />

      {/* <IntroSection/>
      <ServicesSection/>
      <ClientTestimonials/> */}
      {/* <ServiceHighlights /> */}

      <div>
        <div className="text-center mb-16">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
              Why Choose Us
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900">Why choose </span>

              <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
                won solutions
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            <p className="ttext-base sm:text-lg md:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 font-regular max-w-3xl mx-auto px-2 sm:px-0">
              we don't just build software – we craft digital experiences that
              transform businesses and drive innovation forward.
            </p>
          </motion.p>
        </div>
        <div className="h-screen w-full bg-gradient-to-br from-[#2C74BC] via-[#2C74BC] to-[#2C74BC]">
          <FlowingMenu />
        </div>
      </div>

      {/* <WhyChooseUs /> */}
      <div className="mb-0">
        <TestimonialCarousel />
        <CTASection />
      </div>

      <div className="space-y-2"></div>
    </div>
  );
}
