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

        {/* Founder Message */}
        <div
          className="pt-8 md:pt-10"
          style={{ borderTop: `1px solid #2C74BC` }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* Founder Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755492125/93374353155_sea8qq.png"
                  alt="Founder Portrait"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2"
                  style={{ borderColor: "#2C74BC" }}
                />
              </div>

              {/* Message Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="mb-6">
                  <h3
                    className="text-lg sm:text-xl font-semibold mb-3"
                    style={{ color: "#2C74BC" }}
                  >
                    Message from Our Founder
                  </h3>

                  <div
                    className="bg-gray-50 p-6 rounded-lg border-l-4"
                    style={{ borderLeftColor: "#2C74BC" }}
                  >
                    <p className="text-gray-800 leading-relaxed">
                      "At Wonsol, our mission is to deliver{" "}
                      <strong>
                        cutting-edge software, AI, and automation solutions
                      </strong>{" "}
                      that empower businesses to thrive in the era of frontier
                      technology. We aspire to play an active role in shaping
                      the future by contributing to{" "}
                      <strong style={{ color: "#2C74BC" }}>
                        Vision 2030 initiatives
                      </strong>{" "}
                      in Saudi Arabia and Egypt, while also expanding our impact
                      across the UAE. Our goal is to drive innovation,
                      efficiency, and sustainable growth through smart,
                      technology-driven solutions."
                    </p>
                  </div>
                </div>

                {/* Founder Details */}
                <div className="text-sm text-gray-600">
                  <div
                    className="font-semibold text-base"
                    style={{ color: "#2C74BC" }}
                  >
                    Muhammad Usman Ahmed
                  </div>
                  <div>Founder & Lead Developer</div>
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
