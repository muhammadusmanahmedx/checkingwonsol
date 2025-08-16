"use client"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock, Navigation } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "", // Added subject field to form data
    message: "",
  })
  const [focusedField, setFocusedField] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  type FormErrors = {
    name?: string
    email?: string
    company?: string
    subject?: string
    message?: string
    submit?: string
  }
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [mapLoaded, setMapLoaded] = useState(false)

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format"
    }
    if (!formData.subject.trim()) errors.subject = "Subject is required" // Added subject validation
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    setIsSubmitting(true)
    setFormErrors({})
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" }) // Reset subject field
    } catch (error) {
      setFormErrors({ submit: "Failed to send message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setFormErrors((prev) => ({ ...prev, [name]: null }))
  }

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/50 to-[#2C74BC]/5 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-80 h-80 bg-[#2C74BC]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-48 -left-48 w-80 h-80 bg-[#2C74BC]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#2C74BC]/5 to-transparent rounded-full blur-2xl animate-spin-slow"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-6 py-2 bg-[#2C74BC]/10 rounded-full border border-[#2C74BC]/20">
              <span className="text-[#2C74BC] font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#2C74BC] to-[#1e5a94] bg-clip-text text-transparent leading-tight">
              Let's Create Something Remarkable
              <br />
              {/* <span className="text-3xl sm:text-4xl lg:text-5xl">Something Remarkable</span> */}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
              Turn your ideas into cutting-edge software solutions with our dedicated team.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2C74BC] rounded-full" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                <span>Free consultation</span>
              </div>
            </div>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 flex">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6 sm:p-8 relative overflow-hidden w-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2C74BC] to-[#1e5a94]" />
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2C74BC] to-[#1e5a94] rounded-lg flex items-center justify-center mr-3 shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Start a Conversation</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Tell us about your project</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  {formErrors.submit && (
                    <div className="text-red-500 text-sm font-medium text-center">{formErrors.submit}</div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`peer w-full h-14 px-4 pt-7 pb-2 border border-gray-200 rounded-lg focus:border-[#2C74BC] focus:ring-2 focus:ring-[#2C74BC]/20 transition-all duration-300 bg-white text-base placeholder-transparent outline-none shadow-sm focus:shadow-md ${
                          formErrors.name ? "border-red-300" : ""
                        }`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                      />
                      <label
                        htmlFor="name"
                        className={`absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-[#2C74BC] ${
                          formData.name ? "text-xs top-1 text-[#2C74BC]" : ""
                        }`}
                      >
                        Full Name *
                      </label>
                      {formErrors.name && (
                        <p id="name-error" className="text-red-500 text-xs mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`peer w-full h-14 px-4 pt-7 pb-2 border border-gray-200 rounded-lg focus:border-[#2C74BC] focus:ring-2 focus:ring-[#2C74BC]/20 transition-all duration-300 bg-white text-base placeholder-transparent outline-none shadow-sm focus:shadow-md ${
                          formErrors.email ? "border-red-300" : ""
                        }`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                      />
                      <label
                        htmlFor="email"
                        className={`absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-[#2C74BC] ${
                          formData.email ? "text-xs top-1 text-[#2C74BC]" : ""
                        }`}
                      >
                        Email Address *
                      </label>
                      {formErrors.email && (
                        <p id="email-error" className="text-red-500 text-xs mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      className="peer w-full h-14 px-4 pt-7 pb-2 border border-gray-200 rounded-lg focus:border-[#2C74BC] focus:ring-2 focus:ring-[#2C74BC]/20 transition-all duration-300 bg-white text-base placeholder-transparent outline-none shadow-sm focus:shadow-md"
                    />
                    <label
                      htmlFor="company"
                      className={`absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-[#2C74BC] ${
                        formData.company ? "text-xs top-1 text-[#2C74BC]" : ""
                      }`}
                    >
                      Company
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className={`peer w-full h-14 px-4 pt-7 pb-2 border border-gray-200 rounded-lg focus:border-[#2C74BC] focus:ring-2 focus:ring-[#2C74BC]/20 transition-all duration-300 bg-white text-base placeholder-transparent outline-none shadow-sm focus:shadow-md ${
                        formErrors.subject ? "border-red-300" : ""
                      }`}
                      aria-invalid={!!formErrors.subject}
                      aria-describedby={formErrors.subject ? "subject-error" : undefined}
                    />
                    <label
                      htmlFor="subject"
                      className={`absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-[#2C74BC] ${
                        formData.subject ? "text-xs top-1 text-[#2C74BC]" : ""
                      }`}
                    >
                      Subject *
                    </label>
                    {formErrors.subject && (
                      <p id="subject-error" className="text-red-500 text-xs mt-1">
                        {formErrors.subject}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`peer w-full p-4 pt-7 border border-gray-200 rounded-lg focus:border-[#2C74BC] focus:ring-2 focus:ring-[#2C74BC]/20 transition-all duration-300 bg-white resize-none text-base placeholder-transparent outline-none shadow-sm focus:shadow-md ${
                        formErrors.message ? "border-red-300" : ""
                      }`}
                      aria-invalid={!!formErrors.message}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                    />
                    <label
                      htmlFor="message"
                      className={`absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:text-xs peer-focus:top-1 peer-focus:text-[#2C74BC] ${
                        formData.message ? "text-xs top-1 text-[#2C74BC]" : ""
                      }`}
                    >
                      Message *
                    </label>
                    {formErrors.message && (
                      <p id="message-error" className="text-red-500 text-xs mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-[#2C74BC] to-[#1e5a94] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    aria-label={isSubmitting ? "Submitting form" : "Submit form"}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 flex flex-col">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6 relative overflow-hidden flex-1">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#2C74BC]/5 rounded-full blur-xl" />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#2C74BC] to-[#1e5a94] rounded-lg flex items-center justify-center mr-3 shadow-md">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Get in Touch</h2>
                      <p className="text-gray-600 text-sm sm:text-base">We're here to assist you</p>
                    </div>
                  </div>
                  <div className="space-y-4 flex-1">
                    {[
                      {
                        icon: Phone,
                        title: "Phone",
                        content: "+1 (555) 123-4567",
                        subtext: "Available 7 days a week",
                      },
                      {
                        icon: Mail,
                        title: "Email",
                        content: "contact@techsoft.com",
                        subtext: "24-hour response time",
                      },
                      {
                        icon: MapPin,
                        title: "Office",
                        content: (
                          <>
                            123 Tech Street
                            <br />
                            San Francisco, CA 94105
                            <br />
                            United States
                          </>
                        ),
                      },
                      {
                        icon: Clock,
                        title: "Business Hours",
                        content: (
                          <>
                            Monday - Sunday: 7:00 AM - 10:00 PM
                            <br />
                            Available every day of the week
                          </>
                        ),
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#2C74BC]/5 hover:to-[#2C74BC]/10 transition-all duration-300 hover:shadow-md hover:border hover:border-[#2C74BC]/20 group cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-label={`${item.title} information`}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-[#2C74BC]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2C74BC] group-hover:shadow-lg transition-all duration-300">
                            <item.icon className="w-4 h-4 text-[#2C74BC] group-hover:text-white transition-colors" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base group-hover:text-[#2C74BC] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-[#2C74BC] font-medium text-sm sm:text-base group-hover:text-[#1e5a94] transition-colors">
                            {item.content}
                          </p>
                          {item.subtext && (
                            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-600 transition-colors">
                              {item.subtext}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full bg-gradient-to-b from-white to-gray-50">
            <div className="relative h-[400px] bg-white shadow-md border-t border-gray-100 rounded-2xl overflow-hidden">
              <div
                className={`absolute inset-0 bg-white flex items-center justify-center transition-opacity duration-500 ${
                  mapLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#2C74BC]/10 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                    <MapPin className="w-6 h-6 text-[#2C74BC]" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm sm:text-base mb-2">Loading Map...</p>
                  <p className="text-gray-500 text-xs sm:text-sm">123 Tech Street, San Francisco, CA 94105</p>
                  <a
                    href="https://maps.google.com/?q=123+Tech+Street,+San+Francisco,+CA+94105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-[#2C74BC] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1e5a94] transition-colors"
                    aria-label="Get directions to our office"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197327470443!2d-122.39968368468141!3d37.79413797975647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807cf8b8b5b5%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={`absolute inset-0 transition-opacity duration-500 ${mapLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setMapLoaded(true)}
                title="Office location map"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
