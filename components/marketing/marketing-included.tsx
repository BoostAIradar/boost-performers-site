"use client"

import { useState } from "react"
import { useSectionVisible } from "./marketing-hero"

/* ── What's Included Accordion (Light) ── */
const INCLUDED_ITEMS = [
  { title: "Social Media Management", desc: "Custom content calendar, branded post design, platform management (Facebook, Instagram, LinkedIn), community engagement, hashtag strategy, and performance tracking." },
  { title: "SEO Optimization", desc: "Keyword research, on-page optimization, meta tags, schema markup, internal linking strategy, and monthly SEO health audits." },
  { title: "Pillar Articles & Content", desc: "Long-form, SEO-optimized blog articles (1,500+ words) that establish topical authority and drive organic traffic over time." },
  { title: "Google My Business & Local Marketing", desc: "GMB profile optimization, local citation building, geo-targeted content, and local directory management to dominate local search." },
  { title: "Review Management", desc: "Automated review request campaigns, review monitoring, response templates, and reputation management strategy." },
  { title: "Website Optimization", desc: "Speed optimization, mobile responsiveness audits, UX improvements, conversion rate optimization, and landing page enhancements." },
  { title: "Reporting & Analytics", desc: "Monthly performance reports with KPI tracking, traffic analysis, conversion metrics, and strategic recommendations." },
  { title: "Newsletter Campaigns (Accelerator)", desc: "Email list segmentation, branded newsletter design, campaign automation, A/B testing, and subscriber growth strategies." },
]

export function MarketingIncluded() {
  const visible = useSectionVisible("included")
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section style={{ background: "#F4F6F8" }}>
      <div
        id="included"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            Full Breakdown
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-[#1B2B3A] leading-tight">
            {"What's Included"}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Accordion */}
          <div className="flex-[1_1_55%] flex flex-col gap-2">
            {INCLUDED_ITEMS.map((item, i) => {
              const isOpen = openIdx === i
              return (
                <button
                  key={i}
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className={`w-full text-left rounded-xl px-7 py-6 cursor-pointer transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#FFF8F3] border-[rgba(255,107,0,0.2)]"
                      : "bg-[#F8F9FB] border-transparent hover:border-[rgba(255,107,0,0.15)]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><rect x="2" y="2" width="20" height="20" rx="5" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></>}
                        {i === 1 && <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}
                        {i === 2 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>}
                        {i === 3 && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></>}
                        {i === 4 && <><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>}
                        {i === 5 && <><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>}
                        {i === 6 && <><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></>}
                        {i === 7 && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                      </svg>
                    </div>
                    <h3 className="font-serif text-[17px] font-bold text-[#1B2B3A] flex-1">{item.title}</h3>
                    <span
                      className="text-[#6B7B8D] text-lg transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      {"^"}
                    </span>
                  </div>
                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <p className="text-sm text-[#6B7B8D] leading-[1.7] pt-3.5 pl-[52px]">{item.desc}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right dashboard visuals */}
          <div className="flex-[1_1_40%] flex flex-col gap-4 lg:sticky lg:top-[100px]">
            <div className="bg-gradient-to-br from-[#1B2B3A] to-[#0F1D2B] rounded-2xl p-6 border border-white/6 h-[200px]">
              <div className="text-[10px] text-white/30 tracking-wider uppercase mb-3">Social Performance</div>
              <div className="flex gap-[3px] items-end h-[100px]">
                {[30, 45, 35, 60, 40, 55, 70, 50, 80, 65, 75, 90].map((h, j) => (
                  <div
                    key={j}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h}%`, background: `rgba(255,107,0,${0.2 + j * 0.06})` }}
                  />
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1B2B3A] to-[#0F1D2B] rounded-2xl p-6 border border-white/6 h-[200px]">
              <div className="text-[10px] text-white/30 tracking-wider uppercase mb-2">Search Engine Ranking</div>
              <div className="relative h-[120px]">
                <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradMkt" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#FF6B00" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#FF6B00" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points="0,100 30,90 60,85 90,70 120,65 150,50 180,45 210,30 240,25 270,15 300,5"
                    fill="none"
                    stroke="url(#lineGradMkt)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Monthly Activity Table (Light) ── */
const MONTHLY_ACTIVITY = [
  { activity: "Social Media Posts", frequency: "12-16/month" },
  { activity: "SEO Health Audit", frequency: "Monthly" },
  { activity: "Pillar Blog Article", frequency: "1/month" },
  { activity: "GMB Updates & Posts", frequency: "Weekly" },
  { activity: "Review Request Campaigns", frequency: "Ongoing" },
  { activity: "Website Speed & UX Check", frequency: "Monthly" },
  { activity: "Performance Report", frequency: "Monthly" },
  { activity: "Strategy Call", frequency: "Monthly" },
]

export function MarketingActivity() {
  const visible = useSectionVisible("activity")
  return (
    <section style={{ background: "#F4F6F8" }}>
      <div
        id="activity"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 pb-20 lg:pb-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            Monthly Activity
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-[#1B2B3A] leading-tight">
            What Gets Done Every Month
          </h2>
        </div>

        <div className="max-w-[700px] mx-auto bg-white rounded-2xl overflow-hidden border border-[#E8ECF0]">
          <div className="grid grid-cols-[1fr_auto] px-8 py-[18px] border-b border-[#E8ECF0]">
            <span className="text-sm font-bold text-[#1B2B3A]">Activity</span>
            <span className="text-sm font-bold text-[#1B2B3A]">Frequency</span>
          </div>
          {MONTHLY_ACTIVITY.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto] px-8 py-4 ${
                i < MONTHLY_ACTIVITY.length - 1 ? "border-b border-[#F0F2F5]" : ""
              }`}
            >
              <span className="text-sm text-[#3A4A5C]">{row.activity}</span>
              <span className="text-sm font-semibold text-primary">{row.frequency}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
