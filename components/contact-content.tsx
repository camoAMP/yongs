"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60 mb-3">Get In Touch</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
            Let Us Secure Your Cape Town Property
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Fill out the short form below and we will get back to you within 24 hours. Or call us directly for immediate assistance.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3 rounded-xl border border-border bg-card p-6 lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cta/10">
                    <CheckCircle2 className="h-8 w-8 text-cta" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">Thank You!</h2>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    We received your request and will contact you within 24 hours to discuss your security needs. For immediate assistance, call us directly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: "", phone: "", service: "" })
                    }}
                    variant="outline"
                    className="mt-4"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-card-foreground mb-1">Request a Quote</h2>
                    <p className="text-sm text-muted-foreground">
                      Just 3 fields. We keep it simple so you can reach us fast.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="e.g. John Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background text-foreground"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 082 123 4567"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background text-foreground"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-sm font-medium text-card-foreground">
                      Type of Service
                    </Label>
                    <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                      <SelectTrigger id="service" className="bg-background">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cctv-home">CCTV Cameras (Home)</SelectItem>
                        <SelectItem value="cctv-business">CCTV Cameras (Business)</SelectItem>
                        <SelectItem value="smart-locks">Smart Door Locks</SelectItem>
                        <SelectItem value="access-control">Access Control System</SelectItem>
                        <SelectItem value="alarm-system">Alarm System</SelectItem>
                        <SelectItem value="electric-fencing">Electric Fencing</SelectItem>
                        <SelectItem value="gate-motor">Gate Motor & Intercom</SelectItem>
                        <SelectItem value="full-package">Full Security Package</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="other">Other / Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-cta text-primary-foreground hover:bg-cta-hover text-base py-6 gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send My Request
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We will never share your information. Response guaranteed within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Direct Contact */}
              <div className="rounded-xl border border-border bg-card p-6 lg:p-8 flex flex-col gap-6">
                <h3 className="text-lg font-bold text-card-foreground">Direct Contact</h3>
                <div className="flex flex-col gap-5">
                  <a href="tel:+27000000000" className="flex items-start gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 shrink-0 group-hover:bg-cta/20 transition-colors">
                      <Phone className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">+27 (0) 00 000 0000</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Call or WhatsApp us directly</p>
                    </div>
                  </a>
                  <a href="mailto:info@yongssecuriecom.co.za" className="flex items-start gap-4 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 shrink-0 group-hover:bg-cta/20 transition-colors">
                      <Mail className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">info@yongssecuriecom.co.za</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Email us any time</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 shrink-0">
                      <MapPin className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Cape Town & Surrounds</p>
                      <p className="text-xs text-muted-foreground mt-0.5">We come to you for free assessments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cta/10 shrink-0">
                      <Clock className="h-5 w-5 text-cta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">Mon - Sat: 8AM - 6PM</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Call */}
              <div className="rounded-xl bg-primary p-6 lg:p-8 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-primary-foreground">Why Reach Out?</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Free on-site property assessment",
                    "No-obligation detailed quote",
                    "Expert advice tailored to Cape Town",
                    "Same-day response guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-primary-foreground/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary-foreground/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
