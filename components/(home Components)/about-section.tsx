import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AboutSection = ({ 
  heroImage = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755431676/industrial-designers-working-3d-model_1_1_yiydlb.jpg",
  galleryImages = [
    "/api/placeholder/400/300",
    "/api/placeholder/400/300"
  ]
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section className="  overflow-hidden relative mt-12 sm:mt-16 lg:mt-20 xl:mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #2C74BC 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #2C74BC 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         
           <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
              Something About Us
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
           
           <span className="text-gray-900">Crafting {" "}</span>
            
            <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
              digital experiences
            </span>
          </h1>





          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-0 font-regular max-w-3xl mx-auto px-2 sm:px-0">
           experiences that 
              <span className="font-bold text-[#2C74BC] relative">
                {' '}inspire{' '}
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none">
                  <path d="M0 8C20 4, 40 2, 60 4C80 6, 90 8, 100 6" stroke="#2C74BC" strokeWidth="3" fill="none" opacity="0.6"/>
                </svg>
              </span>
          </p>

          
        </div>

         {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-4 items-start">
          {/* Left Content - Story */}
          <div
            className={`lg:col-span-5 space-y-2 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#2C74BC] to-transparent"></div>
              <div className="pl-2 sm:pl-4 lg:pl-6">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                  Yes, we're{" "}
                  <span className="text-[#2C74BC]">creative!</span>
                </h2>

                <div className="space-y-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our approach combines cutting-edge technology with
                    human-centered design, creating experiences that don't just
                    look beautiful—they solve real problems and drive meaningful
                    results.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#2C74BC]/5 to-transparent rounded-2xl border-l-4 border-[#2C74BC]">
                  <blockquote className="text-base sm:text-lg md:text-xl italic text-gray-700">
                    "Make it simple, but significant."
                  </blockquote>
                  <cite className="text-xs sm:text-sm md:text-base text-[#2C74BC] font-semibold mt-2 block">
                    - Won Sol Design Philosophy
                  </cite>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Showcase */}
          <div className={`lg:col-span-7 space-y-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            
            {/* Hero Image with Overlay */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={heroImage}
                  alt="Won Sol Creative Work"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C74BC]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">Our Creative Process</h3>
                  <p className="text-sm opacity-90">Where innovation meets execution</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#2C74BC] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
                ✓
              </div>
            </div>

      
          </div>

        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center space-x-4">
           
            
            <button className="group bg-white text-[#2C74BC] px-10 py-4 rounded-full font-semibold text-lg border-2 border-[#2C74BC] hover:bg-[#2C74BC] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl">
              Let's Connect
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>

        {/* Bottom Decorative Element */}
        
      </div>
    </section>
  );
};

export default AboutSection;