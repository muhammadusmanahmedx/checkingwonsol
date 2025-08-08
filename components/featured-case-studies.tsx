"use client";

import { motion } from "framer-motion";
import MagicBento from "./magic-bento";

export function FeaturedCaseStudies() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Featured Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise in delivering 
            innovative software solutions across various industries.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            disableAnimations={false}
            spotlightRadius={400}
            particleCount={12}
            enableTilt={true}
            glowColor="59, 130, 246"
            clickEffect={true}
            enableMagnetism={true}
          />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="group relative px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:text-white">
              <div className="absolute inset-0 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative z-10">View All Projects</span>
            </button>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span>or</span>
              <button className="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 underline underline-offset-4">
                Discuss Your Project
              </button>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Industries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedCaseStudies;
