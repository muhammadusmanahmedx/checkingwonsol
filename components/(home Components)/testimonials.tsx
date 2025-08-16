import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Highlighter } from "../magicui/highlighter";

const testimonials = [
  {
    company: "clerk",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clerk/clerk-original.svg",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Nick Parsons",
    role: "Director of Marketing, Clerk",
    review:
      "Our team saved countless hours after switching to webtics. The efficiency gains have been remarkable.",
  },
  {
    company: "raycast",
    logo: "https://raycast.com/favicon-32x32.png",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Thomas Paul Mann",
    role: "CEO, Raycast",
    review:
      "From data chaos to clarity - webtics delivers immediate results that transformed our workflow.",
  },
  {
    company: "vercel",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Guillermo Rauch",
    role: "CEO, Vercel",
    review:
      "Webtics delivers powerful insights that turn complex data into actionable decisions for our entire team.",
  },
  {
    company: "nextjs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    avatar:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Sarah Johnson",
    role: "Product Manager, Next.js",
    review:
      "The intuitive interface and powerful analytics have completely transformed how we make data-driven decisions.",
  },
  {
    company: "stripe",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&auto=format",
    name: "Emily Chen",
    role: "Head of Analytics, Stripe",
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
    clerk: "Clerk",
    raycast: "Raycast",
    vercel: "▲ Vercel",
    nextjs: "Next.js",
    stripe: "Stripe",
  };

  if (imageError) {
    return (
      <div className="text-2xl font-bold text-[#2C74BC] opacity-70 hover:opacity-100 transition-opacity">
        {fallbackNames[company]}
      </div>
    );
  }

  return (
    <div className="opacity-70 hover:opacity-100 transition-opacity">
      <img
        src={logo}
        alt={`${company} logo`}
        className="h-8 w-auto max-w-[120px] object-contain filter brightness-0 saturate-100"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(25%) sepia(95%) saturate(1245%) hue-rotate(202deg) brightness(94%) contrast(86%)",
        }}
        onError={handleImageError}
        draggable={false}
      />
    </div>
  );
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging && currentIndex < testimonials.length - 1) {
        nextSlide();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isDragging, currentIndex]);

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
              Our{" "}
              {/* <Highlighter action="underline" color="#F9800">
                Customers
              </Highlighter>{" "} */}
              <span className=" text-white">
                <Highlighter action="underline" color="#2C74BC">
                  <Highlighter action="highlight" color="#2C74BC">
                    Customers
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
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 border-2 border-[#2C74BC] rounded-full p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 ${
              currentIndex === 0
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === testimonials.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 border-2 border-[#2C74BC] rounded-full p-3 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#2C74BC]/20 ${
              currentIndex === testimonials.length - 1
                ? "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed opacity-50"
                : "bg-white hover:bg-[#2C74BC] text-[#2C74BC] hover:text-white hover:shadow-xl transform hover:scale-105"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
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
                  className="w-full flex-shrink-0 flex flex-col items-center px-8"
                  style={{ userSelect: "none" }}
                >
                  {/* Company Logo */}
                  <div className="mb-8 h-10 flex items-center justify-center">
                    <CompanyLogo
                      company={testimonial.company}
                      logo={testimonial.logo}
                    />
                  </div>

                  {/* Review */}
                  <blockquote className="max-w-4xl text-balance text-center text-xl sm:text-2xl lg:text-3xl font-Regular text-gray-800 leading-relaxed mb-8">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 ring-4 ring-[#2C74BC]/20 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <h5 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h5>
                    <h5 className="text-base text-gray-500 mt-1">
                      {testimonial.role}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#2C74BC]/50 focus:ring-offset-2 ${
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
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-[#2C74BC]/10 rounded-full h-1">
            <div
              className="bg-[#2C74BC] h-1 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
