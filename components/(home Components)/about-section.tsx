"use client"

import { useState } from "react"
import Folder from "./folder"

const AboutSection = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false)

  const topPoints = [
    <div key="point1" className="text-center p-2 sm:p-3">
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2">Innovation Driven</h3>
      <p className="text-xs sm:text-sm md:text-base text-white">Pioneering solutions</p>
    </div>,
    <div key="point2" className="text-center p-2 sm:p-3">
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2">Client Focus</h3>
      <p className="text-xs sm:text-sm md:text-base text-white">Tailored solutions</p>
    </div>,
    <div key="point3" className="text-center p-2 sm:p-3">
      <h3 className="font-bold text-sm sm:text-base md:text-lg text-white mb-2">Measurable Impact</h3>
      <p className="text-xs sm:text-sm md:text-base text-white">Delivering results</p>
    </div>,
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-[#2C74BC]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-[#2C74BC]/2 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 px-8">
         <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
              Who we are
            </span>
          </div>

<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900">About</span>
            <br />
            <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
              Won Solutions
            </span>
          </h1>

        
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 font-regular max-w-3xl mx-auto px-2 sm:px-0">
            Empowering businesses with optimal next-generation solutions that drive innovation, efficiency, and
            sustainable growth in the digital era
          </p>


      </div>

      {/* Folder Component Container - Dynamic Padding */}
      <div
        className={`relative z-10 flex justify-center items-center pb-12 transition-all duration-300 ease-in-out ${
          isFolderOpen ? "pt-40" : "pt-12"
        }`}
      >
        <div className="flex flex-col items-center space-y-16">
          <Folder color="#2C74BC" items={topPoints} onToggleOpen={setIsFolderOpen} />
          {/* <p className="text-gray-600 text-xl sm:text-2xl font-medium text-center max-w-lg">
            Hover over the folder to reveal our core principles that drive every project.
          </p> */}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
