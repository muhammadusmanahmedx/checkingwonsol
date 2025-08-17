"use client"

import CircularGallery from "./circular-gallary"

const ServicesSection = () => {
  const services = [
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404118/programming-background-collage_1_n1mx7d.jpg`,
      text: "Web Development",
      onClick: () => (window.location.href = "/services/web-development"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404319/empowered-business-woman-working-city_1_kjeqta.jpg`,
      text: "Mobile Apps",
      onClick: () => (window.location.href = "/services/mobile-apps"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755404532/saas-concept-collage_1_gxmpxw.jpg`,
      text: "Cloud Solutions",
      onClick: () => (window.location.href = "/services/cloud-solutions"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405240/businesswoman-interacting-with-ai-hologram-office_cfin0o.jpg`,
      text: "AI Integration",
      onClick: () => (window.location.href = "/services/ai-integration"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755403844/technology-concept-with-futuristic-element_1_1_rt33cu.jpg`,
      text: "Digital Transformation",
      onClick: () => (window.location.href = "/services/digital-transformation"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405241/two-young-businessman-having-successful-meeting-restaurant_cyhutx.jpg`,
      text: "IT Consulting",
      onClick: () => (window.location.href = "/services/consulting"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405473/freelance-programmer-working-remote-writing-code-software-pc-using-keyboard-debugging-algorithm-client-selective-focus-coder-computer-screen-with-programming-laguage-text_1_ycpuin.jpg`,
      text: "DevOps Solutions",
      onClick: () => (window.location.href = "/services/devops"),
    },
    {
      image: `https://res.cloudinary.com/dshjm6hcx/image/upload/v1755405229/cybersecurity-concept-illustration_1_quvqss.jpg`,
      text: "Cybersecurity",
      onClick: () => (window.location.href = "/services/cybersecurity"),
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/6 w-40 sm:w-72 h-40 sm:h-72 bg-[#2C74BC]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 sm:w-72 h-40 sm:h-72 bg-[#2C74BC]/10 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 px-4 sm:px-8">
        {/* Badge */}
        <div className="mb-3 sm:mb-6">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
            Our Expertise
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-gray-900">Comprehensive</span>
          <br />
          <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
            Technology Services
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
          From cutting-edge web development to AI integration, we deliver solutions that transform your business and drive success in the digital landscape.
        </p>
      </div>

      {/* Interactive Services Gallery */}
      <div className="relative z-10 h-72 sm:h-96 md:h-[500px] mb-10 sm:mb-12 px-2 sm:px-0">
        <CircularGallery
          items={services}
          bend={2}
          textColor="#2C74BC"
          borderRadius={0.05}
          font="bold 18px Inter, sans-serif"
          scrollSpeed={2}
          scrollEase={0.08}
        />
      </div>

      {/* Instructions */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <p className="text-gray-500 text-xs sm:text-sm mb-4">
          Scroll horizontally or drag to explore our services
        </p>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-10 sm:mt-12 px-4">
        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white bg-[#2C74BC] hover:bg-[#2C74BC]/90 transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base">
          View All Services
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </section>
  )
}

export default ServicesSection