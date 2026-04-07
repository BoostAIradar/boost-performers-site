"use client"

import Image from "next/image"
import { useSectionVisible } from "./audit-hero"

const PERFECT_FOR = [
  { title: "Service-Based Businesses", desc: "Looking to scale operations without scaling headcount" },
  { title: "Busy Teams", desc: "Growing but feeling stretched thin across too many tasks" },
  { title: "Organizations", desc: "Seeking to grow revenue without adding overhead" },
  { title: "Leaders", desc: "Who want to leverage AI for measurable business growth" },
]

export function PerfectForSection() {
  const visible = useSectionVisible("perfect-for")

  return (
    <section className="bg-background">
      <div
        id="perfect-for"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
            Perfect For
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight text-foreground">
            Who This Is <span className="gradient-text">Built For</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
          {PERFECT_FOR.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.015)] border border-foreground/7 rounded-[20px] p-9 text-center transition-all duration-400 hover:border-primary/25 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/12 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></>}
                  {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                  {i === 2 && <><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></>}
                  {i === 3 && <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}
                </svg>
              </div>
              <h4 className="font-serif text-base font-bold mb-2 text-foreground">
                {item.title}
              </h4>
              <p className="text-[13px] leading-relaxed text-foreground/55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PRICING_ITEMS = [
  "2-Hour Deep Dive Strategy Session",
  "Complete analysis of your current systems",
  "Review of sales, marketing, customer service, and operations",
  "Custom Implementation Roadmap",
  "Step-by-step automation recommendations",
  "1-Hour Strategy Review Call with Guy",
  "Clear action steps for implementation",
]

export function PricingSection() {
  const visible = useSectionVisible("pricing")

  return (
    <section style={{ background: "linear-gradient(180deg, #0B1A2B 0%, #0F2035 100%)" }}>
      <div
        id="pricing"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-[720px] mx-auto">
          <div
            className="bg-gradient-to-br from-primary/8 to-primary/2 border border-primary/20 rounded-[28px] px-10 sm:px-[52px] py-14 relative overflow-hidden"
            style={{ animation: "pulse-glow 5s ease-in-out infinite" }}
          >
            <div
              className="absolute -top-[60px] -right-[60px] w-[200px] h-[200px] rounded-full blur-[40px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,107,0,0.08), transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="text-center relative">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-6">
                Investment
              </span>
              <h2 className="font-serif text-[32px] font-bold mb-2 text-foreground">
                AI & Automation Audit
              </h2>

              <div className="flex items-baseline justify-center gap-3.5 mt-6 mb-2">
                <span className="text-xl text-foreground/30 line-through">$1,500</span>
                <span className="font-serif gradient-text text-[64px] font-extrabold">$497</span>
              </div>
              <p className="text-[13px] text-foreground/40 mb-9">
                Special Rate -- Limited Availability
              </p>

              <div className="text-left max-w-[440px] mx-auto flex flex-col gap-3.5 mb-9">
                {PRICING_ITEMS.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[22px] h-[22px] rounded-full bg-primary/12 flex items-center justify-center shrink-0">
                      <span className="text-primary text-[11px] font-extrabold">{"✓"}</span>
                    </div>
                    <span className="text-[15px] text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary/6 border border-primary/12 rounded-xl px-5 py-4 mb-8">
                <p className="text-sm text-primary font-semibold">
                  BONUS: Your audit fee is fully redeemable against any
                  implementation project when you choose us as your AI
                  integration partner.
                </p>
              </div>

              <a
                href="/contact"
                className="inline-block w-full max-w-[360px] bg-gradient-to-br from-primary to-primary-hover text-primary-foreground py-[18px] text-[17px] font-semibold rounded-lg hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all text-center"
              >
                {"Book Your Audit Call →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MeetGuySection() {
  const visible = useSectionVisible("founder")

  return (
    <section style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)" }}>
      <div
        id="founder"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center max-w-[960px] mx-auto">
          <div className="shrink-0">
            <div className="w-[260px] h-[320px] lg:w-[300px] lg:h-[380px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-[3px] border-primary/20">
              <Image
                src="/images/guy-balan.jpg"
                alt="Guy Balan, Founder & CEO"
                width={512}
                height={640}
                quality={90}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-4">
              Meet the Founder & CEO
            </span>
            <h2 className="font-serif text-[36px] font-bold mb-5 text-[#0B1A2B]">
              {"Hey, I'm "}
              <span className="gradient-text">Guy!</span>
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-[1.8] text-[#3A4A5C]">
                I built Boost Performers to help business owners stop wasting
                time on repetitive work that pulls them away from customers,
                revenue, and growth.
              </p>
              <p className="text-base leading-[1.8] text-[#3A4A5C]">
                Through my experience in Private Equity, M&A, and
                entrepreneurship, I&apos;ve spent years seeing what drives business
                performance -- and what holds it back. Across industries, the
                pattern is consistent: manual work, missed follow-ups, and teams
                tied up with tasks that don&apos;t add value.
              </p>
              <p className="text-base leading-[1.8] text-[#3A4A5C]">
                After working with AI consultants and vendors, I saw the same
                issue. Most focused on tools and &quot;innovation&quot; instead of solving
                real, day-to-day business problems. So I took a different
                approach -- applying AI where it removes friction. The goal
                isn&apos;t more technology. It&apos;s fewer bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
