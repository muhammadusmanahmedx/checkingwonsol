'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Types
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="group p-8 rounded-2xl border border-gray-100 hover:border-green-400/30 bg-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white text-2xl">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Stats Component
const StatsSection: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Expert Team' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent mb-2">
            {stat.number}
          </div>
          <div className="text-gray-600 font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Main Intro Section Component
const IntroSection: React.FC = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Next-Gen Technology',
      description: 'Leveraging cutting-edge technologies like React, Next.js, and TypeScript to build future-ready applications.'
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom software development that perfectly aligns with your business objectives and growth strategies.'
    },
    {
      icon: '🚀',
      title: 'Optimal Performance',
      description: 'High-performance applications built for scale, speed, and seamless user experiences across all platforms.'
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400/10 to-blue-900/10 px-6 py-3 rounded-full border border-green-400/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              ABOUT WON SOLUTIONS
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            World of{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent">
              Optimal
            </span>
            {' '}Next Gen{' '}
            <span className="bg-gradient-to-r from-blue-900 to-green-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>

          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-2xl lg:text-3xl font-light text-gray-700 italic">
              "Solutions that{' '}
              <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent">
                Succeed
              </span>
              "
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-900 rounded-full"></div>
          </motion.div>

          <motion.p
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At WON Solutions, we transform ambitious ideas into exceptional software experiences. 
            Our team of expert developers and designers craft solutions that don't just meet expectations—they exceed them. 
            From enterprise applications to innovative startups, we deliver technology that drives success.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 lg:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Proven Track Record
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our numbers speak for themselves. We've helped businesses across industries 
              achieve their digital transformation goals with measurable results.
            </p>
          </div>
          
          <StatsSection />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how WON Solutions can help transform your vision into reality. 
            Our team is ready to deliver solutions that succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-900 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 group"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            
            <motion.a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full border-2 border-blue-900/20 hover:border-green-400 hover:bg-green-400/5 transition-all duration-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;