"use client"

import React from "react"

interface MenuItemProps {
  link: string
  text: string
  image: string
}

const WHY_CHOOSE_US_ITEMS: MenuItemProps[] = [
  {
    link: "#expertise",
    text: "Expert Team",
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755431676/industrial-designers-working-3d-model_1_1_yiydlb.jpg",
  },
  {
    link: "#quality",
    text: "Premium Quality",
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439306/standard-quality-control-collage_1_sagatf.jpg",
  },
  {
    link: "#support",
    text: "24/7 Support",
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439315/colleagues-working-together-call-center-with-headphones_1_ubnlkq.jpg",
  },
  {
    link: "#innovation",
    text: "Innovation",
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439298/businessman-with-light-bulb-his-hand_jbist3.jpg",
  },
  {
    link: "#results",
    text: "Proven Results",
    image:
      "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439479/collage-customer-experience-concept_mfmgad.jpg",
  },
]

const FlowingMenu: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {WHY_CHOOSE_US_ITEMS.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  )
}

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image }) => {
  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight px-2 sm:px-3 md:px-4 whitespace-nowrap">
          {text}
        </span>
        <div
          className="w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 my-2 sm:my-3 md:my-4 mx-2 sm:mx-3 md:mx-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ))
  }, [text, image])

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] group min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]">
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl group-hover:text-[#060010] focus:text-white focus-visible:text-[#060010] px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 transition-colors duration-500 ease-out touch-manipulation"
        href={link}
      >
        <span className="text-center leading-tight">
          {text.split(" ").length > 1 ? (
            <>
              <span className="inline">{text.split(" ")[0]}</span>
              <span className="inline ml-2">{text.split(" ").slice(1).join(" ")}</span>
            </>
          ) : (
            text
          )}
        </span>
      </a>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="h-full flex items-center">
          <div className="flex items-center h-full animate-marquee whitespace-nowrap will-change-transform">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowingMenu
