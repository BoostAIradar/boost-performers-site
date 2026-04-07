"use client"

import { useSectionVisible } from "./marketing-hero"

/* ── Boost Difference (Light) ── */
export function MarketingDifference() {
  const visible = useSectionVisible("difference")
  return (
    <section style={{ background: "#fff" }}>
      <div
        id="difference"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            The Boost Difference
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-[#1B2B3A] leading-tight mb-4">
            System-Driven Marketing
          </h2>
          <p className="text-base text-[#6B7B8D] max-w-[560px] mx-auto leading-[1.7]">
            {"Strategy + Execution, not \"spray and pray.\" Every action is intentional, tracked, and tied to growth."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Left: 3 stacked items */}
          <div className="flex-1 flex flex-col gap-10">
            {[
              { title: "Strategy First", desc: "Every channel, campaign, and piece of content ties back to a clear growth plan." },
              { title: "Consistent Execution", desc: "Monthly deliverables, weekly check-ins, and real accountability. No excuses." },
              { title: "Measurable Results", desc: "Transparent reporting with KPIs that actually matter to your bottom line." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>}
                    {i === 1 && <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>}
                    {i === 2 && <><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></>}
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B2B3A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7B8D] leading-[1.7] max-w-[320px] mx-auto">{item.desc}</p>
                {i < 2 && <div className="text-primary text-base mt-3">{"-->"}</div>}
              </div>
            ))}
          </div>

          {/* Right: Growth chart */}
          <div className="flex-1 w-full">
            <div className="bg-gradient-to-br from-[#1B2B3A] to-[#0F1D2B] rounded-2xl overflow-hidden border border-white/6">
              <div className="p-6">
                <div className="flex gap-1 items-end h-[200px] px-4">
                  {[20, 28, 25, 35, 30, 42, 38, 55, 48, 65, 58, 78, 70, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(180deg, #FF6B00 0%, rgba(255,107,0,${0.3 + h / 200}) 100%)`,
                      }}
                    />
                  ))}
                </div>
                <div className="relative -mt-14 text-right pr-5 pb-4">
                  <span className="text-4xl text-primary opacity-60">{">"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Check/X icons for comparison table ── */
function CheckIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-[rgba(255,107,0,0.1)] border-[1.5px] border-primary flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2 6l3 3 5-5" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function XIcon() {
  return (
    <div className="w-7 h-7 rounded-full bg-[rgba(0,0,0,0.04)] flex items-center justify-center">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 2l6 6M8 2l-6 6" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/* ── Plans (Dark) ── */
const COMPARISON = [
  { feature: "Social Media Management", foundation: true, accelerator: true },
  { feature: "SEO On-Page Optimization", foundation: true, accelerator: true },
  { feature: "Monthly Pillar Article", foundation: "1 article", accelerator: "2 articles" },
  { feature: "Google My Business Optimization", foundation: true, accelerator: true },
  { feature: "Local Marketing", foundation: true, accelerator: "Enhanced" },
  { feature: "Review Management", foundation: true, accelerator: true },
  { feature: "Website Optimization", foundation: true, accelerator: "Enhanced" },
  { feature: "Monthly Reporting", foundation: true, accelerator: "Advanced Dashboard" },
  { feature: "SEO Off-Page (Link Building)", foundation: false, accelerator: true },
  { feature: "PPC / Google Ads Management", foundation: false, accelerator: true },
  { feature: "Newsletter Campaigns", foundation: false, accelerator: true },
  { feature: "Guest Post Outreach", foundation: false, accelerator: true },
]

function renderVal(val: boolean | string, orange: boolean) {
  if (val === true) return <CheckIcon />
  if (val === false) return <XIcon />
  return <span className={`text-[13px] font-semibold ${orange ? "text-primary" : "text-[#6B7B8D]"}`}>{val}</span>
}

export function MarketingPlans() {
  const visible = useSectionVisible("plans")
  return (
    <section style={{ background: "#1B2B3A" }}>
      <div
        id="plans"
        className={`mx-auto max-w-[1200px] px-6 lg:px-10 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold tracking-[2.5px] uppercase text-primary mb-4">
            Choose Your Plan
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold text-white leading-tight mb-3">
            Two Packages. One Growth Engine.
          </h2>
          <p className="text-base text-white/45 leading-[1.7]">
            Start where you are, scale as you grow.
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto mb-14">
          {/* Foundation */}
          <div className="bg-white rounded-2xl p-10 text-center">
            <h3 className="font-serif text-[22px] font-bold text-[#1B2B3A] mb-2">Growth Foundation</h3>
            <div className="mb-2">
              <span className="font-serif text-[40px] font-extrabold text-[#1B2B3A]">$1,500</span>
              <span className="text-base text-[#6B7B8D]">/mo</span>
            </div>
            <p className="text-sm text-[#6B7B8D]">Build your digital presence</p>
          </div>
          {/* Accelerator */}
          <div className="bg-white rounded-2xl p-10 text-center relative border-2 border-primary">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold bg-primary text-white whitespace-nowrap flex items-center gap-1.5">
              Most Popular
            </div>
            <h3 className="font-serif text-[22px] font-bold text-[#1B2B3A] mb-2">Growth Accelerator</h3>
            <div className="mb-2">
              <span className="font-serif text-[40px] font-extrabold text-[#1B2B3A]">$2,000</span>
              <span className="text-base text-[#6B7B8D]">/mo</span>
            </div>
            <p className="text-sm text-[#6B7B8D]">Scale aggressively</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl overflow-hidden">
          <div className="grid grid-cols-[2fr_1fr_1fr] px-7 py-5 border-b border-[#E8ECF0]">
            <span className="text-sm font-bold text-[#1B2B3A] italic">Feature</span>
            <span className="text-sm font-bold text-[#1B2B3A] text-center">Foundation</span>
            <span className="text-sm font-bold text-primary text-center">Accelerator</span>
          </div>
          {COMPARISON.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-[2fr_1fr_1fr] px-7 py-4 items-center ${
                i < COMPARISON.length - 1 ? "border-b border-[#F0F2F5]" : ""
              }`}
            >
              <span className="text-sm text-[#3A4A5C]">{row.feature}</span>
              <div className="flex justify-center">{renderVal(row.foundation, false)}</div>
              <div className="flex justify-center">{renderVal(row.accelerator, true)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
