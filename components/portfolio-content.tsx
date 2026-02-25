import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Award, ShieldCheck, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    title: "Warehouse Security Overhaul",
    image: "/images/case-warehouse.jpg",
    category: "Business",
    location: "Montague Gardens",
    description: "A 50,000 sq ft warehouse in Montague Gardens needed full perimeter coverage, electric fencing, and loading dock monitoring.",
    challenge: "The client had blind spots in their old system, no perimeter fencing, and experienced theft at the loading docks during off-hours.",
    solution: "We installed 24 IP cameras with 4K resolution, PTZ cameras at loading docks with AI alerts, electric fencing around the full perimeter, and a new alarm system with armed response.",
    results: ["Zero theft incidents since installation", "Full perimeter electric fencing", "Integrated alarm & armed response"],
  },
  {
    title: "Retail Store Multi-Location",
    image: "/images/case-retail.jpg",
    category: "Business",
    location: "Bellville, Parow & Goodwood",
    description: "A retail chain with 3 Cape Town locations needed unified CCTV, access control, and alarm systems managed from a single dashboard.",
    challenge: "Each store had different outdated systems. The owner could not view all locations from one place and had no access control on back rooms.",
    solution: "We unified all 3 stores with 8 cameras each, biometric access control on stockrooms, alarm systems, and connected everything to a single cloud-based monitoring platform.",
    results: ["All 3 stores on one dashboard", "Biometric access on stockrooms", "Reduced shrinkage by 35%"],
  },
  {
    title: "Residential Smart Security",
    image: "/images/case-residential.jpg",
    category: "Home",
    location: "Durbanville",
    description: "A family home in Durbanville needed full security: CCTV, smart locks, electric fencing, alarm, gate motor, and video intercom.",
    challenge: "The homeowner wanted complete property security with smartphone control for cameras, locks, and the gate, plus electric fencing and armed response.",
    solution: "We installed 6 dome cameras, 3 smart door locks, electric fencing on the full perimeter, an alarm system with armed response, an automated gate motor, and a video intercom.",
    results: ["Full property secured", "Everything controlled from phone", "Armed response integrated"],
  },
]

const reviews = [
  { name: "Sarah M.", rating: 5, text: "Yong and his team installed 6 cameras and electric fencing at our place in Brackenfell. Excellent work and they set everything up on our phones. Highly recommend!", type: "Residential", location: "Brackenfell" },
  { name: "David K.", rating: 5, text: "Professional from start to finish. CCTV, access control, and alarms at our warehouse in Montague Gardens. We can now monitor everything remotely from the office.", type: "Business", location: "Montague Gardens" },
  { name: "Maria L.", rating: 5, text: "Got smart locks and cameras installed. Night vision is crystal clear and I can unlock my door from my phone. I feel so much safer in my Bellville home.", type: "Residential", location: "Bellville" },
  { name: "James T.", rating: 5, text: "They installed access control, cameras, and electric fencing at our office complex in Century City. Everything works flawlessly and support is always available.", type: "Business", location: "Century City" },
  { name: "Linda P.", rating: 5, text: "Compared 4 companies and Yong's had the best price for the quality. Cameras, alarm, and gate motor all sorted in one day. Incredible service.", type: "Residential", location: "Durbanville" },
  { name: "Robert C.", rating: 5, text: "We run restaurants across Cape Town and they set up cameras across all locations. The single dashboard and phone app is a game changer for our business.", type: "Business", location: "Cape Town CBD" },
]

const brands = [
  { name: "Hikvision", label: "Authorised Dealer" },
  { name: "Dahua", label: "Certified Installer" },
  { name: "Ajax Systems", label: "Authorised Partner" },
  { name: "Yale", label: "Smart Lock Partner" },
  { name: "Nemtek", label: "Fencing Partner" },
  { name: "CENTURION", label: "Gate Motor Partner" },
]

export function PortfolioContent() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3">Our Work</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Real Cape Town Projects. Real Results.
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Browse our completed installations across Cape Town, read what our clients say, and see the brands we trust.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Case Studies</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Featured Installations
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center"
              >
                <div className={`relative aspect-[4/3] rounded-xl overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={study.image} alt={study.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-cta text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="bg-primary/80 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {study.location}
                    </span>
                  </div>
                </div>
                <div className={`flex flex-col gap-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xl font-bold text-foreground">{study.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{study.description}</p>
                  
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-1">Challenge</p>
                      <p className="text-sm text-foreground leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="rounded-lg bg-secondary p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cta mb-1">Solution</p>
                      <p className="text-sm text-foreground leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {study.results.map((result) => (
                      <span
                        key={result}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-foreground border border-border"
                      >
                        <BadgeCheck className="h-3 w-3 text-cta" />
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Client Reviews</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Hear From Our Cape Town Clients
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We take pride in every installation. Here is what our clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="flex flex-col gap-4 rounded-xl bg-background p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {review.type}
                  </span>
                </div>
                <p className="text-sm text-foreground leading-relaxed flex-1">{`"${review.text}"`}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Brands */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Our Partners</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Trusted Brands We Install
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We are authorised partners and certified installers for leading security equipment manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">{brand.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{brand.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 rounded-xl bg-secondary p-8 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-cta" />
                  <h3 className="text-xl font-bold text-foreground">Licensed & Certified Professional</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  We hold all required licenses and industry certifications. Our team undergoes regular training and all electric fencing installations are SANS 10222-3 compliant.
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {["PSIRA Registered", "SANS 10222-3 Compliant", "Manufacturer Certified", "Insured & Bonded"].map((cert) => (
                    <span key={cert} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-background px-3 py-1.5 rounded-full border border-border">
                      <BadgeCheck className="h-3 w-3 text-cta" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild className="bg-cta text-primary-foreground hover:bg-cta-hover shrink-0 w-fit">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl text-balance">
            Ready to See Results Like These?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
            Every project starts with a free on-site consultation across Cape Town. Let us assess your property and design the perfect security system.
          </p>
          <Button asChild size="lg" className="mt-8 bg-cta text-primary-foreground hover:bg-cta-hover text-base px-8 py-6">
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
