"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

/* ── DATA ── */
const proofStats = [
  { val: "40+ hrs", label: "paralegal time recovered per month" },
  { val: "$36K", label: "recoverable billing identified per year" },
  { val: "8 sec", label: "13 CMO deadlines extracted from one order" },
  { val: "$497", label: "audit cost vs. $36K found" },
]

const howSteps = [
  {
    num: "01",
    title: "We talk",
    desc: "90-minute working session. I map every workflow, deadline process, and billing gap in your firm. You don't prepare anything.",
  },
  {
    num: "02",
    title: "You get the report",
    desc: "Within 48 hours: a written AI Capacity & Profit Report with your exact dollar amounts — where time is leaking, where billing is being missed, and the roadmap to fix it.",
  },
  {
    num: "03",
    title: "You decide",
    desc: "Want me to build it for you? We handle everything. If not, you keep the report and act on it yourself. No pressure.",
  },
]

const whoItems = [
  "You handle HOA foreclosure, eviction, or both",
  "You have 50–300+ active matters",
  "Your paralegal is drowning in manual work",
  "You know you're losing billable time but can't pinpoint where",
  "You've thought about AI but don't know where to start",
]

const faqs = [
  {
    q: "What does the audit cost?",
    a: "$497 — but only if I find $10K+/month in recoverable capacity. If I can't, you pay nothing. I've never failed to find it.",
  },
  {
    q: "Do I need to prepare anything?",
    a: "Nothing. You show up. I do all the work.",
  },
  {
    q: "What if AI isn't right for my firm?",
    a: "That's exactly what the audit answers. If AI doesn't fit certain areas of your practice, I'll tell you that directly. The report is honest, not a sales deck.",
  },
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

/* ── Section 1: Hero (DARK) ── */
export function AuditHeroSection() {
  const details = [
    "90-minute working session with Guy Balan",
    "Written report delivered within 48 hours",
    "You don't prepare anything — I do all the work",
  ]

  return (
    <section className="relative py-24 lg:py-28" style={{ background: "linear-gradient(175deg, #0B1A2B 0%, #0F2234 60%, #132B42 100%)" }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative z-10">
          <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-5">
            AI Capacity & Profit Audit
          </span>
          <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-black leading-[1.06] tracking-tight text-white mb-6">
            I'll Find <span className="text-primary">$10,000+/Month</span> Your Firm Is Losing to Manual Work
          </h1>
          <p className="text-[17px] text-white/60 leading-relaxed max-w-[520px] mb-9">
            90 minutes. I map your workflow, calculate the waste, and hand you the blueprint. If I can't find at least $10,000/month in recoverable capacity, you pay nothing. If I can, it's $497 and you keep the full report and 90-day roadmap.
          </p>

          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
          >
            Book Your Audit — Risk Free <span>→</span>
          </Link>

          <div className="mt-7 space-y-2.5">
            {details.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <div className="w-full max-w-[520px]">
            <Image
              src="/images/report-fan.png"
              alt="AI Capacity & Profit Audit Report"
              width={520}
              height={390}
              className="w-full h-auto"
            />
          </div>
          <p className="text-[12px] text-white/35 italic mt-4 text-center">
            Your custom report — delivered within 48 hours
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Section 2: Guarantee Block (LIGHT) ── */
export function GuaranteeBlock() {
  return (
    <section className="py-16 lg:py-20" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[800px] mx-auto px-6">
        <div className="border-2 border-primary rounded-2xl p-8 lg:p-10" style={{ background: "rgba(255,107,0,0.04)" }}>
          <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-4">
            The Guarantee
          </span>
          <p className="text-[16px] text-[#0B1A2B]/70 leading-relaxed">
            If I can't find $10,000/month in recoverable capacity inside your firm, you pay $0. No invoice. No follow-up. No obligation. I've run these audits on Florida real estate litigation firms and I've never failed to find it. Your risk is zero. Mine is 90 minutes of my time.
          </p>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Section 3: Proof / Results (DARK) ── */
export function ProofSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-4">
          Proven Results
        </span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-3">
          Results from our first client.
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-[560px] mb-12">
          Solo attorney. 100+ active HOA foreclosure matters. One paralegal. South Florida.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {proofStats.map((s, i) => (
            <FadeUp key={s.val} delay={i * 80}>
              <div className="rounded-2xl p-6 lg:p-8" style={{ background: "#132B42" }}>
                <div className="font-mono text-[32px] lg:text-[38px] font-black text-primary leading-none mb-2">{s.val}</div>
                <div className="text-[13px] text-white/60 leading-snug">{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>

        <p className="text-[13px] text-white/60 italic mt-8 text-center">
          These are real numbers from one engagement. Your numbers will be specific to your firm.
        </p>
      </FadeUp>
    </section>
  )
}

/* ── Section 4: Zero Effort Block (LIGHT) ── */
export function ZeroEffortBlock() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[780px] mx-auto px-6">
        <h2 className="font-serif text-[22px] lg:text-[24px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-6">
          You give me 90 minutes. I do all the work.
        </h2>
        <p className="text-[15px] text-[#0B1A2B]/60 leading-relaxed">
          You don't prepare a single thing. No documents to gather. No spreadsheets to export. No questionnaires to fill out. You and your paralegal walk me through your day — how matters come in, how deadlines get tracked, how documents get drafted, how time gets billed. I ask the questions. I map the workflow. I calculate the numbers. You walk out knowing exactly where the money is going.
        </p>
      </FadeUp>
    </section>
  )
}

/* ── Section 5: How It Works (DARK) ── */
export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-4">
          The Process
        </span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-10">
          Three steps. One session. Your numbers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {howSteps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 120}>
              <div className="bg-white/[0.025] border border-white/8 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
                <div className="font-mono text-[44px] font-bold text-primary/20 leading-none mb-5">{step.num}</div>
                <h4 className="text-[19px] font-bold text-white mb-3">{step.title}</h4>
                <p className="text-[14px] text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Section 6: Who This Is For (LIGHT) ── */
export function WhoThisIsForSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[800px] mx-auto px-6">
        <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-4">
          Who This Is For
        </span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-10">
          Built for Florida real estate litigation firms.
        </h2>

        <div className="space-y-4">
          {whoItems.map((item) => (
            <div key={item} className="flex items-start gap-3.5 text-[15px] text-[#0B1A2B]/70 leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
              {item}
            </div>
          ))}
        </div>

        <p className="mt-10 text-[14px] text-[#0B1A2B]/60 italic leading-relaxed">
          If that sounds like your firm, the audit will pay for itself before you finish reading the report.
        </p>
      </FadeUp>
    </section>
  )
}

/* ── Section 7: Guy's Bio (DARK) ── */
export function AuditGuySection() {
  const creds = ["Former PE CEO", "Johns Hopkins Agentic AI", "Built LegalEdge"]

  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden border border-white/8">
            <Image
              src="/images/guy-balan.jpg"
              alt="Guy Balan"
              width={340}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-[22px] font-extrabold text-white mb-1.5">Hey, I'm Guy.</h3>
            <p className="text-[14px] text-white/60 mb-6">Founder & CEO, Boost Performers</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {creds.map((c) => (
                <span key={c} className="bg-primary/[0.12] rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary">
                  {c}
                </span>
              ))}
            </div>

            <p className="text-[15px] text-white/60 leading-relaxed mb-4">
              Former Private Equity CEO. Johns Hopkins Agentic AI certified. I spent months embedded with a Florida real estate attorney — mapping every workflow, every deadline risk, every place where billable hours disappeared. That work became LegalEdge and LEX.
            </p>
            <p className="text-[15px] text-white/60 leading-relaxed">
              I personally deliver every audit. Not a sales call — a working session with the person who built the product. If I can't find $10K/month in your firm, I'll tell you that directly and you won't owe a dollar.
            </p>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Section 8: Final CTA (DARK gradient) ── */
export function AuditFinalCtaSection() {
  return (
    <section className="py-24 lg:py-28 text-center border-t border-white/8" style={{ background: "linear-gradient(180deg, #132B42 0%, #0F2234 100%)" }}>
      <FadeUp className="max-w-[700px] mx-auto px-6">
        <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] font-extrabold text-white leading-tight tracking-tight mb-4">
          Stop guessing. See your numbers.
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed mb-10">
          $497 if I find $10K+/month. $0 if I don't. Either way, you keep the report.
        </p>

        <Link
          href="/contact?type=audit"
          className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
        >
          Book Your Audit — Risk Free <span>→</span>
        </Link>

        <p className="text-[13px] text-white/60 mt-5">
          Limited spots each month · Florida real estate litigation firms · HOA foreclosure & eviction
        </p>
      </FadeUp>
    </section>
  )
}

/* ── FAQ Section (LIGHT) ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#0B1A2B]/8 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left gap-4 cursor-pointer group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[16px] font-semibold text-[#0B1A2B] group-hover:text-primary transition-colors">{q}</span>
        <span className={`text-[20px] text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-350 ${open ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="pb-6 text-[14.5px] text-[#0B1A2B]/60 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export function FaqSection() {
  return (
    <section className="py-20 lg:py-24" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-[12px] font-bold tracking-[2px] text-primary uppercase block mb-4">FAQ</span>
          <h2 className="font-serif text-[28px] lg:text-[32px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight">
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
