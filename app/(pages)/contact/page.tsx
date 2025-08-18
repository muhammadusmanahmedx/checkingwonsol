// import { ContactForm } from "@/components/contact-form"
// import { ContactInfo } from "@/components/contact-info"
// import { MapSection } from "@/components/map-section"
import { MapSection } from "@/components/(conact us components)/map-section"
import { ContactForm } from "@/components/(conact us components)/contact-form"
import { ContactInfo } from "@/components/(conact us components)/contact-info"
import ContactPage from "@/components/(conact us components)/contact"
import AboutUsSection from "@/components/breadcrum"

export const metadata = {
  title: "Contact Us | Super Store",
  description: "Get in touch with Super Store for inquiries, support, or collaboration opportunities.",
  keywords: ["contact super store", "customer support", "inquiries"],
  openGraph: {
    title: "Contact Super Store",
    description: "Reach out to us for inquiries, support, or partnerships.",
    images: ["/og-contact.png"],
  },
};

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
