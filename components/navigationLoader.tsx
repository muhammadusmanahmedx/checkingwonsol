// components/NavigationLoader.tsx
"use client";

import { useState, createContext, useContext, ReactNode, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

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
    minDuration?: number,
    maxWaitTime?: number
  ) => void;
  hideLoader: () => void;
  checkPageStatus: (url: string) => Promise<boolean>;
}

const NavigationLoaderContext =
  createContext<NavigationLoaderContextType | null>(null);

// Navigation Loader Provider
interface NavigationLoaderProviderProps {
  children: ReactNode;
  logoUrl?: string;
  logoAlt?: string;
  baseUrl?: string; // Base URL for status checks
}

export const NavigationLoaderProvider = ({
  children,
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  logoAlt = "Won Solutions Logo",
  baseUrl,
}: NavigationLoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(
    "Preparing your experience..."
  );
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const [navigationStartTime, setNavigationStartTime] = useState<number>(0);
  const statusCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const maxRetries = useRef(0);
  
  const router = useRouter();
  const pathname = usePathname();

  // Get base URL dynamically if not provided
  const getBaseUrl = () => {
    if (baseUrl) return baseUrl;
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${window.location.host}`;
    }
    return '';
  };

  // Function to check page status
  const checkPageStatus = async (url: string): Promise<boolean> => {
    try {
      const fullUrl = url.startsWith('http') ? url : `${getBaseUrl()}${url}`;
      
      // Use fetch with no-cors mode to avoid CORS issues
      const response = await fetch(fullUrl, {
        method: 'HEAD', // Use HEAD to avoid downloading content
        mode: 'no-cors', // Bypass CORS restrictions
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      // With no-cors mode, we can't access the status directly
      // So we'll use a different approach
      return true; // If fetch doesn't throw, assume success
    } catch (error) {
      console.warn('Status check failed:', error);
      
      // Fallback: Try to check if the page loads by creating a hidden iframe
      return new Promise((resolve) => {
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        
        const timeout = setTimeout(() => {
          document.body.removeChild(iframe);
          resolve(false);
        }, 5000); // 5 second timeout
        
        iframe.onload = () => {
          clearTimeout(timeout);
          document.body.removeChild(iframe);
          resolve(true);
        };
        
        iframe.onerror = () => {
          clearTimeout(timeout);
          document.body.removeChild(iframe);
          resolve(false);
        };
        
        document.body.appendChild(iframe);
        iframe.src = url.startsWith('http') ? url : `${getBaseUrl()}${url}`;
      });
    }
  };

  // Alternative status check using image loading technique
  const checkPageStatusAlternative = async (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      const fullUrl = url.startsWith('http') ? url : `${getBaseUrl()}${url}`;
      
      // Set a timeout
      const timeout = setTimeout(() => {
        resolve(false);
      }, 5000);
      
      img.onload = () => {
        clearTimeout(timeout);
        resolve(true);
      };
      
      img.onerror = () => {
        clearTimeout(timeout);
        // Even if image fails, the page might be accessible
        // Try a different approach - check if we can access the page
        fetch(fullUrl, { 
          method: 'GET',
          mode: 'no-cors',
          cache: 'no-cache'
        })
        .then(() => resolve(true))
        .catch(() => resolve(false));
      };
      
      // Use a dummy image URL to test connectivity
      img.src = `${fullUrl}/favicon.ico?${Date.now()}`;
    });
  };

  // Enhanced status checking with multiple strategies
  const performStatusCheck = async (url: string): Promise<boolean> => {
    const fullUrl = url.startsWith('http') ? url : `${getBaseUrl()}${url}`;
    
    try {
      // Strategy 1: Direct fetch
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000);
      
      const response = await fetch(fullUrl, {
        method: 'HEAD',
        signal: controller.signal,
        cache: 'no-cache',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      
      clearTimeout(timeoutId);
      return response.ok;
    } catch (error) {
      // Strategy 2: Check if current pathname matches and page is interactive
      if (typeof window !== 'undefined' && window.location.pathname === url) {
        return document.readyState === 'complete' && 
               document.querySelector('body') !== null &&
               !document.querySelector('[data-loading]'); // Check for loading indicators
      }
      
      // Strategy 3: Fallback - assume success after navigation if pathname matches
      return window?.location?.pathname === url;
    }
  };

  // Monitor route changes and page status
  useEffect(() => {
    if (isNavigating && targetPath) {
      // Check if we've reached the target path
      if (pathname === targetPath) {
        let retryCount = 0;
        const maxRetryAttempts = 10;
        const checkInterval = 500; // Check every 500ms
        
        const statusChecker = async () => {
          try {
            setCurrentMessage("Verifying page status...");
            const isPageReady = await performStatusCheck(targetPath);
            const elapsed = Date.now() - navigationStartTime;
            const minDuration = 1000; // Minimum 1 second
            
            if (isPageReady && elapsed >= minDuration) {
              // Page is ready and minimum duration has passed
              if (statusCheckIntervalRef.current) {
                clearInterval(statusCheckIntervalRef.current);
              }
              
              setCurrentMessage("Page loaded successfully!");
              
              // Small delay before hiding loader for better UX
              setTimeout(() => {
                setIsLoading(false);
                setIsNavigating(false);
                setTargetPath(null);
                setNavigationStartTime(0);
                maxRetries.current = 0;
              }, 300);
              
            } else if (retryCount >= maxRetryAttempts) {
              // Max retries reached, hide loader anyway
              console.warn(`Max retries reached for ${targetPath}`);
              if (statusCheckIntervalRef.current) {
                clearInterval(statusCheckIntervalRef.current);
              }
              
              setCurrentMessage("Loading complete");
              setTimeout(() => {
                setIsLoading(false);
                setIsNavigating(false);
                setTargetPath(null);
                setNavigationStartTime(0);
                maxRetries.current = 0;
              }, 300);
              
            } else {
              // Continue checking
              retryCount++;
              setCurrentMessage(`Loading page... (${retryCount}/${maxRetryAttempts})`);
            }
          } catch (error) {
            console.error('Status check error:', error);
            retryCount++;
            
            if (retryCount >= maxRetryAttempts) {
              if (statusCheckIntervalRef.current) {
                clearInterval(statusCheckIntervalRef.current);
              }
              
              // Hide loader on max retries
              setIsLoading(false);
              setIsNavigating(false);
              setTargetPath(null);
              setNavigationStartTime(0);
              maxRetries.current = 0;
            }
          }
        };

        // Start status checking
        statusCheckIntervalRef.current = setInterval(statusChecker, checkInterval);
        
        // Also run immediate check
        statusChecker();
      }
    }
    
    // Cleanup on unmount or when navigation changes
    return () => {
      if (statusCheckIntervalRef.current) {
        clearInterval(statusCheckIntervalRef.current);
      }
    };
  }, [pathname, isNavigating, targetPath, navigationStartTime]);

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
    if (statusCheckIntervalRef.current) {
      clearInterval(statusCheckIntervalRef.current);
    }
    setIsLoading(false);
    setIsNavigating(false);
    setTargetPath(null);
    setNavigationStartTime(0);
    maxRetries.current = 0;
  };

  const navigateWithLoader = (
    path: string,
    message: string = "Navigating...",
    minDuration: number = 1000,
    maxWaitTime: number = 10000
  ) => {
    setCurrentMessage(message);
    setIsLoading(true);
    setIsNavigating(true);
    setTargetPath(path);
    setNavigationStartTime(Date.now());
    maxRetries.current = Math.floor(maxWaitTime / 500); // Calculate max retries based on wait time

    // Start navigation after a brief delay to show the loader
    setTimeout(() => {
      router.push(path);
    }, 300);

    // Fallback timeout to ensure loader doesn't stay forever
    setTimeout(() => {
      if (isNavigating && targetPath === path) {
        console.warn(`Navigation timeout reached for ${path}`);
        hideLoader();
      }
    }, maxWaitTime + 2000);
  };

  return (
    <NavigationLoaderContext.Provider
      value={{
        isLoading,
        currentMessage,
        showLoader,
        navigateWithLoader,
        hideLoader,
        checkPageStatus: performStatusCheck,
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

// Page Load Detector Hook
export const usePageLoadSignal = () => {
  const { hideLoader } = useNavigationLoader();

  const signalPageReady = () => {
    hideLoader();
  };

  return { signalPageReady };
};

// Reusable Navigation Button Component
interface NavigationButtonProps {
  children: ReactNode;
  href: string;
  message?: string;
  minDuration?: number;
  maxWaitTime?: number;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const NavigationButton = ({
  children,
  href,
  message,
  minDuration = 1000,
  maxWaitTime = 10000,
  className = "",
  disabled = false,
  onClick,
}: NavigationButtonProps) => {
  const { navigateWithLoader, isLoading } = useNavigationLoader();

  const getDefaultMessage = (path: string) => {
    const cleanPath = path.replace("/", "").toLowerCase();
    switch (cleanPath) {
      case "portfolio":
        return "Loading our portfolio...";
      case "contact":
        return "Loading contact page...";
      case "about":
        return "Loading about us...";
      case "services":
        return "Loading our services...";
      case "":
        return "Going home...";
      default:
        return `Loading ${cleanPath}...`;
    }
  };

  const handleClick = () => {
    if (disabled || isLoading) return;

    onClick?.();
    const loadingMessage = message || getDefaultMessage(href);
    navigateWithLoader(href, loadingMessage, minDuration, maxWaitTime);
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
      message = "Loading our portfolio...",
      minDuration = 1000,
      maxWaitTime = 10000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/portfolio", message, minDuration, maxWaitTime);
      }
    },
    goToContact: (
      message = "Loading contact page...", 
      minDuration = 1000,
      maxWaitTime = 10000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/contact", message, minDuration, maxWaitTime);
      }
    },
    goToAbout: (
      message = "Loading about us...", 
      minDuration = 1000,
      maxWaitTime = 10000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/about", message, minDuration, maxWaitTime);
      }
    },
    goToServices: (
      message = "Loading our services...",
      minDuration = 1000,
      maxWaitTime = 10000
    ) => {
      const context = useContext(NavigationLoaderContext);
      if (context) {
        context.navigateWithLoader("/services", message, minDuration, maxWaitTime);
      }
    },
  };
};

// Higher-order component to wrap pages and auto-hide loader when ready
export const withPageLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const PageWithLoader = (props: P) => {
    const { hideLoader } = useNavigationLoader();

    useEffect(() => {
      // Signal that the page component has mounted
      const timer = setTimeout(() => {
        hideLoader();
      }, 100);

      return () => clearTimeout(timer);
    }, [hideLoader]);

    return <WrappedComponent {...props} />;
  };

  PageWithLoader.displayName = `withPageLoader(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return PageWithLoader;
};