"use client"

import { useState } from "react"
import { useSectionVisible } from "./solutions-hero"

const AGENTS = [
  {
    icon: "phone", name: "AI Voice Agent",
    tagline: "Never Miss Another Call. Never Lose Another Lead.",
    desc: "Answers calls instantly, qualifies leads, routes hot leads to live agents -- all while capturing full CRM data.",
    problem: "67% of callers won't leave a voicemail. You're losing 12-18 calls/week.",
    features: ["Conversational AI, not a rigid phone tree", "Real-time lead qualification & scoring", "Live transfer to your team for hot leads", "Full CRM data capture after every call", "Custom scripts tailored to your business", "Multi-language support"],
    tiers: "Starter, Growth, Scale",
    industries: ["Law Firms", "Real Estate", "Healthcare", "Home Services"],
  },
  {
    icon: "chat", name: "AI Chat Agent",
    tagline: "Every Message Answered in Under 10 Seconds. Every Platform.",
    desc: "Messenger, WhatsApp, Instagram DMs, Website Chat -- always responsive, always accurate.",
    problem: "53% bounce rate on unanswered chat. Social DMs pile up unanswered over weekends.",
    features: ["Omnichannel: Website, WhatsApp, Messenger, Instagram, SMS", "Contextual AI that understands nuance", "Trained on your FAQs, pricing, and services", "Smart escalation to human agents", "Lead capture & appointment booking built in", "Multi-language auto-detection"],
    tiers: "Starter, Growth, Scale",
    industries: ["Retail", "Professional Services", "Hospitality", "Healthcare"],
  },
  {
    icon: "target", name: "AI Sales Acquisition",
    tagline: "Every Lead Gets an Instant Response. Every. Single. One.",
    desc: "Speed converts leads. AI ensures nothing slips through the cracks with instant response and nurture sequences.",
    problem: "78% of deals go to first responder. 44% of reps give up after 1 follow-up.",
    features: ["Instant lead response across email, SMS, and chat", "AI-powered lead scoring & qualification", "Multi-touch nurture sequences", "Hot lead alerts & live transfer to sales reps", "Automated CRM updates & pipeline tracking", "A/B tested messaging for higher conversion"],
    tiers: "Growth, Scale",
    industries: ["Real Estate", "Business Services", "Healthcare", "Construction"],
  },
  {
    icon: "calendar", name: "AI Executive Assistant",
    tagline: "Meeting Notes, Action Items, and Follow-Ups. Handled Automatically.",
    desc: "Reduces admin, saves 8-10 hrs/week, keeps your team aligned -- without you lifting a finger.",
    problem: "8-10 hrs/week on admin tasks. 23 min avg. to schedule one meeting.",
    features: ["Auto-generated meeting summaries & action items", "Smart calendar management & scheduling", "Automated follow-up emails & reminders", "Task tracking & accountability notifications", "Daily/weekly briefings delivered to your inbox", "Integration with your existing workflow tools"],
    tiers: "Growth, Scale",
    industries: ["Business Services", "Law Firms", "Real Estate", "Accounting"],
  },
  {
    icon: "book", name: "AI Knowledge Base",
    tagline: "Your Team's Questions. Answered Instantly. By AI Trained on Your Business.",
    desc: "Reduces repetitive queries, keeps your SOPs actionable, saves 6-8 hrs/week.",
    problem: "6-8 hrs/week lost to repeat questions. New hires take 3-4 weeks to onboard.",
    features: ["Ingests PDFs, docs, spreadsheets, and web content", "Conversational search -- ask questions naturally", "Source attribution -- see where the answer came from", "Auto-updates when docs change", "Role-based access control", "Integrates with Slack, Teams, and internal portals"],
    tiers: "Growth, Scale",
    industries: ["Professional Services", "Healthcare", "Retail", "Construction"],
  },
  {
    icon: "gear", name: "AI Operations Workflow",
    tagline: "Internal Handoffs, Reminders, and Notifications. Without the Manual Chaos.",
    desc: "Streamlines operations, reduces dropped tasks, ensures accountability across your team.",
    problem: "15-20% of tasks dropped in handoffs. 3-5 hrs/week on status check-ins.",
    features: ["Automated task assignment & routing", "Smart reminders & deadline tracking", "Cross-department handoff automation", "Client onboarding workflow templates", "Status dashboards & accountability tracking", "Trigger-based notifications (Slack, email, SMS)"],
    tiers: "Scale",
    industries: ["Accounting Firms", "Transportation", "Business Services", "Construction"],
  },
]

function AgentIcon({ type }: { type: string }) {
  const s = { stroke: "#FF6B00", fill: "none", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  const icons: Record<string, React.ReactNode> = {
    phone: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.61.7 2.36a2 2 0 0 1-.45 2.11L8.91 10.5a16 16 0 0 0 6.59 6.59l1.31-1.34a2 2 0 0 1 2.11-.45c.75.34 1.55.57 2.36.7A2 2 0 0 1 22 16.92z"/></svg>,
    chat: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    target: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    calendar: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    book: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    gear: <svg width="24" height="24" viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  }
  return <>{icons[type]}</>
}

const TAB_LABELS = ["Voice", "Chat", "Sales", "Assistant", "Knowledge", "Operations"]

export function SolutionsAgents() {
  const { visible } = useSectionVisible("solutions-agents")
  const [active, setActive] = useState(0)
  const agent = AGENTS[active]

  return (
    <section style={{ background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)" }}>
      <div
        id="solutions-agents"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            Your AI Team
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold leading-tight text-[#0B1A2B] mb-4">
            Meet Your AI Employees
          </h2>
          <p className="text-base text-[#3A4A5C] max-w-[560px] mx-auto leading-relaxed">
            Six specialized AI agents that cover every gap in your business -- from first contact to internal operations.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center flex-wrap mb-12">
          {TAB_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-lg font-semibold text-sm cursor-pointer transition-all whitespace-nowrap border ${
                active === i
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-[#3A4A5C] border-[#0B1A2B]/8 hover:text-[#0B1A2B] hover:border-primary/30"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Agent Detail */}
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl border border-[#0B1A2B]/6 p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.12)] flex items-center justify-center">
              <AgentIcon type={agent.icon} />
            </div>
            <h3 className="font-serif text-[28px] font-extrabold text-[#0B1A2B]">{agent.name}</h3>
          </div>
          <p className="text-lg font-semibold text-primary mb-2 leading-snug">{agent.tagline}</p>
          <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-6">{agent.desc}</p>

          {/* Problem callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 mb-7">
            <span className="text-[13px] font-semibold text-red-600">The Problem: </span>
            <span className="text-[13px] text-red-800/70">{agent.problem}</span>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
            {agent.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5 px-3.5 py-2.5 bg-[#F7F8FA] rounded-lg border border-[#0B1A2B]/5">
                <span className="text-primary text-xs mt-0.5 shrink-0">{'✓'}</span>
                <span className="text-[13px] text-[#3A4A5C] leading-snug">{f}</span>
              </div>
            ))}
          </div>

          {/* Industries */}
          <div className="flex gap-2 flex-wrap mb-6">
            {agent.industries.map((ind) => (
              <span key={ind} className="px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[rgba(255,107,0,0.06)] text-[#3A4A5C] border border-[rgba(255,107,0,0.1)]">
                {ind}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-[#3A4A5C]/60">
              Available in: <span className="text-primary font-semibold">{agent.tiers}</span>
            </span>
            <a href="/contact" className="bg-primary text-white px-7 py-3 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
              Book Discovery Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────── RESULTS + STATS + TESTIMONIALS ─────────── */
const STATS = [
  { value: "67%", label: "Avg. increase in lead capture" },
  { value: "< 7", label: "Days to go live" },
  { value: "24/7", label: "Always available, never miss a lead" },
  { value: "89%", label: "Client retention rate" },
]

const TESTIMONIALS = [
  { quote: "Since implementing the AI Voice Agent, we haven't missed a single after-hours lead. Revenue is up 34% in 90 days.", name: "Sarah M.", role: "Managing Partner, Sterling Law Group" },
  { quote: "The AI Chat Agent paid for itself in the first week. We're capturing leads we never even knew we were losing.", name: "David R.", role: "Broker/Owner, Apex Real Estate" },
  { quote: "Our staff used to drown in calls. Now AI handles 80% of inquiries and our patient satisfaction scores have never been higher.", name: "Dr. Lisa K.", role: "Practice Manager, Coastal Medical" },
]

export function SolutionsResults() {
  const { visible } = useSectionVisible("solutions-results")

  return (
    <section style={{ background: "#0B1A2B" }}>
      <div
        id="solutions-results"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
            Results That Speak
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold leading-tight text-foreground">
            Proven Impact Across Industries
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map((s, i) => (
            <div key={i} className="text-center px-5 py-10 bg-foreground/[0.04] border border-foreground/[0.06] rounded-2xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
              <div className="font-serif text-[40px] font-extrabold text-primary mb-2">{s.value}</div>
              <p className="text-sm text-foreground/45">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-foreground/[0.04] border border-foreground/[0.06] rounded-2xl p-9">
              <p className="text-sm text-foreground/60 leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-foreground/35">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
