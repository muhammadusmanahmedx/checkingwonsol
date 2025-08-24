import React, { useState } from "react";
import { Filter } from "lucide-react";
import { useNavigationLoader } from "../navigationLoader";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { navigateWithLoader, isLoading } = useNavigationLoader();

  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "AgriTech",
      category: "web-development",
      description:
        "A modern e-commerce platform with intuitive user interface, secure payment processing, and comprehensive admin dashboard for managing products, orders, and customer relationships.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755516678/figma_agritech-min_xpvho7.png",
    },
    {
      id: 2,
      title: "Gym finance manager",
      category: "Ai & System development",
      description:
        "Complete redesign and development of corporate website focusing on user experience, mobile responsiveness, and modern design principles to enhance brand presence.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1751741397/Gym_Project_1_ej4hs9.png",
    },
    {
      id: 3,
      title: "Hostelized",
      category: "Ai & System development",
      description:
        "Cross-platform mobile application for task management with real-time synchronization, team collaboration features, and intuitive drag-and-drop interface.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1751725068/Hostelized_Project_fc8ojb.png",
    },
    {
      id: 4,
      title: "SSA Consultants",
      category: "web-development",
      description:
        "Interactive business analytics dashboard with real-time data visualization, custom reporting features, and comprehensive metrics tracking for informed decision making.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1748602096/Frame_1_kfuvgu.png",
    },
    {
      id: 5,
      title: "Charity website",
      category: "web-development",
      description:
        "Online reservation management system with table booking, customer notification system, and integrated payment processing for streamlined restaurant operations.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1751643716/charity_website_f8sant.png",
    },
    {
      id: 6,
      title: "WorkForce Pro",
      category: "Ai & System development",
      description:
        "Complete brand identity design including logo creation, color palette, typography, and brand guidelines to establish strong market presence and recognition.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1748602042/Frame_1_1_siplip.png",
    },
    {
      id: 7,
      title: "Music App",
      category: "mobile-app",
      description:
        "Comprehensive fitness tracking mobile application with workout planning, progress monitoring, social features, and personalized training recommendations.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1754676668/music_app_z3fsxc.png",
    },
    {
      id: 8,
      title: "Password Manager Application",
      category: "web-development",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1748598308/passmanager-1_1_qpeohd.png",
    },
    {
      id: 9,
      title: "Portfolio Website",
      category: "web-development",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1748602335/portfolio-1_1_elnjok.png",
    },
    {
      id: 10,
      title: "POS System",
      category: "Ai & System development",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755519045/POS_System-min_nhqied.png",
    },
    {
      id: 11,
      title: "Navigation App",
      category: "mobile-app",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520221/Frame_8_3_-min_aijjzg.png",
    },
    {
      id: 12,
      title: "Multi Language conversation",
      category: "mobile-app",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520225/Language_app-min_lhwuvz.png",
    },
    {
      id: 13,
      title: "All Language Translation",
      category: "mobile-app",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520229/Frame_44-min_nulazj.png",
    },
    {
      id: 14,
      title: "Satellite Navigation App",
      category: "mobile-app",
      description:
        "Modern, responsive portfolio website template with dark mode support, smooth animations, and customizable sections for creative professionals and agencies.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520269/Frame_8_2_-min_r14xkg.png",
    },
    {
      id: 15,
      title: "Music App Store Graphics",
      category: "play-store-graphics",
      description:
        "Professional Play Store graphics design including app icons, feature graphics, screenshots, and promotional materials optimized for maximum app store visibility.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1754676668/music_app_z3fsxc.png",
    },
    {
      id: 16,
      title: "Navigation App Store Assets",
      category: "play-store-graphics",
      description:
        "Complete Play Store asset package with high-conversion app store graphics, promotional banners, and visual elements designed to increase download rates.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520221/Frame_8_3_-min_aijjzg.png",
    },
    {
      id: 17,
      title: "Language App Graphics Suite",
      category: "play-store-graphics",
      description:
        "Comprehensive Play Store graphics suite including app icons, feature graphics, screenshots mockups, and promotional materials for language learning applications.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520225/Language_app-min_lhwuvz.png",
    },
    {
      id: 18,
      title: "Translation App Store Design",
      category: "play-store-graphics",
      description:
        "Professional app store design package with eye-catching graphics, promotional banners, and marketing materials designed to boost app visibility and downloads.",
      image:
        "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755520229/Frame_44-min_nulazj.png",
    },
  ];

  const categories = [
    { key: "all", label: "All Projects", count: projects.length },
    {
      key: "web-development",
      label: "Web Development",
      count: projects.filter((p) => p.category === "web-development").length,
    },
    {
      key: "Ai & System development",
      label: "Ai & System development",
      count: projects.filter((p) => p.category === "Ai & System development")
        .length,
    },
    {
      key: "mobile-app",
      label: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile-app").length,
    },
    {
      key: "play-store-graphics",
      label: "Play Store Graphics",
      count: projects.filter((p) => p.category === "play-store-graphics").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleContactUsClick = () => {
    navigateWithLoader("/contact", "Let's discuss your next project...", 2500);
  };

  const handleProjectClick = (projectTitle: string) => {
    navigateWithLoader(
      `/portfolio/${projectTitle.toLowerCase().replace(/\s+/g, "-")}`,
      `Loading ${projectTitle} details...`,
      2000
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Filter Tabs - Optimized for Mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === category.key
                  ? "bg-[#2C74BC] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline sm:inline">{category.label}</span>
              <span className="xs:hidden sm:hidden">
                {category.key === "all" ? "All" : 
                 category.key === "web-development" ? "Web" : 
                 category.key === "Ai & System development" ? "AI" : 
                 category.key === "mobile-app" ? "Mobile" : "Graphics"}
              </span>
              <span
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs ${
                  activeFilter === category.key
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Project Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#2C74BC] cursor-default"
            >
              {/* Image Container - Mobile Optimized */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.objectFit = 'contain';
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#2C74BC] transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-none">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Try selecting a different category to view our work.
            </p>
          </div>
        )}

        {/* Call to Action - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-[#2C74BC] rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Next Project?
            </h3>
            <p className="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Let's collaborate to bring your vision to life with innovative
              solutions and cutting-edge technology.
            </p>
            <button
              onClick={handleContactUsClick}
              disabled={isLoading}
              className={`bg-white text-[#2C74BC] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover:cursor-pointer text-sm sm:text-base ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {"Contact Us Today"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;