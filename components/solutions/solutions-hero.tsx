"use client"

import { useState, useEffect, useRef } from "react"

function useSectionVisible(id: string) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current ?? document.getElementById(id)
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [id])
  return { visible, ref }
}

export { useSectionVisible }

/* ─────────── HERO ─────────── */
export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0B1A2B" }}>
      <div
        className="absolute top-[15%] right-[10%] w-[300px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,107,0,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-36 pb-24 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-6">
          AI Solutions
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
          AI Employees That Work{" "}
          <span className="gradient-text">24/7. For You.</span>
        </h1>
        <p className="text-lg text-foreground/50 max-w-[620px] mx-auto leading-relaxed mb-3">
          Voice, chat, sales, admin, knowledge, and operations — handled by AI, managed by real humans.
        </p>
        <p className="text-[15px] text-foreground/35 max-w-[520px] mx-auto leading-relaxed mb-10">
          Deploy in 7 days. 60-day performance guarantee. Zero technical knowledge required.
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-9">
          <a href="/contact" className="bg-primary text-primary-foreground px-9 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            Book Your Discovery Call
          </a>
          <a href="/ai-solutions" className="border-2 border-primary text-primary px-7 py-3.5 text-sm font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            Explore AI Solutions
          </a>
        </div>
        <div className="flex gap-5 justify-center flex-wrap">
          {["Live in 7 Days", "60-Day Guarantee", "Works With Your Tools"].map((b) => (
            <div key={b} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/[0.04] border border-foreground/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[13px] text-foreground/45 font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── PAIN POINTS ─────────── */
const PAIN_POINTS = [
  { icon: "phone-off", title: "Answering the Same Calls All Day", desc: "Your team fields the same questions over and over instead of closing deals or serving clients." },
  { icon: "snail", title: "Leads Going Cold While You Sleep", desc: "After-hours inquiries sit until morning. By then, the prospect already called your competitor." },
  { icon: "clipboard", title: "Drowning in Admin Work", desc: "Notes, follow-ups, scheduling, data entry -- 8-10 hrs/week burned on tasks that don't grow revenue." },
  { icon: "repeat", title: "Chasing People for Updates", desc: "Status check-ins, handoff reminders, deadline follow-ups -- your managers are babysitting tasks, not leading." },
  { icon: "help", title: "Answering the Same Internal Questions", desc: "\"Where's the SOP?\" \"What's the process for X?\" Your team asks. Again. And again. And again." },
  { icon: "broken", title: "No Consistent Follow-Up Process", desc: "Reps wing it every time. No nurture sequence, no accountability -- 44% give up after one attempt and the deal dies." },
]

function PainIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    "phone-off": (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    ),
    snail: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    clipboard: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
    ),
    repeat: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    ),
    help: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    ),
    broken: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  }
  return <>{icons[type]}</>
}

export function SolutionsPainPoints() {
  const { visible } = useSectionVisible("solutions-problems")

  return (
    <section style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)" }}>
      <div
        id="solutions-problems"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            The Problem
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-extrabold leading-tight text-[#0B1A2B] mb-4 max-w-[700px] mx-auto text-balance">
            {"You're Stuck Doing Low-Value Work Instead of Driving Growth."}
          </h2>
          <p className="text-base text-[#6B7B8D] max-w-[600px] mx-auto leading-relaxed">
            Your team is buried in repetitive tasks that AI can handle -- while the work that actually moves the needle gets pushed to &quot;next week.&quot;
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PAIN_POINTS.map((p, i) => (
            <div
              key={i}
              className="pain-card"
              style={{ transitionDelay: `${(i + 1) * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-[rgba(255,107,0,0.08)] flex items-center justify-center mb-5">
                <PainIcon type={p.icon} />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1A2B] mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7B8D] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
