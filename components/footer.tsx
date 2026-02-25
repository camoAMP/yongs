import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Yong's SecurieCom Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-md object-cover"
              />
              <span className="text-lg font-bold tracking-tight">
                {"Yong's SecurieCom"}
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Cape Town&apos;s trusted security experts. CCTV, smart locks, alarms, electric fencing, access control & more for homes and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services#cctv" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  CCTV & IP Cameras
                </Link>
              </li>
              <li>
                <Link href="/services#smart-locks" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Smart Door Locks
                </Link>
              </li>
              <li>
                <Link href="/services#access-control" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Access Control
                </Link>
              </li>
              <li>
                <Link href="/services#alarms" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Alarm Systems
                </Link>
              </li>
              <li>
                <Link href="/services#electric-fencing" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Electric Fencing
                </Link>
              </li>
              <li>
                <Link href="/services#gate-motors" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Gate Motors & Intercoms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/70" />
                <a href="tel:+27000000000" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +27 (0) 00 000 0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/70" />
                <a href="mailto:info@yongssecuriecom.co.za" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@yongssecuriecom.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-foreground/70" />
                <span className="text-sm text-primary-foreground/70">
                  Serving Cape Town & Surrounds
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/50">
            {"© 2026 Yong's SecurieCom. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
