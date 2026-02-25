import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioContent } from "@/components/portfolio-content"

export const metadata: Metadata = {
  title: "Portfolio & Reviews | Yong's SecurieCom",
  description: "See our completed projects, read client reviews, and learn about the brands we partner with. Real results from real installations.",
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioContent />
      </main>
      <Footer />
    </>
  )
}
