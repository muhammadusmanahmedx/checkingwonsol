"use client"

import { useState } from "react" // Import useState
import Folder from "./folder"

const AboutSection = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false) // State to track folder open status

  const topPoints = [
    <div key="point1" className="text-center p-2">
      <h3 className="font-bold text-sm text-white mb-1">Innovation Driven</h3>
      <p className="text-xs text-white">Pioneering solutions </p>
    </div>,
    <div key="point2" className="text-center p-2">
      <h3 className="font-bold text-sm text-white mb-1">Client Focus</h3>
      <p className="text-xs text-white">Tailored solutions </p>
    </div>,
    <div key="point3" className="text-center p-2">
      <h3 className="font-bold text-sm text-white mb-1">Measurable Impact</h3>
      <p className="text-xs text-white">Delivering results </p>
    </div>,
  ]

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-1/6 w-72 h-72 bg-[#2C74BC]/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-[#2C74BC]/2 rounded-full blur-3xl"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className="mb-6">
          <span className="inline-block px-6 py-3 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-sm font-semibold border border-[#2C74BC]/20 backdrop-blur-sm">
            Who We Are
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">About</span>
          <br />
          <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
            Won Solutions
          </span>
        </h2>

        <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
          Won Solutions, abbreviated as World of Optimal Next-Gen Solutions, is dedicated to crafting innovative
          technology solutions that drive success. We empower businesses to thrive in the digital era through our
          expertise and client-centric approach.
        </p>
      </div>

      {/* Folder Component Container - Dynamic Padding */}
      <div
        className={`relative z-10 flex justify-center items-center pb-12 transition-all duration-300 ease-in-out ${
          isFolderOpen ? "pt-40" : "pt-12"
        }`}
      >
        <div className="flex flex-col items-center space-y-16">
          <Folder color="#2C74BC" size={2} items={topPoints} onToggleOpen={setIsFolderOpen} />
          <p className="text-gray-600 text-lg font-medium text-center max-w-md">
            Click the folder to reveal our core principles that drive every project.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
