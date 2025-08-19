"use client";
import React, { useState, useEffect } from "react";
import {
  IconCode,
  IconDeviceMobile,
  IconShield,
  IconCloud,
  IconBrain,
  IconTrendingUp,
  IconPalette,
  IconBrandWordpress,
  IconSettings,
  IconChartBar,
  IconBrandFacebook,
  IconSearch,
  IconRocket,
  IconUsers,
  IconBulb,
  IconCpu,
  IconDatabase,
  IconDeviceDesktop,
} from "@tabler/icons-react";
// import AboutUsSection from "@/components/breadcrumb";
import Image from "next/image";
import AboutUsSection from "@/components/breadcrum";

// Type definitions for better type safety
interface IconProps {
  className?: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  image: string;
}

interface ServiceCategoryProps {
  title: string;
  description: string;
  services: Service[];
  icon: React.ComponentType<IconProps>;
  index: number;
}

// Centralized service data
const consultingServices: Service[] = [
  {
    title: "IT Consulting",
    description:
      "Expert technology consulting to guide your digital transformation journey and strategic planning.",
    icon: IconUsers,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502642/modern-equipped-computer-lab-min_o1mj02.jpg",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for modern businesses seeking flexibility.",
    icon: IconCloud,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502633/woman-scrolling-laptop-min_nypas0.jpg",
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets and sensitive business data.",
    icon: IconShield,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502819/cybersecurity-professional-work-min_fbaj58.jpg",
  },
  {
    title: "DevOps Solutions",
    description:
      "Streamlined development and deployment processes for faster time-to-market and improved reliability.",
    icon: IconDatabase,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502856/standard-quality-control-concept-m-min_ewbxkv.jpg",
  },
  {
    title: "AI Integration",
    description:
      "Integrate artificial intelligence and machine learning into your business processes for competitive advantage.",
    icon: IconBrain,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502876/ai-technology-human-interaction-min_uxwibg.jpg",
  },
  {
    title: "Digital Transformation",
    description:
      "Complete digital transformation strategies to modernize your business operations and increase efficiency.",
    icon: IconChartBar,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502902/representation-user-experience-interface-design-min_dfpmmb.jpg",
  },
];

const developmentServices: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with cutting-edge features and seamless performance.",
    icon: IconDeviceMobile,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755499869/marketing-creative-collage-with-phone-min_onrsju.jpg",
  },
  {
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies and best practices.",
    icon: IconCode,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755500026/3795147-min_dfby4m.jpg",
  },
  {
    title: "Custom System Design",
    description:
      "Tailored software solutions designed specifically for your unique business requirements and workflows.",
    icon: IconSettings,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755500347/7587686-min_siktoi.jpg",
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress themes, plugins, and complete website solutions with advanced functionality.",
    icon: IconBrandWordpress,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755500125/marketing-strategy-planning-strategy-concept-min_bpzzoy.jpg",
  },
  {
    title: "Low Code / No Code",
    description:
      "Rapid application development using modern low-code and no-code platforms for faster deployment.",
    icon: IconRocket,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755500174/3496219-min_ug5qnv.jpg",
  },
  {
    title: "Automation Solutions",
    description:
      "Streamline your business processes with intelligent automation systems and workflow optimization.",
    icon: IconCpu,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501134/hand-touching-screen-rpa-concept-min_ycz5ov.jpg",
  },
];

const designServices: Service[] = [
  {
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences with proven methodologies.",
    icon: IconPalette,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501711/ui-ux-representations-with-laptop-min_oibioh.jpg",
  },
  {
    title: "Website Design",
    description:
      "Beautiful, functional website designs that convert visitors into customers with optimized user journeys.",
    icon: IconDeviceDesktop,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501617/web-design-technology-browsing-programming-concept-min_uvgpnx.jpg",
  },
  {
    title: "Design & Redesign",
    description:
      "Complete design overhauls and refreshes for existing digital products to enhance user engagement.",
    icon: IconBulb,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755501301/9059715-min_1_hrm6c9.jpg",
  },
];

const marketingServices: Service[] = [
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic with data-driven SEO strategies.",
    icon: IconSearch,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502599/searching-engine-optimizing-seo-browsing-concept-min_awggzp.jpg",
  },
  {
    title: "Mobile App SEO (ASO)",
    description:
      "App Store Optimization to increase your mobile app's visibility, downloads, and user retention.",
    icon: IconTrendingUp,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502997/representations-user-experience-interface-design-min_h0eybn.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to grow your online presence and reach target audiences.",
    icon: IconBrandFacebook,
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755502730/medium-shot-men-holding-smartphone-min_dwy2cw.jpg",
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white transition-all duration-500 cursor-pointer border shadow-sm hover:shadow-xl transform hover:-translate-y-1 ${
        isHovered
          ? "border-[#2C74BC]/30 shadow-[#2C74BC]/10"
          : "border-gray-200"
      } ${isClicked ? "scale-95" : "hover:scale-[1.02]"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${service.title}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-[#2C74BC]/3 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-all duration-300`}
      />
      <div className="relative z-10 p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 relative">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 sm:mb-4">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          <div
            className={`absolute -bottom-1 sm:-bottom-2 left-3 sm:left-4 inline-block transition-all duration-500 ${
              isHovered ? "transform rotate-3 scale-110" : ""
            }`}
          >
            <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100">
              <service.icon
                className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
                  isHovered ? "text-[#2C74BC]" : "text-gray-600"
                }`}
              />
            </div>
          </div>
        </div>
        <h3
          className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-all duration-300 leading-tight ${
            isHovered ? "text-[#2C74BC]" : "text-gray-800"
          }`}
        >
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>
      <div
        className={`absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 transform transition-all duration-300 ${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] sm:border-l-[20px] border-l-transparent border-t-[16px] sm:border-t-[20px] border-t-[#2C74BC]/8" />
      </div>
    </div>
  );
};

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  description,
  services,
  icon: Icon,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`mb-16 sm:mb-20 lg:mb-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 group cursor-pointer">
          <div className="relative mb-3 sm:mb-0 sm:mr-4">
            <div className="absolute inset-0 bg-[#2C74BC]/8 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-150" />
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#2C74BC] relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 group-hover:text-[#2C74BC] transition-colors duration-300 text-center sm:text-left">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
          {description}
        </p>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#2C74BC] to-blue-400 mx-auto rounded-full mt-4 sm:mt-6" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {services.map((service, serviceIndex) => (
          <ServiceCard
            key={serviceIndex}
            service={service}
            index={serviceIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default function ServicesClient() {
  const [ctaHovered, setCtaHovered] = useState(null);

  return (
    <>
      <AboutUsSection
        title="Our Services"
        backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755457755/html-css-collage-concept-with-person_1_1_z3okny.jpg"
        subtitle="We provide comprehensive technology solutions to help your business thrive"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <ServiceCategory
            title="IT Consulting & Strategy"
            description="Expert guidance and strategic solutions to transform your business with cutting-edge technology."
            services={consultingServices}
            icon={IconUsers}
            index={3}
          />
          <ServiceCategory
            title="Development Services"
            description="Custom software development solutions built with modern technologies and industry best practices."
            services={developmentServices}
            icon={IconCode}
            index={0}
          />
          <ServiceCategory
            title="Design & User Experience"
            description="Creating beautiful, intuitive designs that engage users and drive conversions with proven methodologies."
            services={designServices}
            icon={IconPalette}
            index={1}
          />
          <ServiceCategory
            title="Digital Marketing & SEO"
            description="Boost your online presence and reach your target audience with our comprehensive marketing expertise."
            services={marketingServices}
            icon={IconTrendingUp}
            index={2}
          />
        </div>
      </div>
    </>
  );
}
