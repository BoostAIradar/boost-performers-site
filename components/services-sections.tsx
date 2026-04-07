"use client"

import { useState } from "react"
import { Tag, useSectionVisible } from "./hero-sections"

const AI_EMPLOYEES = [
  {
    name: "Voice Agent",
    desc: "Never miss a call again. Answers every inbound call, captures details, books appointments, and follows up. 24/7.",
  },
  {
    name: "Chat Agent",
    desc: "Turns website visitors into booked appointments. Answers questions, qualifies leads, and hands off warm prospects to your team — instantly.",
  },
  {
    name: "Executive Assistant",
    desc: "Handles your inbox, calendar, follow-ups, and admin. Your team gets back 8-10 hours a week to focus on billable work.",
  },
  {
    name: "Sales Acquisition Agent",
    desc: "Finds prospects, scores leads, and fills your pipeline without adding headcount. Your calendar stays full, your team stays focused.",
  },
  {
    name: "Knowledge Base",
    desc: "Your team stops asking the same questions. Policies, processes, pricing — answers are instant and always up to date.",
  },
  {
    name: "Operations Workflow",
    desc: "Tasks get assigned, deadlines get tracked, handoffs happen automatically. No more things falling through the cracks.",
  },
]

const AUDIT_STEPS = [
  {
    step: "01",
    title: "2-Hour Deep Dive Session",
    desc: "We review your operations, sales follow-up, customer communication, team workflows, and where time is being wasted",
  },
  {
    step: "02",
    title: "Custom Implementation Report",
    desc: "Prioritized action plan, estimated time savings, and a visual map of how your business could run better",
  },
  {
    step: "03",
    title: "1-Hour Strategy Review Call",
    desc: "Clear next steps on what to implement first and what will have the biggest impact",
  },
]

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-white border border-[#0B1A2B]/8 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}

export function ServicesSection() {
  const visible = useSectionVisible("services")

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F5F6F8 0%, #FFFFFF 100%)",
      }}
    >
      <div
        id="services"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary">
            What We Do
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mt-4 mb-3 text-[#0B1A2B]">
            The Boost Ecosystem
          </h2>
          <p className="text-[#0B1A2B]/55 text-[17px] max-w-[600px] mx-auto">
            AI employees and marketing systems that work together — so your
            business grows without adding headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* SERVICE 1: AI Solutions */}
          <GlassCard>
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary">
                Automation
              </span>
            </div>
            <h3 className="font-serif text-2xl lg:text-[28px] font-bold mb-3 text-[#0B1A2B]">
              AI Employees.{" "}
              <span className="gradient-text">Your New Growth Team.</span>
            </h3>
            <p className="text-base leading-relaxed text-[#0B1A2B]/55 mb-7 max-w-[700px]">
              From answering calls and handling chats to creating content and
              managing operations — our AI employees take the repetitive work off
              your team&apos;s plate so they can focus on what moves the needle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AI_EMPLOYEES.map((ai, i) => (
                <div
                  key={i}
                  className="px-5 py-4 bg-primary/[0.06] rounded-xl border border-primary/[0.12]"
                >
                  <p className="font-bold text-[15px] mb-2 text-primary">
                    {ai.name}
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#0B1A2B]/60">
                    {ai.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href="/ai-solutions" className="border-2 border-primary text-primary px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
                Explore AI Solutions
              </a>
            </div>
          </GlassCard>

          {/* SERVICE 2: Digital Marketing */}
          <GlassCard>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary">
              Growth
            </span>
            <h3 className="font-serif text-2xl lg:text-[28px] font-bold mt-5 mb-3 text-[#0B1A2B]">
              Marketing That Drives{" "}
              <span className="gradient-text">Leads, Not Just Likes.</span>
            </h3>
            <p className="text-base leading-relaxed text-[#0B1A2B]/55 mb-5 max-w-[700px]">
              SEO, paid ads, funnels, and content strategies built for measurable
              ROI. We don&apos;t just generate traffic — we build systems that
              bring qualified leads to your door and convert them.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-sm text-[#0B1A2B]/50 px-4 py-2.5 bg-[#0B1A2B]/[0.03] rounded-lg">
                Growth Foundation — SEO, Local Search, Content
              </span>
              <span className="text-sm text-[#0B1A2B]/50 px-4 py-2.5 bg-[#0B1A2B]/[0.03] rounded-lg">
                Growth Accelerator — Paid Ads, Funnels, Retargeting
              </span>
            </div>
            <a href="/digital-marketing" className="border-2 border-primary text-primary px-6 py-2.5 text-sm font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
              Explore Marketing
            </a>
          </GlassCard>

          {/* SERVICE 3: AI Audit */}
          <div
            className="bg-gradient-to-br from-primary/10 to-primary/[0.05] border border-primary/20 rounded-[20px] p-8 sm:p-12"
            style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <div className="flex-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary">
                  Start Here
                </span>
                <h3 className="font-serif text-2xl lg:text-[32px] font-bold mt-4 mb-4 text-[#0B1A2B] text-balance">
                  Not Sure Where to Start?
                  <br />
                  <span className="gradient-text">Start Here.</span>
                </h3>
                <p className="text-base leading-relaxed text-[#0B1A2B]/55 mb-3">
                  The Boost AI Audit — a hands-on deep dive into your business
                  operations to show you exactly where AI fits and what to fix
                  first.
                </p>

                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-sm text-[#0B1A2B]/45 line-through">
                    $1,500
                  </span>
                  <span className="font-serif gradient-text text-5xl font-extrabold">
                    $497
                  </span>
                  <span className="text-sm text-[#0B1A2B]/45">
                    Special Rate
                  </span>
                </div>
                <p className="text-[13px] text-[#0B1A2B]/45 mb-7">
                  Your audit fee is fully redeemable against any implementation
                  project.
                </p>
                <a href="/ai-audit" className="bg-primary text-primary-foreground px-10 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] cursor-pointer inline-block">
                  {"Get Your AI Audit →"}
                </a>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                {AUDIT_STEPS.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="font-serif gradient-text text-2xl font-extrabold shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-[15px] font-bold mb-1 text-[#0B1A2B]">
                        {item.title}
                      </h4>
                      <p className="text-[13px] leading-relaxed text-[#0B1A2B]/55">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const PHASES = [
  {
    title: "AI Audit",
    description:
      "We start by looking at how your business actually runs. Operations, team workflows, financials, bottlenecks. Before we deploy anything, we make sure the foundation can support it.",
  },
  {
    title: "Installation",
    description:
      "AI employees go live. Marketing systems launch. Outreach starts filling the pipeline. Your team gets playbooks so nothing depends on guesswork.",
  },
  {
    title: "Optimization",
    description:
      "We refine what's working, scale what's converting, and prepare your business for its next stage of growth.",
  },
]

export function HowItWorksSection() {
  const [activePhase, setActivePhase] = useState(0)
  const visible = useSectionVisible("how-it-works")

  return (
    <section className="bg-background">
      <div
        id="how-it-works"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3 text-foreground">
            How We Implement
          </h2>
          <p className="text-muted-foreground text-[17px]">
            Clear systems. Accountable results. More time. More profit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 flex-wrap">
          {PHASES.map((phase, i) => (
            <button
              key={i}
              className={`px-7 py-4 rounded-lg font-semibold text-[15px] border transition-all cursor-pointer ${
                activePhase === i
                  ? "bg-primary/15 border-primary text-primary"
                  : "bg-transparent border-border text-muted-foreground hover:border-foreground/20"
              }`}
              onClick={() => setActivePhase(i)}
            >
              Phase {i + 1}: {phase.title}
            </button>
          ))}
        </div>

        <div className="max-w-[700px] mx-auto p-8 lg:p-10 bg-muted rounded-2xl border border-primary/15 min-h-[200px]">
          <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
            <span className="gradient-text">Phase {activePhase + 1}:</span>{" "}
            {PHASES[activePhase].title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            {PHASES[activePhase].description}
          </p>
        </div>


      </div>
    </section>
  )
}
