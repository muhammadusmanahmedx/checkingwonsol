"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  
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

  return (
    <header className="bg-white shadow-md sticky space-x- top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#2C74BC] to-[#1E5A96] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-800">
                Won Solutions
              </h1>
              <p className="text-xs text-gray-500">
                World of Optimal Next-Gen Solutions
              </p>
            </div>
          </Link>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {["Home", "Services", "About", "Portfolio", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeNav === item
                      ? "bg-[#2C74BC] text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-[#2C74BC] hover:bg-[#2C74BC]/5"
                  }`}
                >
                  {item}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#2C74BC]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => router.push("/contact")}
            className="hidden md:block bg-gradient-to-r from-[#2C74BC] to-[#1E5A96] text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;