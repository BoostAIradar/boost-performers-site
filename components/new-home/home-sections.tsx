"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

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
export function NewHeroSection() {
  return (
    <section className="relative overflow-hidden text-center" style={{ background: "linear-gradient(175deg, #0B1A2B 0%, #0F2234 60%, #132B42 100%)" }}>
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,0,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[820px] mx-auto px-6 py-24 lg:py-32">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-8">
          <span className="font-mono text-[11px] font-bold tracking-[2px] text-primary uppercase">AI Platform Builder for Law Firms</span>
        </div>

        <h1 className="font-serif text-[36px] md:text-[48px] lg:text-[58px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
          Florida real estate lawyers<br />
          <span className="text-primary">lose $18K–$36K every year</span><br />
          without realizing it.
        </h1>

        <p className="text-[17px] lg:text-[19px] text-white/60 leading-relaxed max-w-[600px] mx-auto mb-12">
          We find where your time, billing, and workflow are leaking — then deploy AI that fixes it in 30 days or less.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </div>
    </section>
  )
}

/* ── Products Section ── */
export function ProductsSection() {
  const features = [
    "LEX Morning Briefing — your day prepared before you arrive",
    "LEX PDF Intelligence — 13 CMO deadlines in 8 seconds",
    "LEX Batch ATP — full day to 20 minutes",
    "LEX Document Engine — §720.3085 cited correctly, every time",
    "LEX Matter Intelligence — ask anything about any matter",
  ]

  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Our Product</span>
          <h2 className="font-serif text-[32px] lg:text-[44px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-5">
            Deep Workflow AI.<br />Built for Law Firms.
          </h2>
          <p className="text-[17px] text-[#0B1A2B]/60 leading-relaxed max-w-[560px] mx-auto">
            We identify the most painful workflow problems law firms face — missed billing, manual deadlines, repetitive drafting — and build AI that eliminates them.
          </p>
        </div>

        <div className="max-w-[600px] mx-auto">
          <Link
            href="/legaledge"
            className="block bg-white border border-[#0B1A2B]/8 rounded-2xl p-10 lg:p-12 relative overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />

            <h3 className="font-serif text-[36px] lg:text-[40px] font-extrabold text-[#0B1A2B] tracking-tight mb-2">
              Legal<span className="text-primary">Edge</span>
            </h3>
            <p className="text-[15.5px] text-[#0B1A2B]/60 leading-relaxed mb-7">
              Deep workflow AI for Florida real estate litigation firms. Powered by LEX — the intelligence layer that knows your matters, your workflow, and your firm's voice.
            </p>

            <ul className="space-y-2.5 mb-9">
              {features.map((f) => (
                <li key={f} className="flex gap-2.5 text-[14px] text-[#0B1A2B]/60 leading-relaxed">
                  <span className="text-primary font-semibold shrink-0">→</span>
                  {f}
                </li>
              ))}
            </ul>

            <span className="text-[14px] font-bold text-primary border-b border-primary pb-0.5 inline-block">
              Explore LegalEdge →
            </span>
          </Link>
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

/* ── Free AI Audit Section ── */
export function AuditSection() {
  const whatHappens = [
    "Walk through your HOA foreclosure, eviction, or closing workflow — step by step",
    "Map every friction point, deadline risk, and billing gap in your practice",
    "Put dollar amounts to the leaks — your numbers, not industry averages",
    "Demo LEX live on your specific workflow — not a canned presentation",
    "Leave with a clear next step — written report delivered within 48 hours",
  ]

  const reportCovers = [
    "Executive Summary — 5 key findings",
    "Workflow Analysis — every step mapped",
    "Revenue & Time Leakage — your dollar amount",
    "90-Day Implementation Roadmap",
  ]

  const stats = [
    { val: "40hrs", label: "Paralegal time recovered / month" },
    { val: "$36K", label: "Recoverable billing found" },
    { val: "8sec", label: "13 CMO deadlines extracted" },
  ]

  return (
    <section className="py-24 lg:py-28" style={{ background: "#0F2234" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Start Here</span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-10">
          Free AI Audit.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <h4 className="text-[15px] font-bold text-white mb-3">What happens in 90–120 minutes:</h4>
            <ul className="space-y-2 mb-6">
              {whatHappens.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-white/60 leading-relaxed">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="text-[15px] font-bold text-white mt-7 mb-3">What the written report covers:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
              {reportCovers.map((item) => (
                <li key={item} className="flex gap-2 text-[13.5px] text-white/60 leading-relaxed">
                  <span className="text-primary font-semibold shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/contact?type=audit"
              className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
            >
              Book Your AI Audit <span>→</span>
            </Link>
            <p className="text-[12px] text-white/35 mt-3">$497 audit · Find $10K+/month or pay nothing</p>
          </div>

          {/* Right - Visual */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[480px] mb-6">
              <Image
                src="/images/report-fan.png"
                alt="AI Capacity & Profit Audit Report"
                width={480}
                height={360}
                className="w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
              {stats.map((s) => (
                <div
                  key={s.val}
                  className="bg-white/[0.04] border border-white/8 rounded-xl p-4 text-center hover:border-primary/40 transition-colors"
                >
                  <div className="font-mono text-[24px] font-bold text-primary mb-1">{s.val}</div>
                  <div className="text-[11.5px] text-white/35 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-[12px] text-white/35 italic mt-3 text-center">
              Results from first client · Your audit will show your numbers
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── How We Work Section ── */
export function HowWeWorkSection() {
  const steps = [
    { n: "01", t: "Free AI Audit", d: "90–120 minute working session. We map your workflow, find every leak, and demo LEX live." },
    { n: "02", t: "LegalEdge", d: "If it's a fit — LEX deploys on your real matters, your real data." },
    { n: "03", t: "30-Day Free Trial", d: "Your real matters. Your real data. No credit card." },
  ]

  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">The Process</span>
          <h2 className="font-serif text-[32px] lg:text-[42px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-5">
            How We Work
          </h2>
          <p className="text-[16px] text-[#0B1A2B]/60 leading-relaxed max-w-[480px] mx-auto">
            From finding the leak to fixing it — in 30 days or less.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0 max-w-[1000px] mx-auto">
          {steps.map((step, i) => (
            <div key={step.n} className="flex-1 text-center relative px-3 max-w-[320px] mx-auto lg:mx-0">
              {/* Connecting line */}
              {i < 2 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-[#0B1A2B]/8 z-0" />
              )}

              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center mx-auto mb-5 relative z-10">
                <span className="font-mono text-[18px] font-extrabold text-primary">{step.n}</span>
              </div>
              <h4 className="text-[17px] font-bold text-[#0B1A2B] mb-2">{step.t}</h4>
              <p className="text-[14px] text-[#0B1A2B]/60 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Guy Section ── */
export function GuySection() {
  const creds = ["Former PE CEO", "Johns Hopkins Agentic AI", "Built LegalEdge", "Miami, FL"]

  return (
    <section className="py-24 lg:py-28" style={{ background: "#0F2234" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-6">The Builder</span>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-14 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/8">
              <Image
                src="/images/guy-balan.jpg"
                alt="Guy Balan"
                width={380}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 bg-[#0B1A2B]/95 backdrop-blur-lg border border-primary/25 rounded-xl px-5 py-3">
              <div className="font-extrabold text-white text-[16px] mb-0.5">Guy Balan</div>
              <div className="text-[12px] text-white/60">Founder & CEO · Boost Performers</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-[28px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-6">
              He kept seeing firms lose money to broken systems. So he built the fix.
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {creds.map((c) => (
                <span key={c} className="bg-primary/10 border border-primary/15 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary">
                  {c}
                </span>
              ))}
            </div>

            <blockquote className="border-l-[3px] border-primary pl-5 text-[17px] text-white/80 italic leading-relaxed mb-7">
              "I spent years running firms and investing in businesses. I kept seeing the same problem — smart operators losing money not because of bad decisions, but because their systems made it impossible to make good ones fast enough."
            </blockquote>

            <p className="text-[15px] text-white/60 leading-relaxed mb-8">
              After getting certified in Agentic AI at Johns Hopkins, Guy built LegalEdge — the deep workflow AI for Florida real estate litigation firms. Powered by LEX, it's live and deployed with real clients today.
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

/* ── Final CTA Section ── */
export function FinalCtaSection() {
  return (
    <section className="relative py-28 lg:py-32 text-center overflow-hidden" style={{ background: "#0B1A2B" }}>
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,107,0,0.08) 0%, transparent 70%)" }}
      />

      <FadeUp className="relative z-10 max-w-[700px] mx-auto px-6">
        <h2 className="font-serif text-[32px] md:text-[42px] lg:text-[52px] font-extrabold text-white leading-[1.06] tracking-tight mb-5">
          You already know something is leaking.<br />
          <span className="text-primary">Let's find it. Then fix it.</span>
        </h2>

        <p className="text-[18px] text-white/60 leading-relaxed max-w-[580px] mx-auto mb-12">
          Free audit. Written report with your numbers. Right product recommended. No pitch unless it fits.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
        >
          Book Your AI Audit <span>→</span>
        </Link>

        <p className="text-[13px] text-white/35 mt-5">Florida real estate law firms · LegalEdge · No credit card</p>
      </FadeUp>
    </section>
  )
}
