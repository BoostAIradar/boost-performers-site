"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

function useSectionVisible(id: string) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [id])
  return visible
}

export { useSectionVisible }

export function AuditNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-background/97 backdrop-blur-xl border-b border-primary/8"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-[70px]">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/boost-logo.png"
            alt="Boost Performers"
            width={140}
            height={58}
            className="h-10 w-auto"
            priority
            loading="eager"
          />
        </a>
        <a
          href="#pricing"
          className="bg-gradient-to-br from-primary to-primary-hover text-primary-foreground px-6 py-2.5 text-sm font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all relative overflow-hidden"
        >
          Book Your Audit
        </a>
      </div>
    </nav>
  )
}

export function AuditHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden bg-background">
      {/* Glow orbs */}
      <div
        className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[15%] left-0 w-[400px] h-[400px] rounded-full blur-[60px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-[1.2]">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-6">
              Attention: Business Owners
            </span>
            <h1 className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.08] tracking-tight mb-6">
              Transform Your Business With a
              <br />
              <span className="gradient-text">Comprehensive AI & Automation Audit</span>
            </h1>
            <p className="text-[19px] leading-[1.75] text-foreground/65 mb-10 max-w-[540px]">
              Designed to uncover hidden opportunities for efficiency, profit
              growth, and increased business value through AI and automation.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-br from-primary to-primary-hover text-primary-foreground px-10 py-[18px] text-[17px] font-semibold rounded-lg hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all"
            >
              Book Your Audit Now
            </a>
          </div>

          {/* Right pricing card */}
          <div className="flex-[0.8] w-full max-w-[400px]">
            <div
              className="bg-gradient-to-br from-primary/8 to-primary/2 border border-primary/20 rounded-3xl px-10 py-11 text-center"
              style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
            >
              <p className="text-xs text-foreground/45 uppercase tracking-[2px] font-bold mb-2">
                Investment
              </p>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-lg text-foreground/30 line-through">$1,500</span>
                <span className="font-serif gradient-text text-[56px] font-extrabold">$497</span>
              </div>
              <p className="text-[13px] text-foreground/40 mb-6">
                Special Rate -- Limited Availability
              </p>
              <div className="w-full h-px bg-foreground/6 mb-6" />
              <div className="text-left flex flex-col gap-3 mb-7">
                {[
                  "2-Hour Deep Dive Session",
                  "Custom Implementation Report",
                  "1-Hour Strategy Review Call",
                  "Fully redeemable against implementation",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/12 flex items-center justify-center shrink-0">
                      <span className="text-primary text-[11px] font-extrabold">
                        {"✓"}
                      </span>
                    </div>
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#pricing"
                className="block w-full bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-3.5 text-[15px] font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all text-center"
              >
                {"Book Your Audit →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IS_THIS_YOU_ITEMS = [
  { icon: "clock", text: "Spends too much time on admin, follow-ups, and repetitive busy work" },
  { icon: "cog", text: "Has a team bogged down by manual processes and handoffs" },
  { icon: "cpu", text: "Knows AI could help, but isn't sure where to start" },
  { icon: "run", text: "Wants to stay ahead of competitors who are already leveraging AI" },
  { icon: "money", text: "Watches opportunities slip through the cracks despite hard work" },
  { icon: "chart", text: "Wants to grow without adding headcount" },
]

function IsThisYouIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    cog: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
    cpu: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
    run: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    money: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
  }
  return <>{icons[type]}</>
}

export function IsThisYouSection() {
  const visible = useSectionVisible("is-this-you")

  return (
    <section style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)", position: "relative" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,0,0.2), transparent)" }}
        aria-hidden="true"
      />
      <div
        id="is-this-you"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            Is This You?
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight text-[#0B1A2B]">
            {"You're a business owner who"}
            <span className="gradient-text">...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {IS_THIS_YOU_ITEMS.map((item, i) => (
            <div
              key={i}
              className="pain-card"
              style={{
                transitionDelay: `${(i + 1) * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.1)] flex items-center justify-center shrink-0">
                  <IsThisYouIcon type={item.icon} />
                </div>
                <p className="text-[15px] leading-relaxed text-[#3A4A5C] pt-2.5">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 py-7 px-10 rounded-2xl border border-[rgba(255,107,0,0.1)] max-w-[740px] mx-auto"
          style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0.02) 100%)" }}
        >
          <p className="text-lg text-primary-hover font-semibold leading-relaxed">
            This Audit is about finding practical ways to eliminate repetitive
            work so your business runs faster and more profitably -- with the
            team you already have.
          </p>
        </div>
      </div>
    </section>
  )
}
