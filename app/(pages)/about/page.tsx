"use client";

import { motion } from "framer-motion";
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

// import AboutUs, { DicedHeroSection } from "@/components/(about Components)/Aboutfirst";
import { WorldMap } from "@/components/(about Components)/Wordlmap";
import ArcTimelineDemo from "@/components/(about Components)/Aboutfirst";
import WonSolutionsTimeline from "@/components/(about Components)/timeline";
import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { Globe, Handshake, Lightbulb, Rocket, Target, Zap } from "lucide-react";
import { InfiniteSlider } from "@/components/(home Components)/logocarousal";
import TestimonialFactBar from "@/components/(about Components)/stats";
import AboutUsSection from "@/components/breadcrum";
import WonsolAboutHero from "@/components/(about Components)/aboutnew1";
// import AboutSection from "@/components/(about Components)/Aboutfirst";

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


const timelineData: ArcTimelineItem[] = [
    {
      time: "2020-2021",
      steps: [
        {
          icon: <Lightbulb className="w-6 h-6" />,
          content:
            "Started with a dream of building my own company and making a difference in the business world. The vision was clear - create solutions that truly matter.",
        },
        {
          icon: <Rocket className="w-6 h-6" />,
          content:
            "Began freelancing journey to gain real-world experience and build meaningful relationships with clients across different industries.",
        },
      ],
    },
    {
      time: "2022",
      steps: [
        {
          icon: <Handshake className="w-6 h-6" />,
          content:
            "Established strong partnerships with physical clients, delivering exceptional results and building trust through consistent quality work.",
        },
        {
          icon: <Zap className="w-6 h-6" />,
          content:
            "Proved our capability by successfully handling complex projects and exceeding client expectations in every engagement.",
        },
      ],
    },
    {
      time: "2023",
      steps: [
        {
          icon: <Target className="w-6 h-6" />,
          content:
            "Took initiative to expand services and tackle enterprise-level challenges, demonstrating our growth and adaptability.",
        },
        {
          icon: <Globe className="w-6 h-6" />,
          content:
            "Began planning international expansion with focus on contributing to global business transformation initiatives.",
        },
      ],
    },
    {
      time: "2024-2025",
      steps: [
        {
          icon: <Globe className="w-6 h-6" />,
          content:
            "Ready to expand overseas and become a key player in Middle East business transformation, particularly in Saudi Arabia, UAE, and Egypt.",
        },
        {
          icon: <Target className="w-6 h-6" />,
          content:
            "Committed to being part of Middle East Vision 2030 - supporting Saudi Arabia's digital goals, UAE's innovation leadership, and Egypt's growing tech sector.",
        },
      ],
    },
  ]




  return (
    <>


    
    <AboutUsSection 
  title="About Us" 
  backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755441239/colleagues-working-project-discussing-details_2_paycsk.jpg"
  subtitle="Learn more about our company and mission"
/>



<WonsolAboutHero/>
   
{/* < ArcTimelineDemo/> */}
<section className=" pt-12 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-0" style={{ color: "#2C74BC" }}>
            Our Journey
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From freelancing dreams to Middle East Vision 2030 partnership - discover how Won Solutions evolved into an
            international business partner.
          </p> */}
        </div>
      </section>

      {/* Arc Timeline */}
      <section className="py-6 px-4">
        <ArcTimeline
          data={timelineData}
          defaultActiveStep={{ time: "2024-2025", stepIndex: 0 }}
          className="max-w-5xl"
        />
      </section>

      <TestimonialFactBar/>

      {/* Vision 2030 Focus */}
      <section className="py-16 px-4" style={{ backgroundColor: "#2C74BC" }}>
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Middle East Vision 2030</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Won Solutions is positioned to contribute to the digital transformation of Saudi Arabia, UAE, and Egypt -
            bringing proven expertise to support regional growth and innovation goals.
          </p>
        </div>
      </section>


<div className="space-y-2">
  <InfiniteSlider
    gap={32}
    duration={20}
    durationOnHover={60}
    className="w-full bg-card rounded-lg p-8"
  />
</div>
       



{/* //world map */}

      <div className="py-20 px-8 bg-white w-full min-h-screen">
        {" "}
        {/* Changed background to white */}
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h1
            className="font-bold text-3xl md:text-5xl text-gray-900 mb-4" // Changed text color for white background
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Global<span className="text-[#2C74BC]">{" "}Operations</span>
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
