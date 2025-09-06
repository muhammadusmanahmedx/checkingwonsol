import React from "react";
import { Star, Code, Rocket } from "lucide-react";

const TestimonialFactBar = () => {
  return (
    <div className="relative bg-white px-8 py-6 overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 opacity-5">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C300,200 600,0 900,150 C1050,225 1150,75 1200,125 L1200,400 L0,400 Z"
            fill="#2C74BC"
          />
          <path
            d="M0,200 C250,300 550,100 850,250 C1000,325 1100,175 1200,225 L1200,400 L0,400 Z"
            fill="#2C74BC"
            fillOpacity="0.4"
          />
          <path
            d="M0,300 C200,350 500,250 800,320 C950,365 1050,295 1200,335 L1200,400 L0,400 Z"
            fill="#2C74BC"
            fillOpacity="0.3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Facts Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3"
              style={{ backgroundColor: "#2C74BC" }}
            >
              <Star className="h-5 w-5 text-white" />
            </div>
            <div
              className="text-2xl font-semibold mb-1"
              style={{ color: "#2C74BC" }}
            >
              100%
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Customer Satisfaction
            </div>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3"
              style={{ backgroundColor: "#2C74BC" }}
            >
              <Code className="h-5 w-5 text-white" />
            </div>
            <div
              className="text-2xl font-semibold mb-1"
              style={{ color: "#2C74BC" }}
            >
              50K+
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Lines of Code
            </div>
          </div>

          <div className="text-center">
            <div
              className="inline-flex items-center justify-center w-10 h-10 rounded-sm mb-3"
              style={{ backgroundColor: "#2C74BC" }}
            >
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <div
              className="text-2xl font-semibold mb-1"
              style={{ color: "#2C74BC" }}
            >
              24/7
            </div>
            <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
              Startup Hustle
            </div>
          </div>
        </div>

        {/* Leadership Team - Founder Only */}
        <div className="pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3
              className="text-2xl sm:text-3xl font-bold mb-12"
              style={{ color: "#2C74BC" }}
            >
              Meet Our Founder
            </h3>

            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <img
                  src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755492125/93374353155_sea8qq.png"
                  alt="Founder Portrait"
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-2xl"
                />
                <div 
                  className="absolute inset-0 rounded-full border-4 opacity-20"
                  style={{ borderColor: "#2C74BC" }}
                ></div>
              </div>
              
              <div
                className="font-bold text-2xl sm:text-3xl mb-2"
                style={{ color: "#2C74BC" }}
              >
                Muhammad Usman Ahmed
              </div>
              
              <div 
                className="text-lg font-semibold mb-6 px-4 py-1 rounded-full"
                style={{ 
                  color: "#2C74BC", 
                  backgroundColor: "rgba(44, 116, 188, 0.1)" 
                }}
              >
                Founder 
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
                Visionary leader driving innovation in AI and automation solutions. 
                Passionate about contributing to Vision 2030 initiatives across 
                the Middle East region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFactBar;