"use client"

import Image from "next/image"
import Link from "next/link"
import { Tag, useSectionVisible } from "./hero-sections"

const TEAM = [
  {
    initials: "GB",
    name: "Guy Balan",
    role: "Founder & CEO",
    image: "/images/guy-balan.jpg",
    bio: "Former Private Equity CEO who's been inside the machine — running companies, scaling operations, and engineering exits. Guy built Boost Performers to help business owners stop wasting time on repetitive work that pulls them away from customers, revenue, and growth. His approach: apply AI where it removes friction. The goal isn't more technology — it's fewer bottlenecks.",
  },
  {
    initials: "CP",
    name: "Carl-Frederic Paret",
    role: "Partner",
    bio: "Strategic leader driving growth and operational excellence. Brings deep expertise in business development and execution.",
  },
]

export function TeamSection() {
  const visible = useSectionVisible("team")

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0F2035 0%, #0B1A2B 100%)",
      }}
    >
      <div
        id="team"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-foreground">
            The People Behind Boost
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-secondary to-card border border-border rounded-2xl p-8 lg:p-12 text-center transition-all duration-300 hover:border-border-accent hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
            >
              {member.image ? (
                <div className="w-full aspect-[4/5] rounded-xl mx-auto mb-8 overflow-hidden border-[3px] border-primary/30 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={512}
                    height={640}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[4/5] rounded-xl bg-gradient-to-br from-primary to-primary-light mx-auto mb-8 flex items-center justify-center">
                  <span className="font-serif text-6xl lg:text-7xl font-extrabold text-foreground">
                    {member.initials}
                  </span>
                </div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-1 text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-semibold mb-4">
                {member.role}
              </p>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.08), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-16 lg:py-24 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold mb-4 text-[#0B1A2B] text-balance">
          Your next 90 days could{" "}
          <span className="gradient-text">change everything.</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a href="/contact" className="bg-primary text-primary-foreground px-10 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] cursor-pointer inline-block">
            {"Book a Discovery Call — 15 Mins. Zero Fluff."}
          </a>
          <a href="/ai-audit" className="border-2 border-primary text-primary px-10 py-3.5 text-base font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            {"Get Your AI Audit — $497"}
          </a>
        </div>
        <p className="mt-5">
          <a
            href="/contact"
            className="text-primary text-sm font-semibold underline hover:text-primary-light transition-colors"
          >
            Download Freedom Engine Overview
          </a>
        </p>
      </div>
    </section>
  )
}

const FOOTER_SOLUTIONS = [
  "AI Solutions",
  "Digital Marketing",
  "Cold Outreach",
  "Executive VA",
]
const FOOTER_INDUSTRIES = [
  "Law Firms",
  "Accounting Firms",
  "Insurance",
  "Roofing",
  "Construction",
  "Home Services",
]
const FOOTER_COMPANY = [
  "Home",
  "Our Brand",
  "Solutions Hub",
  "Blog",
  "Contact Us",
  "Book a Call",
]

export function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-foreground/[0.06] px-6 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            <Image
              src="/images/boost-logo.png"
              alt="Boost Performers"
              width={100}
              height={42}
              className="h-7 w-auto"
            />
            <span className="text-foreground text-xs font-semibold tracking-[0.15em] uppercase">
              Performers
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[280px]">
            More Profit. Greater Value. More Freedom.
          </p>
          <p className="text-[13px] text-muted-foreground">
            info@boostperformers.com
          </p>
          <p className="text-[13px] text-muted-foreground">
            Contact via website
          </p>
          <p className="text-[13px] text-muted-foreground">
            Global, Remote First
          </p>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-wider">
            Solutions
          </h4>
          {FOOTER_SOLUTIONS.map((item) => (
            <p
              key={item}
              className="text-sm text-muted-foreground mb-2.5 cursor-pointer hover:text-foreground transition-colors"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-wider">
            Industries
          </h4>
          {FOOTER_INDUSTRIES.map((item) => (
            <p
              key={item}
              className="text-sm text-muted-foreground mb-2.5 cursor-pointer hover:text-foreground transition-colors"
            >
              {item}
            </p>
          ))}
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-wider">
            Company
          </h4>
          {FOOTER_COMPANY.map((item) => (
            <p
              key={item}
              className="text-sm text-muted-foreground mb-2.5 cursor-pointer hover:text-foreground transition-colors"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto pt-6 border-t border-foreground/[0.06] flex flex-col sm:flex-row justify-between gap-3">
        <p className="text-xs text-foreground/30">
          &copy; 2026 Florida, Miami - All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="text-xs text-foreground/30 cursor-pointer hover:text-foreground/50 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-xs text-foreground/30 cursor-pointer hover:text-foreground/50 transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
