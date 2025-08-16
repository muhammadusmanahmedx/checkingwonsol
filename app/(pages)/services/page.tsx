"use client";
import React, { useState } from "react"
import {
  IconCode,
  IconDeviceMobile,
  IconShield,
  IconCloud,
  IconBrain,
  IconTrendingUp,
  IconPalette,
  IconBrandWordpress,
  IconSettings,
  IconChartBar,
  IconBrandFacebook,
  IconPencil,
  IconSearch,
  IconRocket,
  IconUsers,
  IconBulb,
  IconCpu,
  IconDatabase,
  IconDeviceDesktop,
  IconMail,
  IconPhone,
  IconArrowRight,
  IconStar,
  IconCheck,
} from "@tabler/icons-react"

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 200)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white p-8 transition-all duration-500 cursor-pointer border-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 ${
        isHovered ? 'border-[#2C74BC] shadow-[#2C74BC]/20' : 'border-gray-100'
      } ${isClicked ? 'scale-95' : 'hover:scale-105'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br from-[#2C74BC]/5 via-blue-50/50 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform ${isHovered ? 'scale-110' : 'scale-100'}`} />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#2C74BC]/30 rounded-full animate-pulse" />
        <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/2 right-8 w-1 h-1 bg-indigo-400/50 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        <div className={`mb-6 relative inline-block transition-all duration-500 ${isHovered ? 'transform rotate-6 scale-110' : ''}`}>
          <div className={`absolute inset-0 bg-[#2C74BC]/10 rounded-full blur transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
          <service.icon className={`w-14 h-14 relative z-10 transition-all duration-500 ${isHovered ? 'text-[#2C74BC]' : 'text-gray-600'}`} />
        </div>

        <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${isHovered ? 'text-[#2C74BC]' : 'text-gray-800'}`}>
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Corner accent */}
      <div className={`absolute top-0 right-0 w-20 h-20 transform transition-all duration-500 ${isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#2C74BC]/10" />
      </div>
    </div>
  )
}

const ServiceCategory = ({
  title,
  description,
  services,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  services: Array<{
    title: string
    description: string
    icon: React.ComponentType<any>
  }>
  icon: React.ComponentType<any>
  index: number
}) => {
  const [isVisible, setIsVisible] = useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 200)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className={`mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6 group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-[#2C74BC]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 scale-150" />
            <Icon className="w-10 h-10 text-[#2C74BC] mr-4 relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 group-hover:text-[#2C74BC] transition-colors duration-300">
            {title}
          </h2>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-[#2C74BC] to-blue-400 mx-auto rounded-full mt-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, serviceIndex) => (
          <ServiceCard key={serviceIndex} service={service} index={serviceIndex} />
        ))}
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [ctaHovered, setCtaHovered] = useState(null)

  const developmentServices = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features and seamless performance.",
      icon: IconDeviceMobile,
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      icon: IconCode,
    },
    {
      title: "Custom System Design",
      description: "Tailored software solutions designed specifically for your unique business requirements and workflows.",
      icon: IconSettings,
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complete website solutions with advanced functionality.",
      icon: IconBrandWordpress,
    },
    {
      title: "Low Code / No Code",
      description: "Rapid application development using modern low-code and no-code platforms for faster deployment.",
      icon: IconRocket,
    },
    {
      title: "Automation Solutions",
      description: "Streamline your business processes with intelligent automation systems and workflow optimization.",
      icon: IconCpu,
    },
  ]

  const designServices = [
    {
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences with proven methodologies.",
      icon: IconPalette,
    },
    {
      title: "Website Design",
      description: "Beautiful, functional website designs that convert visitors into customers with optimized user journeys.",
      icon: IconDeviceDesktop,
    },
    {
      title: "Design & Redesign",
      description: "Complete design overhauls and refreshes for existing digital products to enhance user engagement.",
      icon: IconBulb,
    },
  ]

  const marketingServices = [
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic with data-driven SEO strategies.",
      icon: IconSearch,
    },
    {
      title: "Mobile App SEO (ASO)",
      description: "App Store Optimization to increase your mobile app's visibility, downloads, and user retention.",
      icon: IconTrendingUp,
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach target audiences.",
      icon: IconBrandFacebook,
    },
    {
      title: "Content Publishing",
      description: "Strategic content creation and publishing to engage your target audience and build brand authority.",
      icon: IconPencil,
    },
  ]

  const consultingServices = [
    {
      title: "IT Consulting",
      description: "Expert technology consulting to guide your digital transformation journey and strategic planning.",
      icon: IconUsers,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses seeking flexibility.",
      icon: IconCloud,
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and sensitive business data.",
      icon: IconShield,
    },
    {
      title: "DevOps Solutions",
      description: "Streamlined development and deployment processes for faster time-to-market and improved reliability.",
      icon: IconDatabase,
    },
    {
      title: "AI Integration",
      description: "Integrate artificial intelligence and machine learning into your business processes for competitive advantage.",
      icon: IconBrain,
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation strategies to modernize your business operations and increase efficiency.",
      icon: IconChartBar,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2C74BC]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-indigo-400/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-28">
          <div className="mb-8 inline-block">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#2C74BC] to-blue-400 rounded-full mb-6 mx-auto shadow-lg shadow-[#2C74BC]/25 animate-pulse">
              <IconCode className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-[#2C74BC] to-gray-800 bg-clip-text text-transparent mb-8 animate-pulse">
            Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            We provide comprehensive technology solutions to help your business thrive in the digital age. From mobile
            apps to AI integration, our expert team delivers cutting-edge solutions tailored to your needs.
          </p>
          
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-2 h-2 bg-[#2C74BC] rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-[#2C74BC] rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-[#2C74BC] rounded-full animate-bounce delay-200" />
          </div>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#2C74BC] to-blue-400 mx-auto rounded-full shadow-lg shadow-[#2C74BC]/30" />
        </div>

        <ServiceCategory
          title="Development Services"
          description="Custom software development solutions built with modern technologies and industry best practices."
          services={developmentServices}
          icon={IconCode}
          index={0}
        />

        <ServiceCategory
          title="Design & User Experience"
          description="Creating beautiful, intuitive designs that engage users and drive conversions with proven methodologies."
          services={designServices}
          icon={IconPalette}
          index={1}
        />

        <ServiceCategory
          title="Digital Marketing & SEO"
          description="Boost your online presence and reach your target audience with our comprehensive marketing expertise."
          services={marketingServices}
          icon={IconTrendingUp}
          index={2}
        />

        <ServiceCategory
          title="Consulting & Strategy"
          description="Expert guidance and strategic solutions to transform your business with cutting-edge technology."
          services={consultingServices}
          icon={IconUsers}
          index={3}
        />

           <div className="mt-28 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C74BC]/10 via-blue-50 to-[#2C74BC]/10 rounded-3xl blur-3xl" />
          <div className="relative text-center bg-gradient-to-br from-[#2C74BC] to-blue-600 backdrop-blur-sm rounded-3xl p-16 border-2 border-[#2C74BC]/20 shadow-2xl shadow-[#2C74BC]/30">
            <div className="mb-8">
              {/* <div className="flex justify-center space-x-4 mb-6">
                <IconCheck className="w-8 h-8 text-green-400" />
                <IconStar className="w-8 h-8 text-yellow-300 fill-current" />
                <IconRocket className="w-8 h-8 text-white" />
              </div> */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-50 max-w-3xl mx-auto mb-10 leading-relaxed">
                Let's discuss how our comprehensive IT solutions can help you achieve your business goals. Get in touch with
                our expert team today for a free consultation and project assessment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className={`group inline-flex items-center px-10 py-5 bg-white text-[#2C74BC] hover:bg-blue-50 font-bold rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 ${
                  ctaHovered === 'call' ? 'shadow-white/40' : 'shadow-white/25'
                }`}
                onMouseEnter={() => setCtaHovered('call')}
                onMouseLeave={() => setCtaHovered(null)}
              >
                <IconPhone className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" />
                Schedule a Call
                <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              
              <button
                className={`group inline-flex items-center px-10 py-5 bg-transparent text-white font-bold rounded-2xl border-3 border-white hover:bg-white hover:text-[#2C74BC] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 ${
                  ctaHovered === 'quote' ? 'shadow-white/40' : 'shadow-white/25'
                }`}
                onMouseEnter={() => setCtaHovered('quote')}
                onMouseLeave={() => setCtaHovered(null)}
              >
                <IconMail className="w-6 h-6 mr-3 transition-transform duration-300 group-hover:scale-110" />
                Get Free Quote
                <IconArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="mt-10 flex justify-center items-center space-x-8 text-sm text-blue-100">
              <div className="flex items-center">
                <IconCheck className="w-4 h-4 text-green-300 mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <IconCheck className="w-4 h-4 text-green-300 mr-2" />
                No Hidden Fees
              </div>
              <div className="flex items-center">
                <IconCheck className="w-4 h-4 text-green-300 mr-2" />
                Quick Response
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}