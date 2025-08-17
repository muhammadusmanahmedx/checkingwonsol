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
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755431676/industrial-designers-working-3d-model_1_1_yiydlb.jpg",
  },
  {
    link: "#quality",
    text: "Premium Quality",
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439306/standard-quality-control-collage_1_sagatf.jpg",
  },
  {
    link: "#support",
    text: "24/7 Support",
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439315/colleagues-working-together-call-center-with-headphones_1_ubnlkq.jpg",
  },
  {
    link: "#innovation",
    text: "Innovation",
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439298/businessman-with-light-bulb-his-hand_jbist3.jpg",
  },
  {
    link: "#results",
    text: "Proven Results",
    image: "https://res.cloudinary.com/dshjm6hcx/image/upload/v1755439479/collage-customer-experience-concept_mfmgad.jpg",
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
    return Array.from({ length: 8 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className="text-[#060010] uppercase font-normal text-[2.5vh] sm:text-[3vh] md:text-[4vh] leading-[1.2] p-[0.5vh_0.5vw_0] sm:p-[1vh_1vw_0] whitespace-nowrap">
          {text}
        </span>
        <div
          className="w-[120px] sm:w-[150px] md:w-[200px] h-[4vh] sm:h-[5vh] md:h-[7vh] my-[1em] sm:my-[1.5em] md:my-[2em] mx-[1vw] sm:mx-[1.5vw] md:mx-[2vw] p-[0.5em_0] sm:p-[0.75em_0] md:p-[1em_0] rounded-[25px] sm:rounded-[35px] md:rounded-[50px] bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ))
  }, [text, image])

  return (


    <>
    
    
    

    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] group">
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[2.5vh] sm:text-[3vh] md:text-[4vh] group-hover:text-[#060010] focus:text-white focus-visible:text-[#060010] px-2 sm:px-4 transition-colors duration-500 ease-out"
        href={link}
      >
        {text}
      </a>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="h-full flex items-center">
          <div className="flex items-center h-full animate-marquee whitespace-nowrap">{repeatedMarqueeContent}</div>
        </div>
      </div>
    </div>
        </>
  )
}

export default FlowingMenu
