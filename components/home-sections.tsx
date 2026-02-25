import Image from "next/image"
import Link from "next/link"
import { Shield, Smartphone, Camera, Phone, ArrowRight, Star, MapPin, CheckCircle2, Lock, Zap, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.jpg"
          alt="Secured Cape Town home with security cameras installed"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center gap-6 lg:gap-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 border border-primary-foreground/10">
            <Shield className="h-4 w-4" />
            Cape Town&apos;s Trusted Security Experts
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-6xl max-w-4xl text-balance">
            Complete Security Solutions for Cape Town Homes & Businesses
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl leading-relaxed text-pretty">
            CCTV cameras, smart door locks, alarm systems, electric fencing, access control & more. We install it, set it up on your phone, and make sure you feel safe.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto mt-2">
            <Button asChild size="lg" className="bg-cta text-primary-foreground hover:bg-cta-hover text-base px-8 py-6">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="tel:+27000000000">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-foreground/50" />
              Free On-Site Consultation
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-foreground/50" />
              Serving All Cape Town Areas
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary-foreground/50" />
              Same-Day Service Available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  const services = [
    {
      icon: Camera,
      title: "CCTV & IP Cameras",
      description: "HD cameras you can watch from your phone, day or night. Professional installation for homes and businesses across Cape Town.",
      href: "/services#cctv",
    },
    {
      icon: Lock,
      title: "Smart Door Locks",
      description: "Keyless entry with fingerprint, PIN, card, or smartphone. Know exactly who comes and goes at your property.",
      href: "/services#smart-locks",
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Biometric readers, key cards, and intercom systems. Control who enters your home, office, or complex.",
      href: "/services#access-control",
    },
    {
      icon: BellRing,
      title: "Alarm Systems",
      description: "Smart alarms with instant phone alerts. Armed response integration and 24/7 monitoring options available.",
      href: "/services#alarms",
    },
    {
      icon: Zap,
      title: "Electric Fencing",
      description: "High-voltage perimeter protection with energisers and monitoring. A proven deterrent for Cape Town properties.",
      href: "/services#electric-fencing",
    },
    {
      icon: Smartphone,
      title: "Gate Motors & Intercoms",
      description: "Automated sliding and swing gate motors with video intercom systems. Open your gate from anywhere.",
      href: "/services#gate-motors",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">What We Do</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            Full-Service Security for Cape Town
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From CCTV cameras to electric fencing, smart locks to alarm systems -- we handle every aspect of your property&apos;s security.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-8 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <span className="text-sm font-medium text-cta flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ForHomeAndBusiness() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          {/* For Home */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/hero-home.jpg"
                alt="Secured home in Cape Town"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-foreground">For Your Home</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep your family safe with a complete home security setup. CCTV cameras, smart locks on your doors, electric fencing around your perimeter, and an alarm that alerts you and armed response instantly.
              </p>
              <ul className="flex flex-col gap-2">
                {["CCTV cameras with smartphone monitoring", "Smart door locks with fingerprint & PIN", "Electric fencing with energiser", "Alarm system with armed response", "Gate motor & video intercom"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit mt-2 bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/services#home">
                  Home Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Business */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/hero-business.jpg"
                alt="Secured business premises in Cape Town"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-foreground">For Your Business</h3>
              <p className="text-muted-foreground leading-relaxed">
                Protect your business with enterprise-grade security. Multi-camera CCTV, biometric access control, perimeter electric fencing, and integrated alarm systems to keep your staff and assets safe.
              </p>
              <ul className="flex flex-col gap-2">
                {["Multi-camera CCTV with remote viewing", "Biometric & card access control", "Electric fencing for full perimeter", "Integrated alarm & armed response", "Automated gates & boom barriers"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit mt-2 bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/services#business">
                  Business Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const reasons = [
    { title: "Local Cape Town Team", description: "We live and work in Cape Town. We understand the unique security challenges of the area." },
    { title: "Free On-Site Assessment", description: "We visit your property, assess your security needs, and provide a detailed quote at no cost." },
    { title: "Smartphone Setup Included", description: "We configure the app on your phone so you can monitor cameras, locks, and alarms before we leave." },
    { title: "Quality Equipment", description: "We only install top-tier products from trusted brands like Hikvision, Dahua, Yale, and Nemtek." },
    { title: "Warranty on All Work", description: "Every installation comes with a warranty. If something goes wrong, we come back and fix it." },
    { title: "After-Sales Support", description: "Need help after installation? Call us. We provide ongoing support and maintenance services." },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Why Us</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            {"Why Cape Town Trusts Yong's SecurieCom"}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex flex-col gap-3 p-6 rounded-xl bg-card border border-border">
              <h3 className="text-base font-semibold text-card-foreground">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ReviewsPreview() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Yong and his team installed 6 cameras and electric fencing at our place in Brackenfell. Excellent work and they set everything up on my phone. Highly recommend!",
      location: "Brackenfell"
    },
    {
      name: "David K.",
      rating: 5,
      text: "Professional from start to finish. They installed CCTV, access control, and alarms at our warehouse in Montague Gardens. We can now monitor everything remotely.",
      location: "Montague Gardens"
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "Got smart locks and cameras installed. The night vision is crystal clear and I can unlock my door from my phone. I feel so much safer in my Bellville home.",
      location: "Bellville"
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Reviews</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            What Our Cape Town Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="flex flex-col gap-4 rounded-xl bg-background p-8 border border-border">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">{`"${review.text}"`}</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AreasServed() {
  const areas = [
    "Cape Town CBD",
    "Bellville",
    "Brackenfell",
    "Durbanville",
    "Kraaifontein",
    "Kuilsriver",
    "Parow",
    "Goodwood",
    "Table View",
    "Bloubergstrand",
    "Milnerton",
    "Century City",
    "Stellenbosch",
    "Somerset West",
    "Strand",
    "Paarl",
    "Mitchells Plain",
    "Athlone",
    "Claremont",
    "Constantia",
    "Wynberg",
    "Tokai",
    "Fish Hoek",
    "Simon&apos;s Town",
    "Muizenberg",
    "Hout Bay",
    "Camps Bay",
    "Sea Point",
    "Green Point",
    "Gardens",
    "Montague Gardens",
    "Epping",
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-cta mb-3">Service Areas</p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
            Serving All of Cape Town & Surrounds
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide professional security installations across Cape Town, the Northern Suburbs, Southern Suburbs, West Coast, Helderberg, and Cape Winelands.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {areas.map((area) => (
            <div key={area} className="flex items-center gap-2 py-3 px-4 rounded-lg bg-card border border-border">
              <MapPin className="h-4 w-4 shrink-0 text-cta" />
              <span className="text-sm font-medium text-card-foreground">{area}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Don&apos;t see your area? Contact us -- we likely cover it too.
        </p>
      </div>
    </section>
  )
}

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
          Ready to Secure Your Cape Town Property?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Get a free on-site consultation and quote. We will visit your property and recommend the best security setup for your needs and budget.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 mt-8">
          <Button asChild size="lg" className="bg-cta text-primary-foreground hover:bg-cta-hover text-base px-8 py-6">
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
            <Link href="/calculator">
              Try Our Cost Calculator
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
