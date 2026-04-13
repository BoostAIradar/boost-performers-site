"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

/* ── DATA ── */
const agentBuckets = [
  {
    bucket: "Intake & Deadlines",
    tagline: "LEX reads your documents and extracts what matters.",
    agents: [
      { name: "LEX PDF Intelligence", headline: "13 CMO deadlines in 8 seconds.", desc: "Upload a CMO. LEX extracts every deadline, maps them to the timeline, flags critical windows under Florida statute. You confirm. Alerts cascade.", stat: "30–45 min → 8 seconds" },
      { name: "LEX Batch ATP", headline: "Full day to 20 minutes.", desc: "LEX reads every ATP file at once. Extracts key data, generates 5 action items per matter, logs everything. Your paralegal reviews summaries — not raw files.", stat: "Full day → 20 minutes" },
      { name: "LEX Morning Briefing", headline: "Your day prepared before you arrive.", desc: "Every morning at 8am, LEX reads all active matters and scores every deadline. Critical, Active, Queue — organized before you sit down.", stat: "1 hour → 5 minutes" },
    ],
  },
  {
    bucket: "Work Execution",
    tagline: "LEX prepares the work. You approve it.",
    agents: [
      { name: "LEX Document Engine", headline: "§720.3085 cited correctly. Every time.", desc: "LEX picks the right statute by entity type. Calculates per diem under §55.03. Pre-fills parties. Drafts the full demand letter. You review and send.", stat: "Scratch → 90-second draft" },
      { name: "LEX Firm Memory", headline: "After 30 days, LEX drafts like you.", desc: "Every edit you make, LEX learns from. After 30 days it knows your voice. After 90 — you approve without editing.", stat: "Day 30: your voice. Day 90: approve as-is." },
    ],
  },
  {
    bucket: "Intelligence Layer",
    tagline: "Ask anything about any matter. LEX already knows.",
    featured: true,
    agents: [
      { name: "LEX Matter Intelligence", headline: "Full case context. Instant answer.", desc: "Every party, deadline, document, and Florida statute for that matter — already loaded. Ask in plain language. Get a complete answer.", stat: "Instant answer · full case context", featured: true },
    ],
  },
]

const leaks = {
  money: {
    title: "Money Leaking",
    items: [
      "Calls that never get logged — billable time gone",
      "Client follow-ups buried in email for days",
      "Billing activity that doesn't make it into Clio",
      "Work gets done — just never captured",
    ],
    stat: "$18K–$36K",
    statLabel: "in recoverable billing / year",
  },
  time: {
    title: "Time Leaking",
    items: [
      "ATP batches — a full day, every batch",
      "CMO deadlines — 30–45 min manual entry per order",
      "Morning triage — 1 hour before real work starts",
      "HOA status reports — 3 hours every month",
      "Demand letters — drafted from scratch, every time",
    ],
    stat: "40+ hrs",
    statLabel: "of staff time lost / month",
  },
}

const problems = [
  "ATP batches taking a full day — processed one by one",
  "CMO deadlines written down manually — tracked in someone's memory",
  "Demand letters drafted from scratch — same structure every time",
  "$18K–$36K in billable time disappearing into unlogged calls",
  "HOA status reports taking 3 hours — assembled from matter notes",
  "Deadlines with no safety net — one missed filing from malpractice",
]

const fixes = [
  "ATP batch: Full day → 20 minutes",
  "CMO deadlines: Manual entry → 8 seconds",
  "Morning triage: 1 hour → 5 minutes",
  "HOA status report: 3 hours → 12 minutes",
  "Demand letters: Scratch → LEX drafts, you approve",
]

const faqs = [
  { q: "Is this a Clio replacement?", a: "No. Clio is your filing cabinet. LEX is your brain. LEX works alongside Clio — it reads your matters, prepares work, and feeds Clio automatically when actions are confirmed." },
  { q: "What if LEX gets something wrong?", a: "Nothing sends, files, or logs without your approval. Human always in the loop — built into the architecture, not a setting you can turn off. LEX prepares. You make the call." },
  { q: "Does LEX know Florida HOA foreclosure law?", a: "Yes. LEX knows what an ATP is, what a CMO is, what a DLE is. It knows the 46-day Florida lien window. It knows §720.3085 for HOA and §718.116 for condo. Built from how HOA foreclosure actually works in Florida." },
  { q: "How long does it take to set up?", a: "Most firms are live within 48 hours of the audit call. We connect LEX to your existing Clio environment, map your most common matter type, and run the first batch together." },
  { q: "What is the trial?", a: "30 days. Your real matters. Your real data. LEX running on your actual practice. You only decide after you've seen LEX working in your firm." },
]

/* ── Intersection Observer Hook ── */
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0")
          el.classList.remove("opacity-0", "translate-y-6")
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function FadeUp({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useFadeUp()
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 ease-out ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

/* ── Hero Section ── */
export function LegalEdgeHeroSection() {
  const stats = [
    { v: "$36K", l: "Recoverable billing found" },
    { v: "40hrs", l: "Recovered per month" },
    { v: "8sec", l: "CMO deadline extraction" },
    { v: "20min", l: "Batch ATP processing" },
  ]

  const briefingCritical = [
    { t: "HOA v. Martinez — 46-day window closes", m: "Today" },
    { t: "Batch ATP — 20 files ready", m: "Karen" },
  ]

  const briefingActive = [
    { t: "CMO Upload — Gutierrez", m: "13 deadlines", tag: true },
    { t: "DLE letter — §720.3085 cited", m: "Draft ready", tag: true },
  ]

  const briefingQueue = [
    { t: "Eviction — Rivera 3-day notice", m: "Next week" },
    { t: "Ortega — closing docs needed", m: "Friday" },
  ]

  return (
    <section className="relative py-24 lg:py-28" style={{ background: "linear-gradient(175deg, #0B1A2B 0%, #0F2234 60%, #132B42 100%)" }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-3.5 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="font-mono text-[11px] font-bold tracking-[1.5px] text-primary uppercase">Live · Florida Real Estate Litigation</span>
          </div>

          <h1 className="font-serif text-[28px] md:text-[38px] lg:text-[46px] font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Every matter.<br />
            <span className="text-primary">LEX reads, drafts, flags, and organizes.</span><br />
            You make decisions and practice law.
          </h1>

          <p className="text-[17px] text-white/60 leading-relaxed max-w-[500px] mb-10">
            LegalEdge is the AI operating system for Florida real estate litigation firms. Powered by LEX — the intelligence layer that runs your workflow so nothing slips, nothing is missed, and nothing is left unbilled.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-3">
          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
          >
            Book Your AI Audit <span>→</span>
          </Link>
            <Link
              href="/contact"
              className="border border-white/15 text-white/60 px-8 py-4 text-[15px] font-semibold rounded-lg hover:border-primary/40 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Get A Demo <span>→</span>
            </Link>
          </div>
          <p className="text-[12px] text-white/35 mb-12">Free audit · Written report with your numbers · No credit card</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-9 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.v}>
                <div className="font-mono text-[28px] font-bold text-primary leading-none mb-1">{s.v}</div>
                <div className="text-[12px] text-white/35 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Morning Briefing Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
          <div className="bg-white/[0.04] border-b border-white/8 px-6 py-4 flex items-center justify-between">
            <div className="font-extrabold text-[14px] text-white"><span className="text-primary">LEX</span> Morning Briefing</div>
            <div className="flex items-center gap-1.5 text-[11px] text-green-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Live · 8:00am
            </div>
          </div>

          <div className="p-5 space-y-4">
            <div>
              <div className="font-mono text-[9px] font-bold tracking-[2px] text-red-500 uppercase mb-2">Critical — Act Today</div>
              {briefingCritical.map((r) => (
                <div key={r.t} className="flex justify-between items-center bg-white/[0.04] rounded-lg p-3 mb-1.5 text-[12px] border-l-2 border-red-500">
                  <span className="text-white/80 font-semibold">{r.t}</span>
                  <span className="text-white/35 text-[10px] whitespace-nowrap">{r.m}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="font-mono text-[9px] font-bold tracking-[2px] text-primary uppercase mb-2">Active — This Week</div>
              {briefingActive.map((r) => (
                <div key={r.t} className="flex justify-between items-center bg-white/[0.04] rounded-lg p-3 mb-1.5 text-[12px] border-l-2 border-primary">
                  <span className="text-white/80 font-semibold">{r.t}</span>
                  <span className={r.tag ? "bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold" : "text-white/35 text-[10px]"}>{r.m}</span>
                </div>
              ))}
            </div>

            <div>
              <div className="font-mono text-[9px] font-bold tracking-[2px] text-white/20 uppercase mb-2">Queue</div>
              {briefingQueue.map((r) => (
                <div key={r.t} className="flex justify-between items-center bg-white/[0.04] rounded-lg p-3 mb-1.5 text-[12px] border-l-2 border-white/8 opacity-45">
                  <span className="text-white/80 font-semibold">{r.t}</span>
                  <span className="text-white/35 text-[10px] whitespace-nowrap">{r.m}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8 px-5 py-3.5 flex justify-between text-[11px]">
            <span className="text-white/35">LEX prepares. You approve. Then sends.</span>
            <span className="text-primary font-bold">40 hrs saved</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Leaking Section ── */
export function LegalEdgeLeakingSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-red-500 uppercase block mb-4">
          Where Your Firm Is Losing Time and Money
        </span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-5">
          Most firms don't see it.
        </h2>
        <p className="text-[16px] text-[#0B1A2B]/60 leading-relaxed max-w-[540px] mb-12">
          Based on our first client engagement with a Florida real estate law firm — these are the leaks we found.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">
          {/* Money Leaking */}
          <div className="bg-white border border-[#0B1A2B]/8 rounded-2xl p-8 hover:border-primary/25 transition-colors">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-[22px]">💰</span>
              <span className="text-[16px] font-bold text-[#0B1A2B]">{leaks.money.title}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {leaks.money.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-[#0B1A2B]/60 leading-relaxed">
                  <span className="text-red-500 font-semibold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-[#0B1A2B]/8 pt-5">
              <div className="font-mono text-[32px] font-bold text-red-500 leading-none mb-1">{leaks.money.stat}</div>
              <div className="text-[13px] text-[#0B1A2B]/40">{leaks.money.statLabel}</div>
            </div>
          </div>

          {/* Time Leaking */}
          <div className="bg-white border border-[#0B1A2B]/8 rounded-2xl p-8 hover:border-primary/25 transition-colors">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-[22px]">⏱</span>
              <span className="text-[16px] font-bold text-[#0B1A2B]">{leaks.time.title}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {leaks.time.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-[#0B1A2B]/60 leading-relaxed">
                  <span className="text-primary font-semibold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-[#0B1A2B]/8 pt-5">
              <div className="font-mono text-[32px] font-bold text-primary leading-none mb-1">{leaks.time.stat}</div>
              <div className="text-[13px] text-[#0B1A2B]/40">{leaks.time.statLabel}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 bg-yellow-500/[0.06] border border-yellow-500/20 rounded-xl p-5 mb-4">
          <span className="text-[20px] shrink-0">⚠️</span>
          <p className="text-[14px] text-[#0B1A2B]/60 leading-relaxed">
            <strong className="text-yellow-600 font-bold">And the risk you're carrying:</strong> Missed deadlines don't just cost money — they carry malpractice exposure, client trust damage, and regulatory consequences.
          </p>
        </div>

        <p className="text-[13px] text-[#0B1A2B]/40 italic text-center">
          These are real numbers from one firm. Your audit will show yours.
        </p>
      </FadeUp>
    </section>
  )
}

/* ── Problem/Solution Section ── */
export function ProblemSolutionSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-start">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">The Problem</span>
            <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-5">
              Most real estate law firms run on manual.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed max-w-[540px] mb-8">
              HOA foreclosure, eviction, and closings are predictable workflows — yet most firms still do it all by hand.
            </p>

            <ul className="space-y-2.5">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 text-[15px] text-white/70 leading-relaxed p-3.5 bg-white/[0.03] border border-white/8 rounded-lg border-l-[3px] border-l-red-500/40 hover:border-l-red-500 transition-colors"
                >
                  <span className="text-red-500/60 shrink-0">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-green-500 uppercase block mb-4">What Changes on Day 1</span>
            <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-5">
              LEX fixes every one of them.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed max-w-[540px] mb-8">
              Built from the ground up around how HOA foreclosure actually works. Not a generic AI with a legal skin.
            </p>

            <div className="bg-white/[0.03] border border-white/8 rounded-xl p-6">
              <div className="font-mono text-[11px] font-bold tracking-[1px] text-primary uppercase mb-4">Results from first client</div>
              {fixes.map((f) => (
                <div key={f} className="flex gap-2.5 text-[14px] text-white/75 mb-2.5 last:mb-0 items-start">
                  <span className="text-green-500 font-bold shrink-0">→</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── LEX System Section ── */
export function LexSystemSection() {
  return (
    <section className="py-24 lg:py-28" id="system" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">The System</span>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-5">
            Meet LEX.
          </h2>
          <p className="text-[16px] text-[#0B1A2B]/60 leading-relaxed max-w-[560px] mx-auto">
            Three layers working together. Not a collection of features — a system that compounds over time.
          </p>
        </div>

        {agentBuckets.map((bucket, bi) => (
          <div key={bucket.bucket} className="mb-14 last:mb-0">
            <div className="bg-white border border-[#0B1A2B]/8 border-l-4 border-l-primary rounded-xl p-6 flex items-center gap-6 mb-6 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow">
              <div className="font-mono text-[36px] font-extrabold text-primary leading-none shrink-0">{`0${bi + 1}`}</div>
              <div>
                <div className="font-mono text-[11px] font-bold tracking-[1.5px] text-primary uppercase mb-1">{bucket.bucket}</div>
                <div className="text-[20px] font-extrabold text-[#0B1A2B]">{bucket.tagline}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {bucket.agents.map((agent, ai) => (
                <FadeUp key={agent.name} delay={ai * 80}>
                  <div
                    className={`bg-white border border-[#0B1A2B]/8 rounded-2xl p-6 relative overflow-hidden transition-all hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] group ${
                      agent.featured ? "bg-primary/[0.04] border-primary/20 col-span-full" : ""
                    }`}
                  >
                    <div className={`absolute top-0 left-0 right-0 h-[3px] bg-primary transition-opacity ${agent.featured ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    {agent.featured && (
                      <div className="absolute top-3 right-3 bg-yellow-500/15 text-yellow-600 font-mono text-[9px] font-bold px-2 py-1 rounded tracking-[1px]">
                        FLAGSHIP
                      </div>
                    )}
                    <div className="font-mono text-[12px] font-bold text-primary mb-1.5">{agent.name}</div>
                    <h4 className="text-[16px] font-bold text-[#0B1A2B] mb-2 leading-snug">{agent.headline}</h4>
                    <p className="text-[13px] text-[#0B1A2B]/60 leading-relaxed mb-3">{agent.desc}</p>
                    <div className="text-[12px] font-bold text-primary flex items-center gap-1.5">
                      <span>→</span>{agent.stat}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        ))}

        {/* Architecture Bar */}
        <div className="bg-white border border-[#0B1A2B]/8 rounded-xl p-7 grid grid-cols-1 md:grid-cols-3 gap-6 mt-7">
          <div>
            <h4 className="text-[14px] font-bold text-[#0B1A2B] mb-1.5">LEX Clio Sync</h4>
            <p className="text-[13px] text-[#0B1A2B]/60 leading-relaxed">Confirmed actions update Clio automatically. Your filing cabinet stays current without manual input.</p>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#0B1A2B] mb-1.5">Human Always in the Loop</h4>
            <p className="text-[13px] text-[#0B1A2B]/60 leading-relaxed">Nothing sends. Nothing files. Nothing logs without you. LEX prepares. You approve. Non-negotiable.</p>
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#0B1A2B] mb-1.5">Clio is Your Cabinet. LEX is Your Brain.</h4>
            <p className="text-[13px] text-[#0B1A2B]/60 leading-relaxed">LEX works alongside Clio — not instead of it. Clio stores. LEX thinks. Together they run your firm.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="border-2 border-[#0B1A2B]/20 text-[#0B1A2B]/60 px-8 py-3.5 text-[15px] font-semibold rounded-lg hover:border-primary/40 hover:text-[#0B1A2B] transition-all inline-flex items-center gap-2"
          >
            Get A Demo <span>→</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Matter Intelligence Section ── */
export function MatterIntelligenceSection() {
  const qaItems = [
    { q: "What's the status of the fact discovery deadline?", a: "Fact discovery closes April 15 — 22 days out. Outstanding: defendant's interrogatory responses due March 28, deposition not yet scheduled. HOA matter under §720.3085." },
    { q: "What's the total amount owed including per diem?", a: "Principal: $4,840. Late fees: $320. Per diem at §55.03: $2.18/day. Total today: $5,378.42. Demand letter drafted and ready." },
    { q: "Has opposing counsel responded?", a: "David Reyes, Reyes & Partners, Miami. Last letter sent March 12 — no response logged. Flagged as overdue. Draft follow-up ready." },
  ]

  return (
    <section className="py-24 lg:py-28" id="intelligence" style={{ background: "#0F2234" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div>
            <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Flagship Agent</span>
            <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-5">
              LEX Matter Intelligence.
            </h2>
            <p className="text-[16px] text-white/60 leading-relaxed max-w-[540px] mb-7">
              Ask anything about any active matter — deadlines, documents, parties, history, applicable Florida statute — and get an answer that knows the full case.
            </p>
            <blockquote className="border-l-[3px] border-primary pl-5 text-[16px] text-white/80 italic leading-relaxed">
              "Ask LEX anything about any matter.<br />It already knows the answer."
            </blockquote>
          </div>

          {/* MI Card */}
          <div className="bg-white/[0.03] border border-primary/20 rounded-2xl overflow-hidden">
            <div className="bg-primary/[0.08] border-b border-primary/15 px-6 py-4 flex justify-between items-center">
              <div className="font-mono text-[12px] font-bold text-primary">LEX — Martinez v. Oakwood HOA</div>
              <div className="flex items-center gap-1.5 text-[11px] text-green-500 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Active
              </div>
            </div>

            <div className="p-6 space-y-3">
              {qaItems.map((qa) => (
                <div key={qa.q} className="bg-white/[0.04] rounded-xl overflow-hidden">
                  <div className="bg-white/[0.04] border-b border-white/8 px-4 py-2.5 text-[12px] text-white/50 italic flex gap-2">
                    <span className="text-white/25 font-bold not-italic shrink-0">Q:</span>
                    {qa.q}
                  </div>
                  <div className="px-4 py-2.5 text-[12px] text-white/80 leading-relaxed flex gap-2">
                    <span className="text-primary font-bold text-[10px] shrink-0 mt-0.5">LEX:</span>
                    {qa.a}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/8 px-6 py-3.5 flex justify-between text-[11px]">
              <span className="text-white/35">Full matter context · Florida law · Your firm's history</span>
              <span className="text-green-500 font-bold">Instant answer</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Risk Section ── */
export function RiskSection() {
  const riskItems = [
    "Every deadline tracked — across every matter",
    "Every follow-up flagged — nothing forgotten",
    "Every action visible — before it reaches Clio",
    "Nothing sends without your approval",
  ]

  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[720px] mx-auto px-6 text-center">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-red-500 uppercase block mb-4">
          The Risk You're Carrying
        </span>
        <h2 className="font-serif text-[26px] lg:text-[32px] font-extrabold text-[#0B1A2B] leading-snug tracking-tight mb-5">
          Most firms don't realize they have a problem until they miss a deadline.
        </h2>
        <p className="text-[16px] text-[#0B1A2B]/60 leading-relaxed mb-7">
          By then it's already too late. One missed CMO deadline. One overlooked lien window. One demand letter with the wrong statute. The cost isn't just financial — it's malpractice exposure, client trust, and reputation.
        </p>

        <ul className="space-y-2.5 text-left max-w-[520px] mx-auto mb-7">
          {riskItems.map((item) => (
            <li key={item} className="flex gap-2.5 text-[15px] text-[#0B1A2B]/60 leading-relaxed">
              <span className="text-green-500 font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="text-[15px] text-[#0B1A2B]/40 italic border-t border-[#0B1A2B]/8 pt-5">
          LEX doesn't replace your judgment. It makes sure nothing reaches your desk too late to act on.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="border-2 border-[#0B1A2B]/20 text-[#0B1A2B]/60 px-8 py-3.5 text-[15px] font-semibold rounded-lg hover:border-primary/40 hover:text-[#0B1A2B] transition-all inline-flex items-center gap-2"
          >
            Get A Demo <span>→</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Guy Section ── */
export function LegalEdgeGuySection() {
  const creds = ["Former PE CEO", "Johns Hopkins Agentic AI", "Built LegalEdge", "Miami, FL"]

  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-6">The Builder</span>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 lg:gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-[#0B1A2B]/8">
              <Image
                src="/images/guy-balan.jpg"
                alt="Guy Balan"
                width={380}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 bg-white/95 border border-primary/25 rounded-xl px-5 py-3">
              <div className="font-extrabold text-[#0B1A2B] text-[16px] mb-0.5">Guy Balan</div>
              <div className="text-[12px] text-[#0B1A2B]/60">Founder & CEO · Boost Performers</div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-[28px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-6">
              Built inside a real law firm — not a lab.
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {creds.map((c) => (
                <span key={c} className="bg-primary/[0.06] border border-primary/15 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary">
                  {c}
                </span>
              ))}
            </div>

            <blockquote className="border-l-[3px] border-primary pl-5 text-[17px] text-[#0B1A2B] italic leading-relaxed mb-7">
              "I spent months in the trenches with a real Florida real estate attorney — mapping every step, every pain point, every place where deadlines had no safety net. LEX was built from that work."
            </blockquote>

            <p className="text-[15px] text-[#0B1A2B]/60 leading-relaxed mb-8">
              After getting certified in Agentic AI at Johns Hopkins, Guy built LegalEdge and LEX — live today with a Miami real estate law firm. 40 hours of paralegal time recovered in month one. He personally delivers every AI Audit.
            </p>

          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
          >
            Book Your AI Audit <span>→</span>
          </Link>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── FAQ Section ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left gap-4 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[16px] font-semibold text-white group-hover:text-primary transition-colors">{q}</span>
        <span className={`text-[20px] text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-350 ${open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pb-6 text-[14.5px] text-white/60 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export function LegalEdgeFaqSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Questions</span>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight">
            Common Questions
          </h2>
        </div>

        <div>
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Start Free Section ── */
export function StartFreeSection() {
  const steps = [
    { num: "01", title: "AI Capacity Audit", desc: "90 min · your numbers · $497 or $0" },
    { num: "02", title: "Written Report", desc: "Delivered in 48hrs" },
    { num: "03", title: "30-Day Trial", desc: "Your real matters · no credit card" },
  ]

  return (
    <section className="py-24 lg:py-28 text-center border-t border-white/8" style={{ background: "linear-gradient(180deg, #0F2234 0%, #132B42 100%)" }}>
      <FadeUp className="max-w-[640px] mx-auto px-6">
        <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-white leading-[1.08] tracking-tight mb-4">
          Nothing missed. Nothing unbilled.<br />
          <span className="text-primary">Nothing left to memory.</span>
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed mb-11">
          Start with an AI Capacity Audit. $497 if we find $10K+/month. $0 if we don't.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-12 mb-11">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <div className="font-mono text-[13px] font-bold text-primary mb-1.5">{step.num}</div>
              <div className="text-[15px] font-bold text-white mb-1">{step.title}</div>
              <div className="text-[13px] text-white/35">{step.desc}</div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
        >
          Book Your AI Audit <span>→</span>
        </Link>

        <p className="text-[12.5px] text-white/35 mt-5">
          Florida real estate litigation · HOA Foreclosure · Eviction · Closings
        </p>
      </FadeUp>
    </section>
  )
}
