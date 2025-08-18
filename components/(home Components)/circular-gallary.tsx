"use client"

import type React from "react"
import { useRef, useState } from "react"
import Image from "next/image"

interface GalleryItem {
  image: string
  text: string
  onClick: () => void
}

interface CircularGalleryProps {
  items: GalleryItem[]
  bend?: number
  textColor?: string
  borderRadius?: number
  font?: string
  scrollSpeed?: number
  scrollEase?: number
}

const CircularGallery = ({
  items,
  bend = 2,
  textColor = "#2C74BC",
  borderRadius = 0.05,
  font = "bold 18px Inter, sans-serif",
  scrollSpeed = 2,
  scrollEase = 0.08,
}: CircularGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  const handleImageError = (index: number) => {
    setImageErrors((prev) => new Set(prev).add(index))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * scrollSpeed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * scrollSpeed
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const scrollToLeft = () => {
    if (!containerRef.current) return
    const cardWidth = 280 // Approximate width of card + gap
    containerRef.current.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    })
  }

  const scrollToRight = () => {
    if (!containerRef.current) return
    const cardWidth = 280 // Approximate width of card + gap
    containerRef.current.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full h-full overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 overflow-x-auto h-full items-center px-4 sm:px-8 cursor-grab active:cursor-grabbing"
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 group">
            {/* Portrait rectangular container */}
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {!imageErrors.has(index) ? (
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.text}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                  onError={() => handleImageError(index)}
                  priority={index < 3}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-gray-600">Image unavailable</p>
                  </div>
                </div>
              )}

              {/* Always visible overlay with text */}
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-4 w-full">
                  <h3
                    className="text-white font-bold text-sm sm:text-base md:text-lg leading-tight"
                    style={{ color: "white", fontFamily: font.split(" ").slice(1).join(" ") }}
                  >
                    {item.text}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Desktop Navigation Buttons - positioned absolutely */}
        <div className="hidden sm:flex absolute bottom-4 md:bottom-8 z-20 left-1/2 transform -translate-x-1/2 gap-4">
          <button
            onClick={scrollToLeft}
            className="bg-[#2C74BC] hover:bg-[#2C74BC]/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollToRight}
            className="bg-[#2C74BC] hover:bg-[#2C74BC]/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Buttons - positioned outside the scrolling container */}
      <div className="sm:hidden flex justify-center gap-4 mt-4">
        <button
          onClick={scrollToLeft}
          className="bg-[#2C74BC] hover:bg-[#2C74BC]/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollToRight}
          className="bg-[#2C74BC] hover:bg-[#2C74BC]/90 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 hover:scale-110"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CircularGallery