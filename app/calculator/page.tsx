import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CostCalculator } from "@/components/cost-calculator"

export const metadata: Metadata = {
  title: "Cost Calculator | Yong's SecurieCom",
  description: "Get an instant estimate for your security camera installation. Choose your system type, camera count, and options to see transparent pricing.",
}

export default function CalculatorPage() {
  return (
    <>
      <Header />
      <main>
        <CostCalculator />
      </main>
      <Footer />
    </>
  )
}
