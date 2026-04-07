"use client"

import Image from "next/image"
import { useSectionVisible } from "./marketing-hero"

/* ── Case Study (Light) ── */
const CASE_STATS = [
  { value: "+142%", label: "Organic Traffic", sub: "in 6 months" },
  { value: "+68%", label: "Lead Volume", sub: "qualified leads" },
  { value: "12 keywords", label: "Page 1 Rankings", sub: "from 0" },
  { value: "4.8 avg", label: "Google Reviews", sub: "87 new reviews" },
]

export function MarketingCaseStudy() {
  const visible = useSectionVisible("results")
  return (
    <section style={{ background: "#fff" }}>
      <div
        id="results"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-14 items-center mb-14">
          <div className="flex-1">
            <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
              Real Results
            </span>
            <h2 className="font-serif text-3xl lg:text-[40px] font-extrabold text-[#1B2B3A] leading-tight mb-4">
              Case Study: Professional Services Firm
            </h2>
            <p className="text-base text-[#6B7B8D] leading-[1.7]">
              A mid-size accounting firm went from zero digital presence to dominating local search in under 6 months.
            </p>
          </div>
          <div className="flex-[0_1_45%] w-full">
            <div className="bg-gradient-to-br from-[#1B2B3A] to-[#0F1D2B] rounded-2xl p-4 border border-white/6">
              <div className="flex items-center gap-2 text-[10px] text-white/30 tracking-wider mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Marketing Performance
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { l: "SEO", v: "179" },
                  { l: "Social", v: "9,700%" },
                  { l: "Funnel", v: "390" },
                ].map((m, i) => (
                  <div key={i} className="bg-white/[0.04] rounded-lg px-2 py-2.5 text-center">
                    <div className="text-[9px] text-white/30">{m.l}</div>
                    <div className="font-serif text-lg font-extrabold text-primary">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CASE_STATS.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center border border-[#E8ECF0] transition-all duration-350 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center mx-auto mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>}
                  {i === 1 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>}
                  {i === 2 && <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}
                  {i === 3 && <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>}
                </svg>
              </div>
              <div className="font-serif text-[32px] font-extrabold text-[#1B2B3A] mb-1">{s.value}</div>
              <p className="text-sm font-semibold text-[#3A4A5C] mb-0.5">{s.label}</p>
              <p className="text-xs text-[#9BA8B5]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Ecosystem (Light Gray) ── */
const ECOSYSTEM = [
  { title: "CRM + AI", desc: "Automate lead capture, follow-ups, and customer service with AI Employees and a CRM that works 24/7." },
  { title: "Marketing", desc: "SEO, paid ads, social media, content, and email -- managed by a team that gets results, not a freelancer who disappears." },
  { title: "Cold Outreach", desc: "Multi-channel outbound systems that fill your pipeline with qualified leads on autopilot." },
]

export function MarketingEcosystem() {
  const visible = useSectionVisible("ecosystem")
  return (
    <section style={{ background: "#F4F6F8" }}>
      <div
        id="ecosystem"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            Full Ecosystem
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-[#1B2B3A] leading-tight">
            Amplify Your Marketing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ECOSYSTEM.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-9 border border-[#E8ECF0] transition-all duration-350 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 0 && <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/></>}
                  {i === 1 && <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>}
                  {i === 2 && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1B2B3A] mb-2.5">{item.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-[1.7] mb-5">{item.desc}</p>
              <a href="/contact" className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 hover:underline">
                Learn More <span>{">"}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Final CTA (Dark) ── */
export function MarketingCTA() {
  const visible = useSectionVisible("cta")
  return (
    <section style={{ background: "#1B2B3A" }}>
      <div
        id="cta"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
          Ready to Grow?
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-white leading-tight mb-5">
          Stop Guessing. Start Growing.
        </h2>
        <p className="text-[17px] text-white/45 max-w-[520px] mx-auto mb-9 leading-[1.7]">
          Get a clear marketing strategy, consistent execution, and measurable results. Starting this month.
        </p>
        <a href="/contact" className="bg-primary text-white px-10 py-[18px] text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-flex items-center gap-2">
          Book Your Marketing Discovery Call <span>{">"}</span>
        </a>
      </div>
    </section>
  )
}

/* ── Footer (Dark) ── */
export function MarketingFooter() {
  const COLUMNS = [
    { title: "Company", items: ["Home", "Our Brand", "Solutions Hub", "Blog", "Contact Us"] },
    { title: "Solutions", items: ["Business Coaching", "AI Solutions", "Digital Marketing", "Cold Outreach"] },
    { title: "AI Solutions", items: ["Voice Agent", "Chat Agent", "Executive Assistant"] },
    { title: "Digital Marketing", items: ["Growth Foundation", "Growth Accelerator"] },
    { title: "Industries", items: ["Law Firms", "Accounting Firms", "Business Services"] },
  ]

  return (
    <footer style={{ background: "#15202D" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-3">
              <Image
                src="/images/boost-logo.png"
                alt="Boost Performers"
                width={100}
                height={42}
                className="h-7 w-auto"
              />
            </a>
            <p className="text-[13px] text-white/40 leading-[1.7] mt-3">
              More Profit. Greater Value. More Freedom.
            </p>
          </div>
          {COLUMNS.map((col, i) => (
            <div key={i}>
              <h4 className="text-[13px] font-bold text-white mb-4">{col.title}</h4>
              {col.items.map((item, j) => (
                <a key={j} href="#" className="block text-[13px] text-white/40 mb-2.5 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-white/6 flex flex-col sm:flex-row justify-between gap-3">
          <span className="text-xs text-white/40">&copy; 2026 Florida, Miami - All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-xs text-white/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-xs text-white/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
