"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

/* ── DATA ── */
const painPoints = [
  "Spending hours processing ATP batches",
  "Tracking CMO deadlines manually — one missed filing from malpractice exposure",
  "Watching billable time walk out the door without knowing exactly where",
  "HOA status reports consuming hours every single month",
  "Wanting to systemize AI across your practice but unsure where to start",
  "Needing more capacity without the overhead of more staff",
]

const howSteps = [
  {
    num: "01",
    title: "Deep Dive Working Session",
    desc: "Walk us through your workflow. We map every friction point, deadline risk, and place where billable time disappears — then demo LEX live on your practice area.",
  },
  {
    num: "02",
    title: "Written Profit Report",
    desc: "Within 48 hours you receive a custom AI Capacity & Profit Report: recoverable billing, time savings, malpractice exposure, and a 90-day implementation roadmap.",
  },
  {
    num: "03",
    title: "Free 30-Day Trial",
    desc: "No pitch unless what we find is a genuine fit. If it is — your trial starts on real matters, no credit card required.",
  },
]

const reportSections = [
  { tag: "Executive Summary", title: "5 Key Findings", items: ["Recoverable billing & time-savings estimates", "Deadline risk & malpractice exposure", "Expected impact of LEX on your practice"] },
  { tag: "Workflow Analysis", title: "Every Step Mapped", items: ["Your HOA / eviction / closing workflow documented", "Pain points flagged, LEX solutions matched", "Before-and-after comparison specific to your firm"] },
  { tag: "Revenue Leakage", title: "Your Dollar Amount", items: ["Where billable hours are disappearing", "Dollar estimate based on your workflow", "Time recovery per area"] },
  { tag: "Implementation", title: "90-Day Roadmap", items: ["Day 1–14: immediate deployment", "Day 15–45: deeper integration", "Day 45–90: full LEX deployment"] },
]

const caseStudyStats = [
  { val: "40hrs", label: "Paralegal time recovered per month", detail: "Status reports, CMO tracking, and ATP processing that previously consumed a full-time paralegal's week." },
  { val: "$36K", label: "Recoverable billing identified", detail: "Billable time lost to manual workflows that LEX now handles — time the firm can reinvest in client work." },
  { val: "8sec", label: "13 CMO deadlines extracted", detail: "Previously took 45+ minutes of manual review per order. LEX extracted all 13 deadlines from a single CMO in seconds." },
]

const faqs = [
  { q: "How long until I receive the report?", a: "Your written AI Capacity & Profit Report is delivered within 48 hours. Guy prepares it personally after every audit — it's specific to your firm, not templated." },
  { q: "Do we have to use your products to implement?", a: "Not at all. The report is yours to keep. If LegalEdge is a fit, you get a free 30-day trial with no credit card. You only pay after you've seen it working." },
  { q: "What aspects of my firm does the report cover?", a: "Seven sections: Executive Summary, Workflow Analysis, Revenue & Time Leakage, ROI Opportunity Summary, Before/After Comparison, 90-Day Implementation Timeline, and Product Recommendation." },
  { q: "What if AI isn't right for my firm?", a: "That's exactly what the audit answers. If AI doesn't fit certain areas of your practice, we'll tell you that directly. The report is honest, not a sales deck." },
  { q: "How is this different from a free consultation?", a: "A consultation is a sales call. This is a 90–120 minute working session where we map your workflow live, put numbers to the leaks, and demo LEX on your specific practice — followed by a written report you can act on independently." },
]

const stats = [
  { val: "$36K", label: "Recoverable billing found" },
  { val: "40hrs", label: "Paralegal time recovered monthly" },
  { val: "8sec", label: "CMO deadline extraction" },
  { val: "48hr", label: "Report delivery time" },
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
export function AuditHeroSection() {
  const checklist = [
    "90–120 minute working session with Guy Balan",
    "Written AI Capacity & Profit Report within 48 hours",
    "Free 30-day trial if it fits — no credit card",
  ]

  return (
    <section className="relative py-24 lg:py-28" style={{ background: "linear-gradient(175deg, #0B1A2B 0%, #0F2234 60%, #132B42 100%)" }}>
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="relative z-10">
          <span className="font-mono text-[11.5px] font-bold tracking-[2.5px] text-primary uppercase block mb-5">
            Florida Real Estate Attorneys
          </span>
          <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.06] tracking-tight text-white mb-6">
            See Exactly Where Your Firm Is <span className="text-primary">Leaking Time & Money</span>
          </h1>
          <p className="text-[17px] text-white/60 leading-relaxed max-w-[480px] mb-9">
            Florida real estate lawyers lose $18K–$36K/year in missed billing, manual work, and untracked deadlines. This free working session finds your numbers — not a sales call.
          </p>

          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
          >
            Book A Free AI Audit <span>→</span>
          </Link>

          <div className="mt-7 space-y-2.5">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13.5px] text-white/60">
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

/* ── Is This You Section ── */
export function IsThisYouSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Is This You?</span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-8">
          You're a Florida real estate attorney who…
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {painPoints.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 p-5 bg-primary/[0.04] border border-primary/10 rounded-xl text-[15px] text-[#0B1A2B]/70 leading-relaxed hover:border-primary/25 hover:bg-primary/[0.08] transition-all"
            >
              <span className="text-primary font-bold shrink-0 mt-0.5">—</span>
              {item}
            </div>
          ))}
        </div>

        <p className="mt-9 text-[15px] text-[#0B1A2B]/60 italic border-l-[3px] border-primary pl-5 leading-relaxed">
          This audit maps your exact workflow, finds where time and money are leaking, and shows you what LEX does for your practice — before you commit to anything.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-8 py-3.5 text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Book A Free AI Audit <span>→</span>
          </Link>
          <Link
            href="/contact"
            className="border-2 border-[#0B1A2B]/15 text-[#0B1A2B]/60 px-8 py-3.5 text-[15px] font-semibold rounded-lg hover:border-primary/40 hover:text-[#0B1A2B] transition-all inline-flex items-center gap-2"
          >
            Get A Demo <span>→</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Where Leaking Section ── */
export function LeakingSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "#0B1A2B" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-red-500 uppercase block mb-4">
          Where Your Firm Is Losing Time and Money
        </span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-5">
          Most firms don't see it. The audit does.
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-[540px] mb-12">
          Based on our first beta audit with a Florida real estate law firm — these are the leaks we found.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">
          {/* Money Leaking */}
          <div className="bg-white/[0.025] border border-white/8 rounded-2xl p-8 hover:border-primary/25 transition-colors">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-[22px]">💰</span>
              <span className="text-[16px] font-bold text-white">{leaks.money.title}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {leaks.money.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-white/60 leading-relaxed">
                  <span className="text-red-500 font-semibold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/8 pt-5">
              <div className="font-mono text-[32px] font-bold text-red-500 leading-none mb-1">{leaks.money.stat}</div>
              <div className="text-[13px] text-white/35">{leaks.money.statLabel}</div>
            </div>
          </div>

          {/* Time Leaking */}
          <div className="bg-white/[0.025] border border-white/8 rounded-2xl p-8 hover:border-primary/25 transition-colors">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-[22px]">⏱</span>
              <span className="text-[16px] font-bold text-white">{leaks.time.title}</span>
            </div>
            <ul className="space-y-2.5 mb-6">
              {leaks.time.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[14px] text-white/60 leading-relaxed">
                  <span className="text-primary font-semibold shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-white/8 pt-5">
              <div className="font-mono text-[32px] font-bold text-primary leading-none mb-1">{leaks.time.stat}</div>
              <div className="text-[13px] text-white/35">{leaks.time.statLabel}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3.5 bg-yellow-500/[0.04] border border-yellow-500/15 rounded-xl p-5 mb-4">
          <span className="text-[20px] shrink-0">⚠️</span>
          <p className="text-[14px] text-white/60 leading-relaxed">
            <strong className="text-yellow-400 font-bold">And the risk you're carrying:</strong> Missed deadlines don't just cost money — they carry malpractice exposure, client trust damage, and regulatory consequences.
          </p>
        </div>

        <p className="text-[13px] text-white/35 italic text-center">
          These are real numbers from one firm. Your audit will show yours.
        </p>
      </FadeUp>
    </section>
  )
}

/* ── How It Works Section ── */
export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">How It Works</span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-10">
          Three Steps. Zero Commitment.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {howSteps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 120}>
              <div className="bg-white border border-[#0B1A2B]/8 rounded-2xl p-8 relative overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono text-[44px] font-bold text-primary/20 leading-none mb-5">{step.num}</div>
                <h4 className="text-[19px] font-bold text-[#0B1A2B] mb-3">{step.title}</h4>
                <p className="text-[14px] text-[#0B1A2B]/60 leading-relaxed">{step.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Stats Bar ── */
export function StatsBar() {
  return (
    <div className="border-t border-b border-white/8" style={{ background: "#0F2234" }}>
      <div className="max-w-[1120px] mx-auto grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.val}
            className={`py-11 px-6 text-center ${i < stats.length - 1 ? "border-r border-white/8" : ""} ${i < 2 ? "lg:border-r" : ""}`}
          >
            <div className="font-mono text-[36px] font-bold text-primary mb-1.5">{s.val}</div>
            <div className="text-[12.5px] text-white/35 leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Report Section ── */
export function ReportSection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Your Report</span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight mb-5">
          What The Report Covers
        </h2>
        <p className="text-[16px] text-[#0B1A2B]/60 leading-relaxed max-w-[540px] mb-12">
          Delivered within 48 hours. Specific to your firm. Not a template.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reportSections.map((card) => (
            <div
              key={card.tag}
              className="bg-white border border-[#0B1A2B]/8 rounded-xl p-7 hover:border-primary hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all"
            >
              <div className="font-mono text-[11px] font-bold tracking-[1.5px] text-primary uppercase mb-2">{card.tag}</div>
              <h4 className="text-[17px] font-bold text-[#0B1A2B] mb-4">{card.title}</h4>
              <ul className="space-y-2">
                {card.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[13.5px] text-[#0B1A2B]/60 leading-relaxed">
                    <span className="text-primary font-semibold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Case Study Section ── */
export function CaseStudySection() {
  return (
    <section className="py-24 lg:py-28" style={{ background: "rgba(255,255,255,0.01)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6 text-center">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">Proven Results</span>
        <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-white leading-tight tracking-tight mb-5">
          Results From Our First Beta Firm
        </h2>
        <p className="text-[16px] text-white/60 leading-relaxed max-w-[540px] mx-auto mb-6">
          A mid-size Florida HOA foreclosure practice. Real workflow. Real numbers.
        </p>

        <div className="flex items-center justify-center gap-3.5 mb-10">
          <span className="font-mono text-[11px] font-bold tracking-[1.5px] uppercase bg-green-500/10 text-green-400 border border-green-500/20 rounded-full px-4 py-1.5">
            Verified Beta
          </span>
          <span className="text-[14px] text-white/35">HOA Foreclosure Practice · South Florida</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {caseStudyStats.map((s, i) => (
            <FadeUp key={s.val} delay={i * 100}>
              <div className="bg-white/[0.025] border border-white/8 rounded-2xl p-8 hover:border-primary/25 hover:-translate-y-0.5 transition-all text-left">
                <div className="font-mono text-[38px] font-bold text-primary leading-none mb-1.5">{s.val}</div>
                <div className="text-[13px] font-bold text-white mb-3.5">{s.label}</div>
                <p className="text-[13.5px] text-white/60 leading-relaxed">{s.detail}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <p className="text-[13px] text-white/35 italic mt-8">
          All figures from a single audit engagement. Your results will depend on your firm's workflow and practice area.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Link
            href="/contact?type=audit"
            className="bg-primary text-white px-8 py-3.5 text-[15px] font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            Book A Free AI Audit <span>→</span>
          </Link>
          <Link
            href="/contact"
            className="border border-white/15 text-white/60 px-8 py-3.5 text-[15px] font-semibold rounded-lg hover:border-primary/40 hover:text-white transition-all inline-flex items-center gap-2"
          >
            Get A Demo <span>→</span>
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}

/* ── Guy Section ── */
export function AuditGuySection() {
  const creds = ["Former PE CEO", "Johns Hopkins Agentic AI", "Built LegalEdge"]

  return (
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[1120px] mx-auto px-6">
        <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-6">Meet the Founder</span>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-14 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden border border-[#0B1A2B]/8">
            <Image
              src="/images/guy-balan.jpg"
              alt="Guy Balan"
              width={340}
              height={420}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h3 className="text-[32px] font-extrabold text-[#0B1A2B] mb-1.5">Hey, I'm Guy.</h3>
            <p className="text-[14px] text-[#0B1A2B]/50 mb-6">Founder & CEO · Boost Performers</p>

            <p className="text-[15px] text-[#0B1A2B]/60 leading-relaxed mb-4">
              After years in Private Equity — running firms, scaling operations, and engineering exits — I kept seeing the same problem. Smart operators losing time and money not because of bad decisions, but because their systems couldn't keep up.
            </p>
            <p className="text-[15px] text-[#0B1A2B]/60 leading-relaxed mb-4">
              I got certified in Agentic AI at Johns Hopkins, then spent months building alongside a real Florida real estate attorney — mapping every step where deadlines had no safety net and billable hours disappeared. The result is LegalEdge and LEX.
            </p>
            <p className="text-[15px] text-[#0B1A2B] font-medium leading-relaxed mb-6">
              I personally deliver every free AI Audit. Not a sales call — a working session with the person who built the product.
            </p>

            <div className="flex flex-wrap gap-2">
              {creds.map((c) => (
                <span key={c} className="bg-primary/[0.06] border border-primary/15 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary">
                  {c}
                </span>
              ))}
            </div>
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
    <section className="py-24 lg:py-28" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <FadeUp className="max-w-[720px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-[11px] font-bold tracking-[2.5px] text-primary uppercase block mb-4">FAQ</span>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-extrabold text-[#0B1A2B] leading-tight tracking-tight">
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

/* ── Final CTA Section ── */
export function AuditFinalCtaSection() {
  return (
    <section className="py-24 lg:py-28 text-center border-t border-white/8" style={{ background: "linear-gradient(180deg, #132B42 0%, #0F2234 100%)" }}>
      <FadeUp className="max-w-[700px] mx-auto px-6">
        <h2 className="font-serif text-[32px] md:text-[40px] lg:text-[44px] font-extrabold text-white leading-tight tracking-tight mb-4">
          Stop Guessing. See Your Numbers.
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed mb-10">
          Free audit. Written report with your numbers. Right product recommended.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 text-base font-bold rounded-lg hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] inline-flex items-center gap-2"
        >
          Book A Free AI Audit <span>→</span>
        </Link>

        <p className="text-[12.5px] text-white/35 mt-5">
          Limited spots each month · Florida real estate law firms only · No credit card
        </p>
      </FadeUp>
    </section>
  )
}
