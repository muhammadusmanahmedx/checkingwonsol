import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    company: "SSA Consultants",
    logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755407279/sahillogo_q37krn.png",
    avatar:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755408519/ceo_ssa_xykzmd.jpg",
    name: "Dr. Umar Sahil",
    role: "CEO, SSA Consultants",
    review:
      "From data chaos to clarity - webtics delivers immediate results that transformed our workflow.",
  },
  // {
  //   company: "SalSabeelScents",
  //   logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755408781/Asset_3_mzz7s1.png",
  //   avatar:
  //     "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755409009/WhatsApp_Image_2025-08-17_at_10.36.13_AM_sb6kg2.jpg",
  //   name: "Muhammad Kashif",
  //   role: "Founder, SalSabeelScents",
  //   review:
  //     "Our team saved countless hours after switching to webtics. The efficiency gains have been remarkable.",
  // },
  {
    company: "Workforce Pro",
    logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755414869/Frame_150_rd1ng3.png",
    avatar:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755409452/istockphoto-174766396-612x612_1_lzkall.jpg",
    name: "Muhammad Ali",
    role: "CEO",
    review:
      "Webtics delivers powerful insights that turn complex data into actionable decisions for our entire team.",
  },
  // {
  //   company: "FN Nails Studio",
  //   logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755428469/Frame_151_1_fnaqaz.png",
  //   avatar:
  //     "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755409551/beautiful-muslim-woman-black-niqab-600nw-391752175_lvk8xn.webp",
  //   name: "Fatima Nazir",
  //   role: "CEO, FN Nails Studio",
  //   review:
  //     "The intuitive interface and powerful analytics have completely transformed how we make data-driven decisions.",
  // },
  {
    company: "AgriTech",
    logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755413121/Frame_148_aafhum.png",
    avatar:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755440321/730411709067079.67ce074506cff_sbeapv.jpg",
    name: "Shehroz Khan",
    role: "CEO, AgriTech",
    review:
      "Webtics has become an indispensable tool for our team. The insights are actionable and the platform is incredibly user-friendly.",
  },
  {
    company: "Falah Charity",
    logo: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755414094/Frame_149_2_j3k8qj.png",
    avatar:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755440285/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416_jbaj6r.avif",
    name: "Dr. Naeem",
    role: "CEO, Falah Charity",
    review:
      "Webtics has become an indispensable tool for our team. The insights are actionable and the platform is incredibly user-friendly.",
  },
];

const CompanyLogo = ({ company, logo }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Fallback component names if image fails to load
  const fallbackNames = {
    SalSabeelScents: "SalSabeelScents",
    clerk: "Clerk",
    raycast: "Raycast",
    vercel: "▲ Vercel",
    nextjs: "Next.js",
    stripe: "Stripe",
  };

  if (imageError) {
    return (
      <div className="text-3xl font-bold text-[#2C74BC]">
        {fallbackNames[company]}
      </div>
    );
  }

  return (
    <div>
      <img
        src={logo}
        alt={`${company} logo`}
        className="h-12 w-auto max-w-[200px] object-contain"
        onError={handleImageError}
        draggable={false}
      />
    </div>
  );
};

const Highlighter = ({ children, action, color }) => {
  const baseClasses = "relative inline-block";
  
  if (action === "highlight") {
    return (
      <span className={`${baseClasses} bg-[#2C74BC] text-white px-2 py-1 rounded`}>
        {children}
      </span>
    );
  }
  
  if (action === "underline") {
    return (
      <span className={`${baseClasses} border-b-4 border-[#2C74BC] pb-1`}>
        {children}
      </span>
    );
  }
  
  return <span className={baseClasses}>{children}</span>;
};

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    const clientX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    setStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    const clientX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    if (Math.abs(translateX) > 100) {
      if (translateX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setTranslateX(0);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}

        <div className="relative z-10 text-center mb-28 px-8">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-sm font-semibold border border-[#2C74BC]/20 backdrop-blur-sm">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className=" text-[#2C74BC]">
             
              <span className=" text-white">
                <Highlighter action="underline" color="#2C74BC">
                  <Highlighter action="highlight" color="#2C74BC">
                    Our{" "}Customers
                  </Highlighter>{" "}
                </Highlighter>
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 font-regular max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders have
            to say about their experience with our platform.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, shown on larger screens */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 border-2 border-[#2C74BC] rounded-full p-2 sm:p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 hidden sm:block ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === testimonials.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 border-2 border-[#2C74BC] rounded-full p-2 sm:p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 hidden sm:block ${
              currentIndex === testimonials.length - 1
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Testimonials */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing mt-6 touch-pan-y"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(calc(-${
                  currentIndex * 100
                }% + ${translateX}px))`,
                transitionDuration: isDragging ? "0ms" : "500ms",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex flex-col items-center px-4 sm:px-6 md:px-8"
                  style={{ userSelect: "none" }}
                >
                  {/* Company Logo */}
                  <div className="mb-6 sm:mb-10 h-12 sm:h-14 md:h-14 flex items-center justify-center w-full">
                    <CompanyLogo
                      company={testimonial.company}
                      logo={testimonial.logo}
                    />
                  </div>

                  {/* Review */}
                  <blockquote className="max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-balance text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-regular text-gray-800 leading-relaxed mb-6 sm:mb-8 px-2">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-gray-100 ring-2 sm:ring-4 ring-[#2C74BC]/20 mb-3 sm:mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 text-center">
                      {testimonial.name}
                    </h5>
                    <h5 className="text-sm sm:text-base text-gray-500 mt-1 text-center">
                      {testimonial.role}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#2C74BC]/50 focus:ring-offset-2 ${
                  index === currentIndex
                    ? "bg-[#2C74BC] scale-110 shadow-lg"
                    : "bg-[#2C74BC]/30 hover:bg-[#2C74BC]/50"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 sm:mt-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="w-full bg-[#2C74BC]/10 rounded-full h-0.5 sm:h-1">
            <div
              className="bg-[#2C74BC] h-0.5 sm:h-1 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:hidden">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`border-2 border-[#2C74BC] rounded-full p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform active:scale-95"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === testimonials.length - 1}
            className={`border-2 border-[#2C74BC] rounded-full p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 ${
              currentIndex === testimonials.length - 1
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform active:scale-95"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}