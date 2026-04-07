"use client"

import { useState, useEffect } from "react"
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

/* ── Navigation ── */
export function MarketingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const items = ["Plans", "Included", "Results", "Ecosystem"]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[rgba(27,43,58,0.98)] backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.15)]"
          : "bg-[#1B2B3A]"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 flex items-center justify-between h-[72px]">
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

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase())
                el?.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-white/70 text-sm font-semibold tracking-wide hover:text-primary transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
          <a
            href="/"
            className="text-white/70 text-sm font-semibold tracking-wide hover:text-primary transition-colors"
          >
            Home
          </a>
          <a href="/contact" className="bg-primary text-white px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            Book a Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1B2B3A] border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase())
                el?.scrollIntoView({ behavior: "smooth" })
                setOpen(false)
              }}
              className="text-white text-lg font-medium cursor-pointer text-left"
            >
              {item}
            </button>
          ))}
          <a href="/" className="text-white text-lg font-medium">Home</a>
          <a href="/contact" className="bg-primary text-white px-8 py-3.5 text-base font-semibold rounded-md mt-4 cursor-pointer inline-block">
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}

/* ── Hero (Dark) ── */
export function MarketingHero() {
  return (
    <section style={{ background: "#1B2B3A", position: "relative", overflow: "hidden" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-40 pb-24 lg:pb-32">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div className="flex-1">
            <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-6">
              Digital Marketing Services
            </span>
            <h1 className="font-serif text-4xl lg:text-[52px] font-extrabold leading-[1.1] text-white tracking-tight mb-7">
              Marketing That Actually Moves the Needle.{" "}
              <span className="text-primary">Executed for You, Every Month.</span>
            </h1>
            <p className="text-[17px] leading-[1.7] text-white/45 mb-9 max-w-[480px]">
              SEO, PPC, social media, content, email -- managed by a team that gets results, not a freelancer who disappears.
            </p>
            <a href="/contact" className="bg-primary text-white px-9 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2">
              Book Your Marketing Discovery Call <span>{">"}</span>
            </a>
          </div>

          {/* Right dashboard visual */}
          <div className="flex-1 w-full">
            <div className="bg-gradient-to-br from-[#1B2B3A] to-[#0F1D2B] rounded-2xl p-6 border border-white/6">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-white/35 tracking-wider uppercase mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Marketing Performance
                <div className="flex-1" />
                <span className="text-[10px] text-white/20">1877 visitors</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "SEO Rankings", value: "179", sub: "Page 1" },
                  { label: "Social Media", value: "+9,700%", sub: "Impressions" },
                  { label: "Funnel Conversion", value: "390", sub: "Conversions" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/[0.04] rounded-xl px-3.5 py-4">
                    <div className="text-[10px] text-white/30 mb-1.5">{m.label}</div>
                    <div className="font-serif text-2xl font-extrabold text-primary">{m.value}</div>
                    <div className="text-[10px] text-white/20 mt-1">{m.sub}</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Total Hits", "Bottom Movers", "Conversions"].map((label, i) => (
                  <div key={i} className="bg-white/[0.03] rounded-xl p-3.5 h-[90px]">
                    <div className="text-[9px] text-white/20 mb-2">{label}</div>
                    <div className="flex gap-[3px] items-end h-10">
                      {[40, 60, 35, 75, 50, 65, 55, 80, 45, 70].map((h, j) => (
                        <div
                          key={j}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: `rgba(255,107,0,${i === 2 ? 0.3 + j * 0.07 : 0.15 + j * 0.05})`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="text-center pb-10">
        <div className="w-9 h-9 rounded-full border border-white/15 mx-auto flex items-center justify-center">
          <span className="text-white/30 text-xs">{"v"}</span>
        </div>
      </div>
    </section>
  )
}

/* ── Pain Points / Sound Familiar (Light) ── */
const PAIN_POINTS = [
  { icon: "clock", title: "Inconsistent Execution", desc: "Posts go up when someone remembers. SEO gets ignored. Campaigns start strong and fizzle." },
  { icon: "dollar", title: "Wasted Budget", desc: "You've thrown money at ads, agencies, and freelancers with nothing to show for it." },
  { icon: "chart", title: "No Measurable Results", desc: "You can't tell what's working because no one's tracking anything consistently." },
  { icon: "users", title: "Founder Stretched Thin", desc: "You're writing posts, managing vendors, and trying to run the business, all at once." },
  { icon: "alert", title: "No Real Strategy", desc: "Tactics without a plan. Activity without direction. Marketing without ROI." },
]

function PainIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    dollar: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    chart: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>,
    users: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    alert: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  }
  return <>{icons[type]}</>
}

export function MarketingPainPoints() {
  const visible = useSectionVisible("trap")
  return (
    <section style={{ background: "#F4F6F8" }}>
      <div
        id="trap"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            The Marketing Trap
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-[#1B2B3A] leading-tight mb-4">
            Sound Familiar?
          </h2>
          <p className="text-base text-[#6B7B8D] max-w-[560px] mx-auto leading-[1.7]">
            Most founders are stuck in a cycle of inconsistent marketing, wasted spend, and zero accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PAIN_POINTS.map((p, i) => (
            <div
              key={i}
              className={`pain-card ${i >= 3 ? "md:col-span-1" : ""}`}
              style={i === 3 ? { gridColumn: undefined } : {}}
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center mb-5">
                <PainIcon type={p.icon} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1B2B3A] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-[1.7]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
