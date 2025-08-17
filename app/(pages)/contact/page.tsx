// import { ContactForm } from "@/components/contact-form"
// import { ContactInfo } from "@/components/contact-info"
// import { MapSection } from "@/components/map-section"
import { MapSection } from "@/components/(conact us components)/map-section"
import { ContactForm } from "@/components/(conact us components)/contact-form"
import { ContactInfo } from "@/components/(conact us components)/contact-info"
import ContactPage from "@/components/(conact us components)/contact"
import AboutUsSection from "@/components/breadcrum"


export default function Contact() {
  return (
   <>
     <AboutUsSection 
     title="Contact Us" 
     backgroundImage="https://res.cloudinary.com/dshjm6hcx/image/upload/v1755452719/contract-male-sunny-sand-career_zl4x2p.jpg"
     subtitle="Learn more about our company and mission"
   />
   <ContactPage/>
   </>
  )
}
