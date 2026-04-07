"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function ContactNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "AI Audit", href: "/ai-audit" },
    { label: "Marketing", href: "/digital-marketing" },
    { label: "AI Solutions", href: "/ai-solutions" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(11,26,43,0.98)] backdrop-blur-lg shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
          : "bg-background"
      }`}
    >
      <div className="mx-auto max-w-[1200px] flex items-center justify-between px-6 lg:px-10 h-[72px]">
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

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.label === "Contact"
                  ? "text-foreground"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-primary text-white px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-8 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground text-lg font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="bg-primary text-white px-8 py-3.5 text-base font-semibold rounded-md mt-4 text-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}

export function ContactHero() {
  return (
    <section className="bg-background relative overflow-hidden" style={{ paddingTop: 72 }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
      >
        <div className="grid grid-cols-6 grid-rows-2 gap-1 h-full p-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="rounded-md"
              style={{
                background: `hsl(${200 + i * 8}, ${25 + i * 2}%, ${30 + (i % 3) * 8}%)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-10 py-16 lg:py-20 max-w-[800px] mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-foreground leading-[1.1] mb-5">
          <span className="gradient-text">{"Let's Talk."}</span>{" "}
          No Pitch. Just Clarity.
        </h1>
        <p className="text-lg text-foreground/45 mb-7 leading-relaxed">
          In 15 minutes, we{"'"}ll identify your biggest growth constraint.
        </p>
        <div className="flex gap-7 justify-center flex-wrap">
          {[
            { icon: "clock", text: "15-Minute Call" },
            { icon: "shield", text: "Zero Obligation" },
            { icon: "chat", text: "Zero Fluff" },
          ].map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 text-sm text-foreground/45"
            >
              <TrustIcon type={badge.icon} />
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    shield: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    chat: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
  }
  return <>{icons[type]}</>
}
