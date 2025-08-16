"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  logoUrl?: string;
  logoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png", 
  logoAlt = "Won Solutions Logo" 
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Handle navigation
  const handleNavClick = (item: string) => {
    setActiveNav(item);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    
    // Define route mappings
    const routes: { [key: string]: string } = {
      "Home": "/",
      "Services": "/services",
      "About": "/about",
      "Portfolio": "/portfolio",
      "Contact": "/contact"
    };
    
    router.push(routes[item]);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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
                <span className="text-white font-bold text-sm sm:text-lg">W</span>
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
                  className={`px-4 xl:px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeNav === item
                      ? "bg-white text-[#2C74BC] shadow-lg transform scale-105 font-semibold"
                      : "text-blue-100 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Desktop CTA Button */}
          <button
            onClick={() => router.push("/contact")}
            className="hidden lg:block bg-white text-[#2C74BC] px-4 xl:px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-white/20"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-blue-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-2 border-t border-blue-400/30">
            {["Home", "Services", "About", "Portfolio", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    activeNav === item
                      ? "bg-white text-[#2C74BC] font-semibold"
                      : "text-blue-100 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              )
            )}
            
            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                router.push("/contact");
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-white text-[#2C74BC] px-4 py-3 rounded-lg text-base font-semibold hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;