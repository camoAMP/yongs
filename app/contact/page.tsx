import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contact Us | Yong's SecurieCom",
  description: "Get a free quote for security camera installation. Contact us by phone or fill out our simple form. We respond within 24 hours.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
