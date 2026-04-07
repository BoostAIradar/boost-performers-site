"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const NAV_ITEMS = ["Services", "How It Works", "Industries", "Team"]

function toId(item: string) {
  return item.toLowerCase().replace(/ /g, "-")
}

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#">
          <Image
            src="/images/boost-logo.png"
            alt="Boost Performers"
            width={180}
            height={75}
            className="h-12 w-auto"
            priority
            loading="eager"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(toId(item))}
              className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
          <a
            href="/platform"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            Platform
          </a>
          <a
            href="/ai-audit"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            AI Audit
          </a>
          <a
            href="/digital-marketing"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            Marketing
          </a>
          <a
            href="/ai-solutions"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            AI Solutions
          </a>
          <a
            href="/blog"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-foreground/70 text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a href="/contact" className="bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            Book a Call
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 right-0 bottom-0 bg-background/98 backdrop-blur-xl z-40 px-6 py-10 flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(toId(item))}
              className="text-foreground text-lg font-medium cursor-pointer text-left"
            >
              {item}
            </button>
          ))}
          <a
            href="/platform"
            className="text-foreground text-lg font-medium"
          >
            Platform
          </a>
          <a
            href="/ai-audit"
            className="text-foreground text-lg font-medium"
          >
            AI Audit
          </a>
          <a
            href="/digital-marketing"
            className="text-foreground text-lg font-medium"
          >
            Marketing
          </a>
          <a
            href="/ai-solutions"
            className="text-foreground text-lg font-medium"
          >
            AI Solutions
          </a>
          <a
            href="/blog"
            className="text-foreground text-lg font-medium"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-foreground text-lg font-medium"
          >
            Contact
          </a>
          <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3.5 text-base font-semibold rounded-md mt-4 cursor-pointer inline-block">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
