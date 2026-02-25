import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Shield, Camera, Smartphone, Lock, BellRing, Eye, Wifi, Server, Monitor, Zap, DoorOpen, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"

const cameraTypes = [
  {
    name: "Dome Cameras",
    image: "/images/camera-dome.jpg",
    description: "Sleek, discreet cameras that blend into any ceiling or overhang. Perfect for indoor and outdoor use across Cape Town properties.",
    features: ["360-degree coverage", "Vandal-resistant design", "Indoor & outdoor models", "Night vision capable"],
  },
  {
    name: "Bullet Cameras",
    image: "/images/camera-bullet.jpg",
    description: "Long-range cameras ideal for monitoring driveways, parking lots, and large outdoor areas.",
    features: ["Extended range viewing", "Weatherproof housing", "Visible deterrent", "IR night vision"],
  },
  {
    name: "PTZ Cameras",
    image: "/images/camera-ptz.jpg",
    description: "Pan-tilt-zoom cameras that let you follow action in real time. Control them right from your phone.",
    features: ["Remote pan/tilt/zoom", "Auto-tracking capability", "30x optical zoom", "Preset patrol routes"],
  },
]

export function ServicesContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3">Our Services</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Complete Security Solutions for Cape Town
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            CCTV, smart locks, alarms, electric fencing, access control, gate motors & intercoms. Everything you need to secure your home or business.
          </p>
        </div>
      </section>

      {/* CCTV / IP Camera Installation */}
      <section id="cctv" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-2 text-sm font-medium text-cta mb-4">
              <Camera className="h-4 w-4" />
              Most Popular Service
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              CCTV & IP Camera Installation
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              High-definition cameras you can access from anywhere in the world. We install and configure everything, including setting up the app on your phone.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {cameraTypes.map((camera) => (
              <div key={camera.name} className="flex flex-col rounded-xl border border-border overflow-hidden bg-card">
                <div className="relative aspect-[4/3]">
                  <Image src={camera.image} alt={camera.name} fill className="object-cover" />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{camera.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{camera.description}</p>
                  <ul className="flex flex-col gap-2 mt-2">
                    {camera.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cta" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-secondary p-8 lg:p-12">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground">AI-Powered Smart Cameras</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xl">
                  Our latest cameras use AI to tell the difference between a person, a vehicle, and an animal. Get smarter alerts and fewer false alarms.
                </p>
              </div>
              <Button asChild className="bg-cta text-primary-foreground hover:bg-cta-hover shrink-0 w-fit">
                <Link href="/contact">
                  Ask About AI Cameras
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Door Locks */}
      <section id="smart-locks" className="py-16 lg:py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <KeyRound className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Smart Door Locks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Upgrade your doors with smart locks that let you in with a fingerprint, PIN code, key card, or your smartphone. No more lost keys -- and you can see exactly who entered and when.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Fingerprint recognition",
                  "PIN code & key card access",
                  "Smartphone app control",
                  "Temporary codes for visitors",
                  "Auto-lock functionality",
                  "Access history & audit logs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/smart-lock.jpg" alt="Smart door lock installation in Cape Town" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section id="access-control" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden order-2 lg:order-1">
              <Image src="/images/hero-business.jpg" alt="Access control system installation" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Lock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Access Control Systems
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Control who enters your property and when. Our access control systems are ideal for offices, complexes, warehouses, and gated estates across Cape Town.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Biometric fingerprint readers",
                  "Key card & fob access",
                  "Keypad entry systems",
                  "Visitor management & logs",
                  "Multi-door & gate control",
                  "Integration with CCTV systems",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alarm Systems */}
      <section id="alarms" className="py-16 lg:py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <BellRing className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Alarm Systems
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Get instant alerts on your phone the moment something happens. Our alarm systems integrate with armed response services and can be controlled from your smartphone.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Motion sensors & door contacts",
                  "Instant smartphone notifications",
                  "Armed response integration",
                  "Panic buttons (fixed & wireless)",
                  "Easy arm/disarm from your phone",
                  "Battery backup during load shedding",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src="/images/alarm-panel.jpg" alt="Alarm system panel installation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Electric Fencing */}
      <section id="electric-fencing" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden order-2 lg:order-1">
              <Image src="/images/electric-fence.jpg" alt="Electric fencing installation Cape Town" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-6 order-1 lg:order-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Electric Fencing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A proven perimeter deterrent for Cape Town homes and businesses. Our electric fencing installations meet SANS 10222-3 standards and integrate with your alarm system for total perimeter security.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "High-voltage perimeter protection",
                  "Energiser with battery backup",
                  "SANS 10222-3 compliant",
                  "Integration with alarm systems",
                  "Wall-top & free-standing options",
                  "Tamper-proof brackets & monitors",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gate Motors & Intercoms */}
      <section id="gate-motors" className="py-16 lg:py-24 bg-secondary scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <DoorOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Gate Motors & Intercoms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Automate your gates with reliable motors and video intercom systems. See who is at the gate and open it from inside your home or from your phone, even when you are not home.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Sliding & swing gate motors",
                  "Video intercom with phone app",
                  "Battery backup for load shedding",
                  "Remote access from anywhere",
                  "Multi-user remote controls",
                  "Integration with access control",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-cta" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-fit bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/images/gate-motor.jpg" alt="Automated gate motor installation" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="/images/intercom.jpg" alt="Video intercom system" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home vs Business packages */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl text-balance">
              Tailored to Your Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Home */}
            <div id="home" className="flex flex-col gap-6 rounded-xl bg-card p-8 lg:p-10 border border-border scroll-mt-20">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Monitor className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Home Security Packages</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive home security for Cape Town families. Cameras, locks, fencing, and alarms -- everything to keep your family safe.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: Camera, label: "2-8 CCTV cameras" },
                  { icon: KeyRound, label: "Smart door locks" },
                  { icon: Zap, label: "Electric fencing" },
                  { icon: BellRing, label: "Alarm & armed response" },
                  { icon: DoorOpen, label: "Gate motor & intercom" },
                  { icon: Smartphone, label: "Phone app for all" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-foreground">
                    <item.icon className="h-4 w-4 text-cta shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
              <Button asChild className="w-fit mt-2 bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/calculator">
                  Estimate Your Cost
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Business */}
            <div id="business" className="flex flex-col gap-6 rounded-xl bg-card p-8 lg:p-10 border border-border scroll-mt-20">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Business Security Packages</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Enterprise-grade security for offices, warehouses, retail, and commercial properties across Cape Town.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { icon: Camera, label: "8-64+ CCTV cameras" },
                  { icon: Lock, label: "Biometric access control" },
                  { icon: Zap, label: "Perimeter electric fencing" },
                  { icon: BellRing, label: "Integrated alarm system" },
                  { icon: Eye, label: "AI-powered analytics" },
                  { icon: Server, label: "Enterprise NVR storage" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-foreground">
                    <item.icon className="h-4 w-4 text-cta shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
              <Button asChild className="w-fit mt-2 bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/calculator">
                  Estimate Your Cost
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
            Not Sure What You Need?
          </h2>
          <p className="mt-4 text-primary-foreground/70 max-w-xl mx-auto leading-relaxed">
            No problem. We offer free on-site consultations across Cape Town. We assess your property, recommend the best solution, and give you a detailed quote. No pressure, no obligation.
          </p>
          <Button asChild size="lg" className="mt-8 bg-cta text-primary-foreground hover:bg-cta-hover text-base px-8 py-6">
            <Link href="/contact">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
