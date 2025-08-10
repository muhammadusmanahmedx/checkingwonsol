"use client"
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Github, Facebook, ArrowRight, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#114067] text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-8">
          {/* Company Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-[#92ce9a] rounded-xl p-3">
                <Code2 className="h-8 w-8 text-[#114067]" />
              </div>
              <span className="text-3xl font-bold text-white">WonSol</span>
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-md">
              WonSol (Won Solutions) is your trusted partner in delivering innovative, scalable, and secure software
              services. We help businesses transform ideas into powerful digital solutions.
            </p>
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#92ce9a] focus:border-transparent transition-all duration-300"
                />
                <button className="px-6 py-3 bg-[#92ce9a] hover:bg-[#92ce9a]/80 text-[#114067] rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Company
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[#92ce9a] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {["About Us", "Our Team", "Careers", "News & Blog"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "")}`}
                      className="text-white/80 hover:text-[#92ce9a] transition-colors duration-300 relative group inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Services
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[#92ce9a] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {["Web Development", "Mobile Apps", "Cloud Solutions", "AI & Machine Learning"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`/services/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "")}`}
                      className="text-white/80 hover:text-[#92ce9a] transition-colors duration-300 relative group inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-[#92ce9a] rounded-full"></div>
              </h3>
              <ul className="space-y-3">
                {["Documentation", "Support Center", "Case Studies", "API Reference"].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/80 hover:text-[#92ce9a] transition-colors duration-300 relative group inline-block"
                    >
                      {item}
                      {item.includes("API") && <ExternalLink className="inline h-3 w-3 ml-1 opacity-60" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-Width Contact & Social Media Section */}
        <div className="mb-8">
          <div className="w-full h-px bg-white/20 mb-8"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Let's Connect Section - Takes 2 columns */}
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-semibold text-white mb-8 relative">
                Let's Connect
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-[#92ce9a] rounded-full"></div>
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-8">
                <a
                  href="mailto:info@wonsol.com"
                  className="flex items-center space-x-3 text-white/80 hover:text-[#92ce9a] transition-colors duration-300 group"
                >
                  <div className="bg-white/10 group-hover:bg-[#92ce9a] p-3 rounded-lg transition-all duration-300">
                    <Mail className="h-4 w-4 group-hover:text-[#114067]" />
                  </div>
                  <span className="text-base lg:text-lg">info@wonsol.com</span>
                </a>
                <a
                  href="tel:+92-300-1234567"
                  className="flex items-center space-x-3 text-white/80 hover:text-[#92ce9a] transition-colors duration-300 group"
                >
                  <div className="bg-white/10 group-hover:bg-[#92ce9a] p-3 rounded-lg transition-all duration-300">
                    <Phone className="h-4 w-4 group-hover:text-[#114067]" />
                  </div>
                  <span className="text-base lg:text-lg">+92 300 1234567</span>
                </a>
                <div className="flex items-center space-x-3 text-white/80 hover:text-[#92ce9a] transition-colors duration-300 group">
                  <div className="bg-white/10 group-hover:bg-[#92ce9a] p-3 rounded-lg transition-all duration-300">
                    <MapPin className="h-4 w-4 group-hover:text-[#114067]" />
                  </div>
                  <span className="text-base lg:text-lg">Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

            {/* Follow Us Section - Takes 1 column and aligned to the right */}
            <div className="lg:col-span-1 flex flex-col items-start lg:items-center ">
              <h4 className="text-2xl font-semibold text-white mb-8 mr-30 relative">
                Follow Us
                <div className="absolute -bottom-2 left-0  w-12 h-1 bg-[#92ce9a] rounded-full"></div>
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "https://linkedin.com/company/wonsol", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://twitter.com/wonsol", label: "Twitter" },
                  { Icon: Github, href: "https://github.com/wonsol", label: "GitHub" },
                  { Icon: Facebook, href: "https://facebook.com/wonsol", label: "Facebook" },
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-[#92ce9a] p-3 rounded-lg text-white hover:text-[#114067] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 mb-6"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div>
            <p className="text-white/70">© {new Date().getFullYear()} WonSol. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-8">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item, index) => (
              <a
                key={index}
                href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/70 hover:text-[#92ce9a] transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#92ce9a] hover:bg-[#92ce9a]/80 p-4 rounded-full text-[#114067] shadow-lg transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
        </button>
      </div>
    </footer>
  )
}
