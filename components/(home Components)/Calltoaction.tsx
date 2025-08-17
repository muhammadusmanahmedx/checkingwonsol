"use client";

import React from "react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-[#2C74BC] py-14 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-8 right-8 w-24 sm:w-32 h-24 sm:h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-8 left-8 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-snug">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Next Project
            </span>
            ?
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl sm:max-w-3xl mx-auto">
            Let’s transform your ideas into powerful software solutions. Get
            started today with a free consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center ">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2C74BC] font-bold text-base sm:text-lg rounded-full hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 group"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Free Consultation</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>

          {/* Quick Contact Info */}
         
    
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
