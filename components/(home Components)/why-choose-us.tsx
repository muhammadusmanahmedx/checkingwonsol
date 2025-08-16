"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import TrueFocus from "./true-focus";

const reasons = [
  {
    icon: "🚀",
    title: "Proven Expertise",
    description:
      "Over 5+ years of experience delivering cutting-edge software solutions across diverse industries.",
    stats: "500+ Projects Delivered",
  },
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description:
      "Agile development methodology ensures rapid deployment without compromising on quality.",
    stats: "50% Faster Than Industry Average",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description:
      "Bank-grade security protocols and compliance standards protect your valuable data.",
    stats: "99.9% Security Rating",
  },
  {
    icon: "🎯",
    title: "Custom Solutions",
    description:
      "Tailored software development that perfectly aligns with your unique business requirements.",
    stats: "100% Customized Approach",
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description:
      "Future-proof solutions designed to grow seamlessly with your expanding business needs.",
    stats: "10x Scalability Guaranteed",
  },
  {
    icon: "🤝",
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance to ensure uninterrupted operations.",
    stats: "< 2 Hour Response Time",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="mb-12">
          <span className="inline-block px-6 py-3 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-sm font-semibold border border-[#2C74BC]/20 backdrop-blur-sm">
            Why Us
          </span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <TrueFocus
            sentence="Why Choose Won Solutions"
            manualMode={false}
            blurAmount={3}
            borderColor="#3b82f6"
            glowColor="rgba(59, 130, 246, 0.6)"
            animationDuration={0.5}
            pauseBetweenAnimations={1.5}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          At <span className="font-semibold text-blue-600">wonsol.com</span>, we
          don't just build software – we craft digital experiences that
          transform businesses and drive innovation forward.
        </motion.p>
      </div>

      {/* Reasons Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative p-8 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-blue-400 hover:shadow-xl cursor-pointer h-full">
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                } shadow-2xl shadow-blue-500/20`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {reason.description}
                </p>

                {/* Stats */}
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 border border-blue-200 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                    {reason.stats}
                  </span>
                </div>
              </div>

              {/* Corner Decorations */}
              <div
                className={`absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-blue-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-blue-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-blue-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
              <div
                className={`absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-blue-400 transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
          <button className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <span className="relative z-10">Start Your Project</span>
          </button>
          
          <div className="flex items-center gap-2 text-gray-600">
            <span>or</span>
            <button className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline underline-offset-4">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Join 500+ satisfied clients who trust Nexus Solutions for their software needs
        </p>
      </motion.div> */}

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-16 pt-8 border-t border-gray-200"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="font-semibold">4.9/5 Client Rating</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span className="font-semibold">ISO 27001 Certified</span>
          </div> */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <span className="font-semibold">Global Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-semibold">Agile Methodology</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default WhyChooseUs;
