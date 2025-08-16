import type React from "react"
import { cn } from "@/lib/utils"
import {
  IconDeviceMobile,
  IconWorld,
  IconShield,
  IconCloud,
  IconBrain,
  IconTransform,
  IconUsers,
  IconSettings,
  IconSearch,
  IconTrendingUp,
  IconPalette,
  IconLayout,
  IconCode,
  IconRobot,
  IconBrandWordpress,
  IconDatabase,
  IconServer,
  IconMail,
  IconBrandFacebook,
  IconChartBar,
  IconBulb,
  IconTools,
  IconPencil,
} from "@tabler/icons-react"

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with cutting-edge features.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      icon: <IconWorld />,
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      icon: <IconPalette />,
    },
    {
      title: "Website Design",
      description: "Custom website designs that reflect your brand and convert visitors into customers.",
      icon: <IconLayout />,
    },
    {
      title: "SEO Optimization",
      description: "Search engine optimization to improve your website's visibility and organic traffic.",
      icon: <IconSearch />,
    },
    {
      title: "Mobile App SEO",
      description: "App Store Optimization (ASO) to increase your mobile app's visibility and downloads.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and reach.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media campaigns to engage your audience and build brand awareness.",
      icon: <IconBrandFacebook />,
    },
    {
      title: "WordPress Development",
      description: "Custom WordPress websites and plugins tailored to your specific business needs.",
      icon: <IconBrandWordpress />,
    },
    {
      title: "Custom System Design",
      description: "Bespoke software systems designed to streamline your unique business processes.",
      icon: <IconCode />,
    },
    {
      title: "Automation Solutions",
      description: "Intelligent automation to reduce manual work and increase operational efficiency.",
      icon: <IconRobot />,
    },
    {
      title: "Low Code/No Code",
      description: "Rapid application development using low-code and no-code platforms for faster delivery.",
      icon: <IconTools />,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for enhanced performance and reliability.",
      icon: <IconCloud />,
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your business from digital threats and vulnerabilities.",
      icon: <IconShield />,
    },
    {
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features to transform your business processes.",
      icon: <IconBrain />,
    },
    {
      title: "Digital Transformation",
      description: "Complete digital overhaul to modernize your business operations and customer experience.",
      icon: <IconTransform />,
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance and expert consultation to optimize your IT infrastructure.",
      icon: <IconUsers />,
    },
    {
      title: "DevOps Solutions",
      description: "Streamlined development and deployment processes for faster, more reliable software delivery.",
      icon: <IconSettings />,
    },
    {
      title: "Database Management",
      description: "Efficient database design, optimization, and management for your critical business data.",
      icon: <IconDatabase />,
    },
    {
      title: "Server Management",
      description: "Reliable server setup, maintenance, and monitoring to ensure optimal performance.",
      icon: <IconServer />,
    },
    {
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive customer engagement.",
      icon: <IconMail />,
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights and comprehensive reporting to measure and improve performance.",
      icon: <IconChartBar />,
    },
    {
      title: "Brand Strategy",
      description: "Strategic brand development and positioning to differentiate your business in the market.",
      icon: <IconBulb />,
    },
    {
      title: "Content Publishing",
      description: "Professional content creation and publishing strategies to engage your target audience.",
      icon: <IconPencil />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        index % 4 === 0 && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}
