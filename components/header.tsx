"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/calculator", label: "Cost Calculator" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Yong's SecurieCom Logo"
              width={48}
              height={48}
              className="h-10 w-10 rounded-md object-cover lg:h-12 lg:w-12"
            />
            <span className="text-lg font-bold tracking-tight text-foreground lg:text-xl">
              {"Yong's SecurieCom"}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" size="sm" className="gap-2 border-foreground/20">
              <a href="tel:+27000000000">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
            <Button asChild size="sm" className="bg-cta text-primary-foreground hover:bg-cta-hover">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-3 text-base font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button asChild variant="outline" className="w-full gap-2 justify-center">
                <a href="tel:+27000000000">
                  <Phone className="h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
              <Button asChild className="w-full bg-cta text-primary-foreground hover:bg-cta-hover">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
