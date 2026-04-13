"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "AI Audit", href: "/ai-audit" },
  { label: "LegalEdge", href: "/legaledge" },
  { label: "Contact Us", href: "/contact" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : ""
      }`}
      style={{
        background: "rgba(11,26,43,0.97)",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/">
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
        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact?type=audit"
            className="bg-primary text-white px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5"
          >
            Book Your AI Audit
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden px-6 pb-8 pt-4 flex flex-col gap-1"
          style={{ background: "rgba(11,26,43,0.99)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`py-3.5 text-lg font-semibold ${
                isActive(link.href) ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact?type=audit"
            className="bg-primary text-white px-8 py-3.5 text-base font-semibold rounded-md mt-4 text-center"
          >
            Book Your AI Audit
          </a>
        </div>
      )}
    </nav>
  )
}
