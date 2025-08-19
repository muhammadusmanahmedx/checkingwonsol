"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  logoUrl?: string;
  logoAlt?: string;
}

// Loader Component
const WonSolutionsLoader = ({
  isVisible,
  logoUrl,
  logoAlt = "Won Solutions Logo",
}) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-500 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C74BC] via-[#1e5a96] to-[#0f3d6b]" />

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>

          {/* Logo Container */}
          <div className="absolute inset-2 flex items-center justify-center">
            {logoUrl ? (
              // Custom logo from URL
              <img
                src={logoUrl}
                alt={logoAlt}
                className="w-16 h-16 object-contain animate-pulse"
              />
            ) : (
              // Default SVG logo
              <svg viewBox="0 0 100 100" className="w-16 h-16 animate-pulse">
                <defs>
                  <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#e0f2ff" />
                  </linearGradient>
                </defs>

                {/* Stylized W */}
                <g fill="url(#logoGradient)">
                  <rect x="22" y="30" width="4" height="40" rx="2" />
                  <rect
                    x="26"
                    y="30"
                    width="3"
                    height="32"
                    rx="1.5"
                    transform="rotate(15 27.5 46)"
                  />
                  <rect x="42" y="35" width="4" height="30" rx="2" />
                  <rect
                    x="46"
                    y="30"
                    width="3"
                    height="32"
                    rx="1.5"
                    transform="rotate(-15 47.5 46)"
                  />
                  <rect x="62" y="30" width="4" height="40" rx="2" />

                  {/* Connection nodes */}
                  <circle cx="35" cy="45" r="2.5" className="animate-ping" />
                  <circle
                    cx="50"
                    cy="52"
                    r="2.5"
                    className="animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    cx="55"
                    cy="45"
                    r="2.5"
                    className="animate-ping"
                    style={{ animationDelay: "1s" }}
                  />
                </g>
              </svg>
            )}
          </div>
        </div>

        {/* Company name with typewriter effect */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2 animate-pulse">
            Won Solutions
          </h1>
          <p
            className="text-blue-100 text-sm tracking-wider animate-pulse"
            style={{ animationDelay: "0.5s" }}
          >
            World of Optimal Next-Gen Solutions
          </p>
        </div>

        {/* Progress indication - simplified */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full animate-pulse" />
        </div>

        {/* Loading text */}
        <p className="text-white/80 text-sm mt-4 animate-pulse">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  logoAlt = "Won Solutions Logo",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Loading states
  const [isLoading, setIsLoading] = useState(false);

  // Get current active nav based on pathname
  const getCurrentNav = () => {
    if (pathname === "/") return "Home";
    if (pathname === "/services") return "Services";
    if (pathname === "/about") return "About";
    if (pathname === "/portfolio") return "Portfolio";
    if (pathname === "/contact") return "Contact";
    return "Home";
  };

  const [activeNav, setActiveNav] = useState("Home");

  // Update active nav when pathname changes
  useEffect(() => {
    setActiveNav(getCurrentNav());
  }, [pathname]);

  // Handle navigation with loader
  const handleNavClick = (item: string) => {
    // Don't navigate if already loading
    if (isLoading) return;

    // Check if we're already on this page
    const routes: { [key: string]: string } = {
      Home: "/",
      Services: "/services",
      About: "/about",
      Portfolio: "/portfolio",
      Contact: "/contact",
    };

    // If we're already on the target page, don't show loader
    if (pathname === routes[item]) return;

    setIsLoading(true);
    setActiveNav(item);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation

    // Start navigation immediately
    router.push(routes[item]);
  };

  // Handle CTA button navigation
  const handleCTAClick = () => {
    if (isLoading) return;

    // Check if we're already on contact page
    if (pathname === "/contact") return;

    setIsLoading(true);
    setIsMobileMenuOpen(false);

    // Start navigation immediately
    router.push("/contact");
  };

  // Listen for route changes to hide loader when page is ready
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      // Hide loader when route changes
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // Small delay to ensure page is rendered
    };

    // Listen for pathname changes (Next.js route completion)
    if (isLoading) {
      handleRouteChangeComplete();
    }
  }, [pathname, isLoading]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-[#2C74BC] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              {logoUrl ? (
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                  <img
                    src={logoUrl}
                    alt={logoAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    W
                  </span>
                </div>
              )}
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-xl font-bold text-white">
                  Won Solutions
                </h1>
                <p className="text-xs text-blue-100 hidden sm:block">
                  World of Optimal Next-Gen Solutions
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {["Home", "Services", "About", "Portfolio", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    disabled={isLoading}
                    className={`px-4 xl:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeNav === item
                        ? "bg-white text-[#2C74BC] shadow-lg transform scale-105 font-semibold"
                        : "text-blue-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {item}
                  </button>
                )
              )}
            </nav>

            {/* Desktop CTA Button */}
            <button
              onClick={handleCTAClick}
              disabled={isLoading}
              className={`hidden lg:block bg-white text-[#2C74BC] px-4 xl:px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/20 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              disabled={isLoading}
              className={`lg:hidden p-2 text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-lg ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Toggle mobile menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <nav className="py-4 space-y-2 border-t border-blue-400/30">
              {["Home", "Services", "About", "Portfolio", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    disabled={isLoading}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      activeNav === item
                        ? "bg-white text-[#2C74BC] font-semibold"
                        : "text-blue-100 hover:text-white hover:bg-white/10"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {item}
                  </button>
                )
              )}

              {/* Mobile CTA Button */}
              <button
                onClick={handleCTAClick}
                disabled={isLoading}
                className={`w-full mt-4 bg-white text-[#2C74BC] px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Loader */}
      <WonSolutionsLoader
        isVisible={isLoading}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
      />
    </>
  );
};

export default Header;
