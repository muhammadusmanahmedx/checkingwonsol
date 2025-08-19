"use client";

import { useNavigationLoader } from "../navigationLoader";
import CircularGallery from "./circular-gallary";

const ServicesSection = () => {
  const { navigateWithLoader, isLoading } = useNavigationLoader();

  const services = [
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404118/programming-background-collage_1_n1mx7d.jpg`,
      text: "Web Development",
      onClick: () =>
        navigateWithLoader(
          "/services/web-development",
          "Taking you to Web Development services...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404319/empowered-business-woman-working-city_1_kjeqta.jpg`,
      text: "Mobile Apps",
      onClick: () =>
        navigateWithLoader(
          "/services/mobile-apps",
          "Taking you to Mobile Apps services...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404532/saas-concept-collage_1_gxmpxw.jpg`,
      text: "Cloud Solutions",
      onClick: () =>
        navigateWithLoader(
          "/services/cloud-solutions",
          "Taking you to Cloud Solutions...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405240/businesswoman-interacting-with-ai-hologram-office_cfin0o.jpg`,
      text: "AI Integration",
      onClick: () =>
        navigateWithLoader(
          "/services/ai-integration",
          "Taking you to AI Integration services...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755403844/technology-concept-with-futuristic-element_1_1_rt33cu.jpg`,
      text: "Digital Transformation",
      onClick: () =>
        navigateWithLoader(
          "/services/digital-transformation",
          "Taking you to Digital Transformation...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405241/two-young-businessman-having-successful-meeting-restaurant_cyhutx.jpg`,
      text: "IT Consulting",
      onClick: () =>
        navigateWithLoader(
          "/services/consulting",
          "Taking you to IT Consulting...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405473/freelance-programmer-working-remote-writing-code-software-pc-using-keyboard-debugging-algorithm-client-selective-focus-coder-computer-screen-with-programming-laguage-text_1_ycpuin.jpg`,
      text: "DevOps Solutions",
      onClick: () =>
        navigateWithLoader(
          "/services/devops",
          "Taking you to DevOps Solutions...",
          2000
        ),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405229/cybersecurity-concept-illustration_1_quvqss.jpg`,
      text: "Cybersecurity",
      onClick: () =>
        navigateWithLoader(
          "/services/cybersecurity",
          "Taking you to Cybersecurity services...",
          2000
        ),
    },
  ];

  const handleViewAllServicesClick = () => {
    navigateWithLoader("/services", "Exploring all our services...", 2500);
  };

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/6 w-40 sm:w-72 h-40 sm:h-72 bg-[#2C74BC]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-72 h-40 sm:h-72 bg-[#2C74BC]/10 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 px-4 sm:px-8">
        {/* Badge */}
        <div className="mb-3 sm:mb-6">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
            Our Expertise
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-gray-900">Comprehensive </span>

          <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
            Technology Services
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
          From cutting-edge web development to AI integration, we deliver
          solutions that transform your business and drive success in the
          digital landscape.
        </p>
      </div>

      {/* Interactive Services Gallery */}
      <div className="relative z-10 h-72 sm:h-96 md:h-[500px] mb-20 sm:mb-16 md:mb-12 px-2 sm:px-0">
        <CircularGallery
          items={services}
          bend={2}
          textColor="#2C74BC"
          borderRadius={0.05}
          font="bold 18px Inter, sans-serif"
          scrollSpeed={2}
          scrollEase={0.08}
        />
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-6 sm:mt-8 px-4">
        <button
          onClick={handleViewAllServicesClick}
          disabled={isLoading}
          className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white bg-[#2C74BC] hover:bg-[#2C74BC]/90 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base ${
            isLoading ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Loading..." : "View All Services"}
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
