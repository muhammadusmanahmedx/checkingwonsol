"use client";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useNavigationLoader } from "../navigationLoader";

interface FooterProps {
  logoUrl?: string;
  logoAlt?: string;
}

export default function Footer({
  logoUrl = "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755367351/bg_set_big_zgfqyi.png",
  logoAlt = "Won Solutions Logo",
}: FooterProps) {
  const { navigateWithLoader, isLoading } = useNavigationLoader();

  // Navigation handlers
  const handleCompanyNavigation = (page: string, href: string) => {
    const messages = {
      "About Us": "Learning more about Won Solutions...",
      Services: "Exploring our comprehensive services...",
      Portfolio: "Showcasing our amazing projects...",
      Contact: "Ready to connect with you...",
    };

    navigateWithLoader(
      href,
      messages[page] || `Taking you to ${page}...`,
      2000
    );
  };

  const handleServiceNavigation = (service: string) => {
    const serviceSlug = service
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    navigateWithLoader(
      `/services/${serviceSlug}`,
      `Exploring ${service} services...`,
      2000
    );
  };

  const handlePolicyNavigation = (policy: string) => {
    const policySlug = policy
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    navigateWithLoader(`/${policySlug}`, `Loading ${policy}...`, 1500);
  };

  const handleLogoClick = () => {
    navigateWithLoader("/", "Taking you to our homepage...", 2000);
  };

  return (
    <footer className="relative bg-[#2C74BC] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Section */}
          <div className="lg:col-span-5">
            <div
              className="flex items-center space-x-3 mb-8 cursor-pointer group"
              onClick={handleLogoClick}
            >
              {logoUrl ? (
                <div className="rounded-xl p-3 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={logoUrl}
                    alt={logoAlt}
                    className="h-12 w-12 object-contain"
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl p-3 group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="h-8 w-8 text-[#2C74BC]" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                  WonSolutions
                </span>
                <p className="text-sm text-blue-100">
                  World of Optimal Next-Gen Solutions
                </p>
              </div>
            </div>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              WonSol (Won Solutions) is your trusted partner in delivering
              innovative, scalable, and secure software services. We help
              businesses transform ideas into powerful digital solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        handleCompanyNavigation(item.name, item.href)
                      }
                      disabled={isLoading}
                      className={`text-white/70 hover:text-white transition-colors duration-300 text-left ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:underline"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links - First Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Web Development" },
                  { name: "Web Design" },
                  { name: "Website Redesign" },
                  { name: "UI Design" },
                  { name: "UI/UX Design" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleServiceNavigation(item.name)}
                      disabled={isLoading}
                      className={`text-white/70 hover:text-white transition-colors duration-300 text-left ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:underline"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links - Second Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative opacity-0">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-white rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "AI & Machine Learning" },
                  { name: "Automation" },
                  { name: "Product Design" },
                  { name: "Full Stack Development" },
                  { name: "Mobile Apps" },
                ].map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleServiceNavigation(item.name)}
                      disabled={isLoading}
                      className={`text-white/70 hover:text-white transition-colors duration-300 text-left ${
                        isLoading
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:underline"
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* Contact & Social Media Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Let's Connect Section */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl font-semibold text-white mb-8 relative">
              Let's Connect
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
            </h4>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
              <a
                href="mailto:info@wonsol.com"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="bg-white/10 group-hover:bg-white p-3 rounded-lg transition-all duration-300">
                  <Mail className="h-4 w-4 group-hover:text-[#2C74BC]" />
                </div>
                <span className="text-base lg:text-lg">info@wonsol.com</span>
              </a>
              <a
                href="tel:+923316120479"
                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group"
              >
                <div className="bg-white/10 group-hover:bg-white p-3 rounded-lg transition-all duration-300">
                  <Phone className="h-4 w-4 group-hover:text-[#2C74BC]" />
                </div>
                <span className="text-base lg:text-lg">+923316120479</span>
              </a>
              <div className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 group">
                <div className="bg-white/10 group-hover:bg-white p-3 rounded-lg transition-all duration-300">
                  <MapPin className="h-4 w-4 group-hover:text-[#2C74BC]" />
                </div>
                <span className="text-base lg:text-lg">
                  Islamabad, Pakistan
                </span>
              </div>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-center">
            <h4 className="text-2xl font-semibold text-white mb-8 relative">
              Follow Us
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-white rounded-full"></div>
            </h4>
            <div className="flex gap-4">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/wonsol/",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/wonsolofficial/",
                  label: "Instagram",
                },
              ].map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white p-3 rounded-lg text-white hover:text-[#2C74BC] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <p className="text-white/60">
            © {new Date().getFullYear()} WonSol. All rights reserved.
          </p>
          <div className="flex items-center space-x-8">
            {[
              { name: "Privacy Policy" },
              { name: "Terms of Service" },
              { name: "Cookie Settings" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handlePolicyNavigation(item.name)}
                disabled={isLoading}
                className={`text-white/60 hover:text-white transition-colors text-sm ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:underline"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* WhatsApp and Back to Top Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
          <a
            href="https://wa.me/+923316120479"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-white/90 p-4 rounded-full border-2 border-[#2C74BC] text-[#2C74BC] shadow-lg transition-all duration-300 hover:scale-110 hover:cursor-pointer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white hover:bg-white/90 p-4 rounded-full border-2 border-[#2C74BC] text-[#2C74BC] shadow-lg transition-all duration-300 hover:scale-110 hover:cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
