import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  HeroSection,
  ServicesOverview,
  ForHomeAndBusiness,
  WhyChooseUs,
  ReviewsPreview,
  AreasServed,
  CTABanner,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ForHomeAndBusiness />
        <WhyChooseUs />
        <ReviewsPreview />
        <AreasServed />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
