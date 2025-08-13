"use client";

import { motion } from "framer-motion";
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
import { DicedHeroSection } from "@/components/(about Components)/Aboutfirst";
import { WorldMap } from "@/components/(about Components)/Wordlmap";

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

  const ltrSlides = [
    {
      title: "Cloud Computing",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AI Technology",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Data Analytics",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Software Development",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-background relative">
        <div className="absolute top-2/5 left-3/4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="flex items-center justify-center w-20 h-20">
            <img
              src="/placeholder-nbveg.png"
              alt="Won Solutions Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <DicedHeroSection
          topText="Innovation"
          mainText="Won Solutions"
          subMainText="Empowering businesses with cutting-edge software solutions. We deliver innovative technology services including cloud computing, AI integration, data analytics, and custom software development to drive your digital transformation forward."
          buttonText="Get Started"
          slides={ltrSlides}
          onMainButtonClick={() => console.log("Main button clicked")}
          onGridImageHover={(index) =>
            console.log(`Grid image ${index} hovered`)
          }
          onGridImageClick={(index) =>
            console.log(`Grid image ${index} clicked`)
          }
          topTextStyle={{ color: "#2C74BC" }}
          mainTextStyle={{
            fontSize: "4.5rem",
            gradient: "linear-gradient(45deg, #2C74BC, #ffffff)",
          }}
          subMainTextStyle={{ color: "#2C74BC" }}
          buttonStyle={{
            backgroundColor: "#2C74BC",
            color: "#ffffff",
            borderRadius: "2rem",
            hoverColor: "#ffffff",
            hoverForeground: "#2C74BC",
          }}
          separatorColor="#2C74BC"
          mobileBreakpoint={1000}
          fontFamily="Arial, sans-serif"
        />
      </div>

      <div className="py-20 bg-white w-full min-h-screen">
        {" "}
        {/* Changed background to white */}
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h1
            className="font-bold text-3xl md:text-5xl text-gray-900 mb-4" // Changed text color for white background
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Global <span className="text-green-500">Operations</span>
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto py-4 mb-12" // Changed text color for white background
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From our headquarters in Pakistan, we operate globally with
            representatives in key markets and strategic partnerships aligned
            with regional growth visions.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm" // Updated card styling for white theme
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3"></div>
              <h3 className="text-green-500 font-semibold mb-2">
                Headquarters
              </h3>
              <p className="text-gray-600 text-sm">
                {" "}
                {/* Updated text color */}
                Pakistan - Our main operations center where we coordinate all
                global activities and strategic planning.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm" // Updated card styling for white theme
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div
                className="w-4 h-4 rounded-full mx-auto mb-3"
                style={{ backgroundColor: "#2C74BC" }}
              ></div>{" "}
              {/* Used brand blue color */}
              <h3 className="font-semibold mb-2" style={{ color: "#2C74BC" }}>
                Representatives
              </h3>{" "}
              {/* Used brand blue color */}
              <p className="text-gray-600 text-sm">
                {" "}
                {/* Updated text color */}
                UK & US - Our dedicated representatives ensuring seamless
                operations in Western markets.
              </p>
            </motion.div>

            <motion.div
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-3"></div>
              <h3 className="text-orange-500 font-semibold mb-2">
                Vision 2030 Partner
              </h3>
              <p className="text-gray-600 text-sm">
                Middle East - Supporting Saudi & Egypt's Vision 2030 while
                providing comprehensive services in UAE.
              </p>
            </motion.div>
          </div>
        </div>
        <WorldMap
          dots={[
            {
              start: { lat: 30.3753, lng: 69.3451 },
              end: { lat: 39.8283, lng: -98.5795 },
              color: "#2C74BC", // Changed to brand blue color
            },
            {
              start: { lat: 30.3753, lng: 69.3451 },
              end: { lat: 55.3781, lng: -3.436 },
              color: "#2C74BC", // Changed to brand blue color
            },
            {
              start: { lat: 30.3753, lng: 69.3451 },
              end: { lat: 24.4539, lng: 54.3773 },
              color: "#f97316",
            },
          ]}
        />
      </div>
    </>
    // <div className="">
    //   <Footer />
    // </div>
  );
}
