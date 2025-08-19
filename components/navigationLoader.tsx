// components/NavigationLoader.tsx
"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";

// Won Solutions Loader Component
interface WonSolutionsLoaderProps {
  isVisible: boolean;
  logoUrl?: string;
  logoAlt?: string;
  customMessage?: string;
}

const WonSolutionsLoader = ({
  isVisible,
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  logoAlt = "Won Solutions Logo",
  customMessage = "Preparing your experience...",
}: WonSolutionsLoaderProps) => {
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
          {customMessage}
        </p>
      </div>
    </div>
  );
};

// Navigation Loader Context
interface NavigationLoaderContextType {
  isLoading: boolean;
  currentMessage: string;
  showLoader: (message?: string, duration?: number) => void;
  navigateWithLoader: (
    path: string,
    message?: string,
    duration?: number
  ) => void;
  hideLoader: () => void;
}

const NavigationLoaderContext =
  createContext<NavigationLoaderContextType | null>(null);

// Navigation Loader Provider
interface NavigationLoaderProviderProps {
  children: ReactNode;
  logoUrl?: string;
  logoAlt?: string;
}

export const NavigationLoaderProvider = ({
  children,
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  logoAlt = "Won Solutions Logo",
}: NavigationLoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(
    "Preparing your experience..."
  );
  const router = useRouter();

  const showLoader = (
    message: string = "Preparing your experience...",
    duration: number = 2000
  ) => {
    setCurrentMessage(message);
    setIsLoading(true);

    if (duration > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, duration);
    }
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  const navigateWithLoader = (
    path: string,
    message: string = "Navigating...",
    duration: number = 2000
  ) => {
    setCurrentMessage(message);
    setIsLoading(true);

    setTimeout(() => {
      router.push(path);
      // Hide loader after navigation with small delay
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, duration);
  };

  return (
    <NavigationLoaderContext.Provider
      value={{
        isLoading,
        currentMessage,
        showLoader,
        navigateWithLoader,
        hideLoader,
      }}
    >
      {children}
      <WonSolutionsLoader
        isVisible={isLoading}
        logoUrl={logoUrl}
        logoAlt={logoAlt}
        customMessage={currentMessage}
      />
    </NavigationLoaderContext.Provider>
  );
};

// Hook to use the Navigation Loader
export const useNavigationLoader = () => {
  const context = useContext(NavigationLoaderContext);
  if (!context) {
    throw new Error(
      "useNavigationLoader must be used within NavigationLoaderProvider"
    );
  }
  return context;
};

// Reusable Navigation Button Component
interface NavigationButtonProps {
  children: ReactNode;
  href: string;
  message?: string;
  duration?: number;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const NavigationButton = ({
  children,
  href,
  message,
  duration = 2000,
  className = "",
  disabled = false,
  onClick,
}: NavigationButtonProps) => {
  const { navigateWithLoader, isLoading } = useNavigationLoader();

  const getDefaultMessage = (path: string) => {
    const cleanPath = path.replace("/", "").toLowerCase();
    switch (cleanPath) {
      case "portfolio":
        return "Taking you to our portfolio...";
      case "contact":
        return "Taking you to contact us...";
      case "about":
        return "Taking you to about us...";
      case "services":
        return "Taking you to our services...";
      case "":
        return "Taking you home...";
      default:
        return `Navigating to ${cleanPath}...`;
    }
  };

  const handleClick = () => {
    if (disabled || isLoading) return;

    onClick?.();
    const loadingMessage = message || getDefaultMessage(href);
    navigateWithLoader(href, loadingMessage, duration);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`${className} ${
        disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

// Quick action functions for direct use
export const createNavigationActions = () => {
  return {
    goToPortfolio: (
      message = "Taking you to our portfolio...",
      duration = 2000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/portfolio", message, duration);
      }
    },
    goToContact: (message = "Taking you to contact us...", duration = 2000) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/contact", message, duration);
      }
    },
    goToAbout: (message = "Taking you to about us...", duration = 2000) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/about", message, duration);
      }
    },
    goToServices: (
      message = "Taking you to our services...",
      duration = 2000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/services", message, duration);
      }
    },
  };
};
