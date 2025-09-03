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

        {/* Leadership Team */}
        <div
          className="pt-8 md:pt-10"
          style={{ borderTop: `1px solid #2C74BC` }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h3
              className="text-lg sm:text-xl font-semibold mb-8 text-center"
              style={{ color: "#2C74BC" }}
            >
              Meet Our Leadership Team
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Founder */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755492125/93374353155_sea8qq.png"
                    alt="Founder Portrait"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2"
                    style={{ borderColor: "#2C74BC" }}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div
                    className="font-semibold text-lg mb-1"
                    style={{ color: "#2C74BC" }}
                  >
                    Muhammad Usman Ahmed
                  </div>
                  <div className="text-sm text-gray-600 mb-3 font-medium">
                    Founder & Lead Developer
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Visionary leader driving innovation in AI and automation solutions. 
                    Passionate about contributing to Vision 2030 initiatives across 
                    the Middle East region.
                  </p>
                </div>
              </div>

              {/* Co-Founder */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">

<div className="flex-shrink-0 mx-auto sm:mx-0">
                  <img
                    src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755409551/beautiful-muslim-woman-black-niqab-600nw-391752175_lvk8xn.webp"
                    alt="Founder Portrait"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2"
                    style={{ borderColor: "#2C74BC" }}
                  />
                </div>


                  {/* <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center text-white font-semibold text-xl"
                    style={{ borderColor: "#2C74BC", backgroundColor: "#2C74BC" }}
                  
                  >
                    FN
                  </div> */}


                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div
                    className="font-semibold text-lg mb-1"
                    style={{ color: "#2C74BC" }}
                  >
                    Fatima Nazir
                  </div>
                  <div className="text-sm text-gray-600 mb-3 font-medium">
                    Co-Founder & Technology Strategist
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Strategic technology expert focused on scaling innovative 
                    solutions and building partnerships across emerging markets 
                    in the MENA region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialFactBar;