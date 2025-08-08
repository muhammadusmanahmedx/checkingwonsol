"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useState } from "react";

const services = [
  {
    title: "AI & Machine Learning",
    description: "Intelligent solutions powered by cutting-edge AI algorithms and machine learning models.",
    icon: "🤖",
    gradient: "from-blue-500 to-blue-600",
    features: ["Neural Networks", "Data Analytics", "Predictive Models"]
  },
  {
    title: "Web Development",
    description: "Full-stack web applications built with modern frameworks and technologies.",
    icon: "🌐",
    gradient: "from-blue-400 to-blue-500",
    features: ["React/Next.js", "Node.js", "Cloud Hosting"]
  },
  {
    title: "Web Redesign",
    description: "Transform your existing website into a modern, responsive digital experience.",
    icon: "✨",
    gradient: "from-blue-300 to-blue-400",
    features: ["Performance Boost", "Mobile Responsive", "SEO Optimized"]
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and engagement.",
    icon: "🎨",
    gradient: "from-indigo-400 to-blue-500",
    features: ["User Research", "Prototyping", "Design Systems"]
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business requirements.",
    icon: "💻",
    gradient: "from-blue-600 to-indigo-600",
    features: ["Desktop Apps", "Mobile Apps", "APIs"]
  },
  {
    title: "Product Development",
    description: "End-to-end product development from ideation to market-ready solutions.",
    icon: "🚀",
    gradient: "from-indigo-500 to-blue-600",
    features: ["MVP Development", "Scaling", "Market Analysis"]
  },
  {
    title: "Custom Websites",
    description: "Bespoke website development crafted specifically for your brand identity.",
    icon: "🏗️",
    gradient: "from-blue-500 to-indigo-500",
    features: ["Brand Identity", "CMS Integration", "E-commerce"]
  },
  {
    title: "POS Systems",
    description: "Modern point-of-sale systems to streamline your business operations.",
    icon: "💳",
    gradient: "from-indigo-600 to-blue-700",
    features: ["Inventory Tracking", "Payment Processing", "Analytics"]
  },
  {
    title: "Management Systems",
    description: "Comprehensive management solutions to optimize your business workflows.",
    icon: "📊",
    gradient: "from-blue-400 to-indigo-500",
    features: ["Workflow Automation", "Data Management", "Reporting"]
  }
];

const firstRow = services.slice(0, Math.ceil(services.length / 2));
const secondRow = services.slice(Math.ceil(services.length / 2));

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  gradient, 
  features 
}: {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group mx-4 my-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 rounded-2xl blur-sm opacity-0 group-hover:opacity-75 transition-all duration-300",
        `bg-gradient-to-r ${gradient}`
      )}></div>
      
      {/* Main Card */}
      <div className={cn(
        "relative bg-white border-2 border-gray-200 rounded-2xl p-8 w-80 h-64",
        "hover:transform hover:scale-105 hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
      )}>
        {/* Icon and Title */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-4xl transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200 group-hover:bg-blue-100 transition-colors duration-300"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Hover Glow Effect */}
        <div className={cn(
          "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none",
          `bg-gradient-to-r ${gradient}`
        )}></div>

        {/* Corner Decorations */}
        <div className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-blue-400 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-blue-400 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-blue-400 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-blue-400 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export function ServicesSection() {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-16 px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive digital solutions designed to transform your business and drive innovation forward
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        {/* First Row - Left to Right */}
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((service, index) => (
            <ServiceCard key={`first-${index}`} {...service} />
          ))}
        </Marquee>
        
        {/* Second Row - Right to Left */}
        <Marquee reverse pauseOnHover className="[--duration:65s]">
          {secondRow.map((service, index) => (
            <ServiceCard key={`second-${index}`} {...service} />
          ))}
        </Marquee>

        {/* Gradient Fade Edges */}
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div> */}
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      {/* Call to Action */}
      <div className="text-center mt-16 relative z-10">
        <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
          <button className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">Explore Our Services</span>
          </button>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>or</span>
            <button className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline underline-offset-4">
              Get Custom Quote
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Trusted by 500+ businesses worldwide for innovative software solutions
        </p>
      </div>
    </div>
  );
}

export default ServicesSection;
