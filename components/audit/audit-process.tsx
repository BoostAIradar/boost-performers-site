"use client"

import { useSectionVisible } from "./audit-hero"

const STEPS = [
  {
    num: "01",
    title: "2-Hour Deep Dive Session",
    items: [
      "Review of day-to-day operations",
      "Sales follow-up and lead handling",
      "Customer communication workflows",
      "Team handoffs and internal processes",
      "Where time and attention are being wasted",
    ],
  },
  {
    num: "02",
    title: "Custom Implementation Report",
    items: [
      "Where AI Employees can remove repetitive work",
      "What should be automated first",
      "A prioritized action plan",
      "Estimated time savings and efficiency gains",
      "A visual map of how things could run better",
    ],
  },
  {
    num: "03",
    title: "1-Hour Review Call with Guy",
    items: [
      "What to implement first",
      "What can wait",
      "What will have the biggest impact",
      "Clear next steps — whether you work with us or not",
    ],
  },
]

export function ProcessSection() {
  const visible = useSectionVisible("process")

  return (
    <section className="bg-background">
      <div
        id="process"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
            How It Works
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight text-foreground">
            A Simple <span className="gradient-text">3-Step Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.015)] border border-foreground/7 rounded-[20px] p-10 transition-all duration-400 hover:border-primary/20 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden group"
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-primary-light rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <span className="font-serif gradient-text text-[40px] font-extrabold block mb-4">
                {step.num}
              </span>
              <h3 className="font-serif text-xl font-bold mb-5 text-foreground">
                {step.title}
              </h3>
              <div className="flex flex-col gap-3">
                {step.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="text-primary text-sm mt-0.5 shrink-0">
                      {"→"}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/60">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 max-w-[640px] mx-auto">
          <p className="text-[17px] leading-[1.7] text-foreground/55 italic">
            No prep work. No jargon. Just a clear look at what&apos;s slowing
            things down. This is designed so you can actually use it -- not file
            it away.
          </p>
          <a
            href="#pricing"
            className="inline-block mt-8 bg-gradient-to-br from-primary to-primary-hover text-primary-foreground px-9 py-4 text-base font-semibold rounded-lg hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all"
          >
            Book Your Audit
          </a>
        </div>
      </div>
    </section>
  )
}

const STATS = [
  { stat: "15-25+", unit: "hrs/week", desc: "of team time lost to manual work" },
  { stat: "40%", unit: "", desc: "of revenue at risk from slow follow-up" },
  { stat: "3x", unit: "", desc: "faster competitors using AI operations" },
  { stat: "90", unit: "days", desc: "to see measurable ROI from AI" },
]

export function WhyNowSection() {
  const visible = useSectionVisible("why-now")

  return (
    <section className="bg-background-alt">
      <div
        id="why-now"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
            Why Now
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight text-foreground">
            Why This Matters <span className="gradient-text">Right Now</span>
          </h2>
          <p className="text-lg text-foreground/55 mt-4 max-w-[540px] mx-auto">
            AI isn&apos;t coming -- it&apos;s already changing how businesses operate.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(255,255,255,0.015)] border border-foreground/7 rounded-[20px] p-8 text-center transition-all duration-400 hover:border-primary/25 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="mb-3">
                <span className="font-serif gradient-text text-[44px] font-extrabold leading-none">
                  {item.stat}
                </span>
                {item.unit && (
                  <span className="text-base text-primary font-semibold ml-1">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed text-foreground/55">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const REPORT_SECTIONS = [
  {
    num: "01",
    title: "Executive Summary",
    items: [
      "Overview of your business and current setup",
      "Key findings and improvement opportunities",
      "Expected impact of AI on time, cost, and execution",
    ],
  },
  {
    num: "02",
    title: "Current Business Analysis",
    items: [
      "Operations: workflows, bottlenecks, manual tasks",
      "Marketing: lead generation, content, targeting",
      "Sales: lead handling, follow-up, conversion",
      "Team Productivity: roles, task distribution, time usage",
      "Systems & Tools: current software, integrations, gaps",
    ],
  },
  {
    num: "03",
    title: "AI & Automation Opportunities",
    items: [
      "Workflow automation and task handoffs",
      "Content creation, scheduling, segmentation",
      "Lead qualification and automated follow-ups",
      "Task prioritization and internal communication",
      "System integration — connecting tools so data flows",
    ],
  },
  {
    num: "04",
    title: "Implementation Roadmap",
    items: [
      "Short-term: quick wins you can act on now",
      "Mid-term: higher-impact improvements",
      "Long-term: scalable automation",
      "Timeline, priorities, and training guidance",
    ],
  },
]

export function ReportSection() {
  const visible = useSectionVisible("report")

  return (
    <section style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)" }}>
      <div
        id="report"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            What You Get
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight text-[#0B1A2B]">
            What The Report <span className="gradient-text">Covers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {REPORT_SECTIONS.map((section, i) => (
            <div
              key={i}
              className="bg-white border border-[#0B1A2B]/6 rounded-2xl p-8 transition-all duration-350 hover:border-primary/20 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
            >
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.12)] flex items-center justify-center shrink-0">
                  <span className="font-serif gradient-text text-base font-extrabold">
                    {section.num}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#0B1A2B]">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {section.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="text-primary text-[13px] mt-0.5 shrink-0">
                      {"→"}
                    </span>
                    <span className="text-sm leading-relaxed text-[#3A4A5C]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
