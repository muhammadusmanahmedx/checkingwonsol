"use client";

import type React from "react";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        console.log("Form submitted:", formData);
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("❌ Error: " + error);
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Discuss Your{" "}
          <span className="text-[#2C74BC]">Next Project?</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Let's turn your innovative ideas into powerful software solutions.
          Contact us to start your digital transformation journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3 relative">
            <label
              htmlFor="name"
              className="text-sm font-bold text-gray-800 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#2C74BC] rounded-full"></span>
              Full Name *
            </label>
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
                placeholder="John Doe"
                className="w-full h-14 px-5 border-2 border-gray-200 rounded-2xl focus:border-[#2C74BC] focus:ring-4 focus:ring-[#2C74BC]/10 transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg placeholder:text-gray-400 shadow-sm focus:shadow-md outline-none"
              />
              {focusedField === "name" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C74BC] to-transparent rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
          <div className="space-y-3 relative">
            <label
              htmlFor="email"
              className="text-sm font-bold text-gray-800 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#2C74BC] rounded-full"></span>
              Email Address *
            </label>
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
                placeholder="john@company.com"
                className="w-full h-14 px-5 border-2 border-gray-200 rounded-2xl focus:border-[#2C74BC] focus:ring-4 focus:ring-[#2C74BC]/10 transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg placeholder:text-gray-400 shadow-sm focus:shadow-md outline-none"
              />
              {focusedField === "email" && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C74BC] to-transparent rounded-full animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-3 relative">
          <label
            htmlFor="company"
            className="text-sm font-bold text-gray-800 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            Company
          </label>
          <div className="relative">
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              placeholder="Your Company Name"
              className="w-full h-14 px-5 border-2 border-gray-200 rounded-2xl focus:border-[#2C74BC] focus:ring-4 focus:ring-[#2C74BC]/10 transition-all duration-300 bg-gray-50/50 focus:bg-white text-lg placeholder:text-gray-400 shadow-sm focus:shadow-md outline-none"
            />
            {focusedField === "company" && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C74BC] to-transparent rounded-full animate-pulse"></div>
            )}
          </div>
        </div>

        <div className="space-y-3 relative">
          <label
            htmlFor="message"
            className="text-sm font-bold text-gray-800 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-[#2C74BC] rounded-full"></span>
            Message *
          </label>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell us about your project, timeline, budget, and how we can help bring your vision to life..."
              rows={6}
              className="w-full p-5 border-2 border-gray-200 rounded-2xl focus:border-[#2C74BC] focus:ring-4 focus:ring-[#2C74BC]/10 transition-all duration-300 bg-gray-50/50 focus:bg-white resize-none text-lg placeholder:text-gray-400 shadow-sm focus:shadow-md outline-none"
            />
            {focusedField === "message" && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2C74BC] to-transparent rounded-full animate-pulse"></div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-16 bg-gradient-to-r from-[#2C74BC] via-[#1e5a94] to-[#2C74BC] hover:from-[#1e5a94] hover:via-[#2C74BC] hover:to-[#1e5a94] text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-1"
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
  );
}
