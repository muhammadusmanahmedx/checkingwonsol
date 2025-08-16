'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Types
interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  projectType: string;
}

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

// Star Rating Component
const StarRating: React.FC<StarRatingProps> = ({ rating, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.svg
          key={star}
          className={`${sizeClasses[size]} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3, delay: star * 0.1 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

// Individual Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: TestimonialProps; isActive: boolean; index: number }> = ({ 
  testimonial, 
  isActive,
  index 
}) => {
  return (
    <motion.div
      className={`relative p-8 lg:p-10 bg-white rounded-3xl border transition-all duration-500 ${
        isActive 
          ? 'border-green-400/30 shadow-xl shadow-green-400/10 scale-105' 
          : 'border-gray-100 hover:border-green-400/20 hover:shadow-lg'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-green-400/20 text-4xl font-serif">
        "
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={testimonial.rating} />
      </div>
      
      {/* Content */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-medium">
        "{testimonial.content}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-1">
            {testimonial.name}
          </h4>
          <p className="text-gray-600 text-sm">
            {testimonial.position}
          </p>
          <p className="text-blue-900 font-semibold text-sm">
            {testimonial.company}
          </p>
        </div>
      </div>
      
      {/* Project Type Badge */}
      <div className="absolute bottom-6 right-6">
        <span className="px-3 py-1 bg-green-400/10 text-green-600 text-xs font-medium rounded-full border border-green-400/20">
          {testimonial.projectType}
        </span>
      </div>
    </motion.div>
  );
};

// Carousel Testimonial Component
const CarouselTestimonial: React.FC<{ testimonial: TestimonialProps }> = ({ testimonial }) => {
  return (
    <motion.div
      className="text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      {/* Large Quote */}
      <div className="text-6xl text-green-400/20 mb-6 font-serif">"</div>
      
      {/* Content */}
      <blockquote className="text-2xl lg:text-3xl text-gray-800 font-light leading-relaxed mb-8 italic">
        "{testimonial.content}"
      </blockquote>
      
      {/* Rating */}
      <div className="flex justify-center mb-8">
        <StarRating rating={testimonial.rating} size="lg" />
      </div>
      
      {/* Client Info */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-900 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">
          {testimonial.name}
        </h4>
        <p className="text-gray-600 mb-1">
          {testimonial.position}
        </p>
        <p className="text-blue-900 font-semibold">
          {testimonial.company}
        </p>
        <span className="mt-4 px-4 py-2 bg-green-400/10 text-green-600 text-sm font-medium rounded-full border border-green-400/20">
          {testimonial.projectType}
        </span>
      </div>
    </motion.div>
  );
};

// Main Client Testimonials Component
const ClientTestimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('carousel');

  const testimonials: TestimonialProps[] = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "CTO",
      company: "TechFlow Solutions",
      content: "WON Solutions transformed our entire digital infrastructure. Their Next.js expertise and attention to detail exceeded our expectations. The team delivered on time and the results speak for themselves.",
      rating: 5,
      image: "",
      projectType: "Web Development"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "InnovateNow",
      content: "Working with WON Solutions was a game-changer for our startup. They built our MVP in record time and helped us scale from 0 to 100k users. Their technical guidance was invaluable.",
      rating: 5,
      image: "",
      projectType: "Full Stack Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CEO",
      company: "GreenTech Ventures",
      content: "The mobile app WON Solutions created for us has revolutionized how our customers interact with our services. Clean code, beautiful design, and exceptional performance across all devices.",
      rating: 5,
      image: "",
      projectType: "Mobile Development"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "IT Director",
      company: "Enterprise Corp",
      content: "Their cloud migration strategy saved us 40% on infrastructure costs while improving performance. The team's expertise in AWS and modern DevOps practices is truly impressive.",
      rating: 5,
      image: "",
      projectType: "Cloud Solutions"
    },
    {
      id: 5,
      name: "Lisa Wang",
      position: "Founder",
      company: "AI Dynamics",
      content: "WON Solutions integrated AI capabilities into our platform seamlessly. Their understanding of machine learning and practical implementation exceeded our technical team's expectations.",
      rating: 5,
      image: "",
      projectType: "AI Integration"
    },
    {
      id: 6,
      name: "James Parker",
      position: "VP Engineering",
      company: "DataStream Inc",
      content: "Custom software development at its finest. They understood our complex requirements and delivered a solution that perfectly fits our workflow. Highly recommended!",
      rating: 5,
      image: "",
      projectType: "Custom Software"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (viewMode === 'carousel') {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(timer);
    }
  }, [viewMode, testimonials.length]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
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
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-900 bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Don't just take our word for it. Here's what industry leaders and successful entrepreneurs 
            say about working with WON Solutions.
          </motion.p>

          {/* View Toggle */}
          <motion.div
            className="inline-flex p-1 bg-gray-100 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                viewMode === 'carousel'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-md font-medium text-sm transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-blue-900 shadow-sm'
                  : 'text-gray-600 hover:text-blue-900'
              }`}
            >
              All Reviews
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'carousel' ? (
            <motion.div key="carousel" className="mb-12">
              <CarouselTestimonial testimonial={testimonials[currentTestimonial]} />
              
              {/* Carousel Controls */}
              <div className="flex justify-center items-center mt-12 gap-4">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 bg-white rounded-full border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? 'bg-green-400 scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 bg-white rounded-full border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="grid" className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={false}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Project Success</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how WON Solutions can help you achieve similar results. 
            Your success story could be next!
          </p>
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
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;