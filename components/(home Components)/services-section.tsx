"use client"

import CircularGallery from "./circular-gallary"



const ServicesSection = () => {
  const services = [
    {
      image: `/placeholder.svg?height=600&width=800&text=Web+Development`,
      text: "Web Development",
      onClick: () => (window.location.href = "/services/web-development"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=Mobile+Apps`,
      text: "Mobile Apps",
      onClick: () => (window.location.href = "/services/mobile-apps"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=Cloud+Solutions`,
      text: "Cloud Solutions",
      onClick: () => (window.location.href = "/services/cloud-solutions"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=AI+Integration`,
      text: "AI Integration",
      onClick: () => (window.location.href = "/services/ai-integration"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=Digital+Transformation`,
      text: "Digital Transformation",
      onClick: () => (window.location.href = "/services/digital-transformation"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=IT+Consulting`,
      text: "IT Consulting",
      onClick: () => (window.location.href = "/services/consulting"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=DevOps+Solutions`,
      text: "DevOps Solutions",
      onClick: () => (window.location.href = "/services/devops"),
    },
    {
      image: `/placeholder.svg?height=600&width=800&text=Cybersecurity`,
      text: "Cybersecurity",
      onClick: () => (window.location.href = "/services/cybersecurity"),
    },
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-[#2C74BC]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-[#2C74BC]/2 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className="mb-6">
          <span className="inline-block px-6 py-3 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-sm font-semibold border border-[#2C74BC]/20 backdrop-blur-sm">
            Our Expertise
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Comprehensive</span>
          <br />
          <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
            Technology Services
          </span>
        </h2>

        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          From cutting-edge web development to AI integration, we deliver solutions that transform your business and
          drive success in the digital landscape
        </p>
      </div>

      {/* Interactive Services Gallery */}
      <div className="relative z-10 h-96 mb-12">
        <CircularGallery
          items={services}
          bend={2} // Changed from 0 to 0.5 for a subtle bend
          textColor="#2C74BC"
          borderRadius={0.05}
          font="bold 24px Inter, sans-serif"
          scrollSpeed={2}
          scrollEase={0.08}
        />
      </div>

      {/* Instructions */}
      <div className="relative z-10 text-center px-8">
        <p className="text-gray-500 text-sm mb-4">Scroll horizontally or drag to explore our services</p>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-12 px-8">
        <button className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-[#2C74BC] hover:bg-[#2C74BC]/90 transition-all duration-300 hover:scale-105 shadow-xl">
          View All Services
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </section>
  )
}

export default ServicesSection
