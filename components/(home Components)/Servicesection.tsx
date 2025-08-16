'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Types
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  delay: number;
}

interface TechBadgeProps {
  tech: string;
  index: number;
}

// Technology Badge Component
const TechBadge: React.FC<TechBadgeProps> = ({ tech, index }) => {
  return (
    <motion.span
      className="inline-block px-3 py-1 bg-gray-100 hover:bg-green-400/10 text-gray-700 hover:text-blue-900 text-xs font-medium rounded-full border border-gray-200 hover:border-green-400/30 transition-all duration-300 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      {tech}
    </motion.span>
  );
};

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, technologies, delay }) => {
  return (
    <motion.div
      className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-400/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-blue-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating accent */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-400/10 to-blue-900/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
          whileHover={{ rotate: 12 }}
        >
          <div className="text-white text-2xl">
            {icon}
          </div>
        </motion.div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <TechBadge key={index} tech={tech} index={index} />
          ))}
        </div>
        
        {/* Learn more arrow */}
        <motion.div
          className="flex items-center mt-6 text-green-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Quick Access Service Component
const QuickService: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => {
  return (
    <motion.div
      className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-400/5 transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-br from-green-400 to-blue-900 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">
          {title}
        </h4>
        <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Main Service Highlights Component
const ServiceHighlights: React.FC = () => {
  const mainServices = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies. From simple websites to complex enterprise solutions.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind CSS']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment strategies that grow with your business needs.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      icon: '🤖',
      title: 'AI & ML Integration',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to automate and optimize your processes.',
      technologies: ['TensorFlow', 'Python', 'OpenAI', 'Computer Vision', 'NLP']
    },
    {
      icon: '🔧',
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      technologies: ['Python', 'Java', 'C#', '.NET', 'PostgreSQL']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that combines beautiful aesthetics with intuitive functionality for optimal user engagement.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research']
    }
  ];

  const quickServices = [
    {
      title: 'Free Consultation',
      description: 'Get expert advice on your project requirements and technical roadmap'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Quick proof-of-concept development to validate your ideas'
    },
    {
      title: 'Code Review & Audit',
      description: 'Professional assessment of existing codebase and architecture'
    },
    {
      title: 'Technical Support',
      description: 'Ongoing maintenance and support for your applications'
    },
    {
      title: 'Team Augmentation',
      description: 'Skilled developers to scale your existing development team'
    },
    {
      title: 'Migration Services',
      description: 'Smooth transition from legacy systems to modern platforms'
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400/10 to-blue-900/10 px-6 py-3 rounded-full border border-green-400/20 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-blue-900 font-semibold text-sm tracking-wide">
              OUR SERVICES
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent">
              Tech Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From concept to deployment, we offer end-to-end software development services 
            that transform your ideas into powerful, scalable solutions.
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Quick Services Section */}
        <motion.div
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Quick{' '}
                <span className="bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent">
                  Services
                </span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Need immediate assistance or have a specific requirement? 
                Our quick services are designed to provide rapid, high-quality solutions 
                for your most pressing needs.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-blue-900 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-400/30 transition-all duration-300 group"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
            
            <div className="space-y-4">
              {quickServices.map((service, index) => (
                <QuickService
                  key={index}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;