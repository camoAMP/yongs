import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesContent } from "@/components/services-content"

export const metadata: Metadata = {
  title: "Services | Yong's SecurieCom",
  description: "Professional security camera installation, access control, and alarm systems for homes and businesses. Explore our full range of security services.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
    </>
  )
}
