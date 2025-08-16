import { ArcTimeline, type ArcTimelineItem } from "@/components/magicui/arc-timeline"
import {
  RocketIcon,
  CubeIcon,
  GlobeIcon,
  GearIcon,
  LightningBoltIcon,
  StarIcon,
  MagicWandIcon,
  PersonIcon,
  HomeIcon,
} from "@radix-ui/react-icons"

export default function WonSolutionsTimeline() {
  return (
    <ArcTimeline
      data={TIMELINE}
      defaultActiveStep={{ time: "2025", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
  )
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "Early Days",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content: "Dreamed of building my own technology company and making a global impact.",
      },
      {
        icon: <PersonIcon width={20} height={20} />,
        content: "Started freelancing to gain experience and build foundational skills.",
      },
    ],
  },
  {
    time: "2020-2022",
    steps: [
      {
        icon: <HomeIcon width={20} height={20} />,
        content: "Worked directly with physical clients, understanding real business challenges.",
      },
      {
        icon: <GearIcon width={20} height={20} />,
        content: "Took initiative to solve complex problems and deliver innovative solutions.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content: "Built reputation for reliable, high-quality technology implementations.",
      },
    ],
  },
  {
    time: "2023",
    steps: [
      {
        icon: <RocketIcon width={20} height={20} />,
        content: "Officially founded Won Solutions to formalize growing client base.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content: "Expanded service offerings to include web development and digital transformation.",
      },
    ],
  },
  {
    time: "2024",
    steps: [
      {
        icon: <GlobeIcon width={20} height={20} />,
        content: "Established strong local presence and built team of skilled developers.",
      },
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content: "Specialized in AI-powered solutions and modern web technologies.",
      },
      {
        icon: <StarIcon width={20} height={20} />,
        content: "Achieved consistent growth and client satisfaction across diverse industries.",
      },
    ],
  },
  {
    time: "2025",
    steps: [
      {
        icon: <GlobeIcon width={20} height={20} />,
        content: "Strategic pivot to expand internationally, targeting Middle East markets.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content: "Aligning with Middle East Vision 2030 digital transformation initiatives.",
      },
    ],
  },
  {
    time: "2025-2026",
    steps: [
      {
        icon: <StarIcon width={20} height={20} />,
        content: "Establishing partnerships in Saudi Arabia to support Vision 2030 goals.",
      },
      {
        icon: <GlobeIcon width={20} height={20} />,
        content: "Expanding operations to UAE, leveraging Dubai's tech hub ecosystem.",
      },
      {
        icon: <LightningBoltIcon width={20} height={20} />,
        content: "Building presence in Egypt to tap into growing North African market.",
      },
    ],
  },
  {
    time: "2027+",
    steps: [
      {
        icon: <MagicWandIcon width={20} height={20} />,
        content: "Contributing to Middle East's digital economy through innovative solutions.",
      },
      {
        icon: <CubeIcon width={20} height={20} />,
        content: "Becoming a key technology partner for regional businesses and governments.",
      },
      {
        icon: <RocketIcon width={20} height={20} />,
        content: "Establishing Won Solutions as a leading tech company in the MENA region.",
      },
    ],
  },
]
