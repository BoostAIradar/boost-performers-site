"use client"

import { useState } from "react"
import { Monitor, Bot, Zap, Calendar, Star, Globe, DollarSign, Smartphone, Check } from "lucide-react"

const FEATURES = [
  {
    icon: Monitor,
    label: "CRM",
    title: "Every Lead. Every Conversation. One Place.",
    desc: "Stop losing leads to sticky notes and scattered spreadsheets. The Boost Platform gives you a complete contact record for every lead -- every call, text, email, DM, and appointment in one timeline. Know exactly where every prospect stands and never let a deal slip through the cracks.",
    highlights: ["Unlimited contacts", "Full conversation history", "Lead scoring & tagging", "Pipeline management", "Mobile app access"],
  },
  {
    icon: Bot,
    label: "AI",
    title: "AI Employees That Work While You Sleep.",
    desc: "This is what makes Boost different. Our AI employees handle calls, chats, follow-up, scheduling, and operations -- 24/7, with zero overhead. They're not generic chatbots. They're trained on your business, your services, your tone. Your clients won't know the difference.",
    highlights: ["Voice Agent -- answers every call", "Chat Agent -- converts website visitors", "Executive Assistant -- manages inbox & calendar", "Sales Acquisition -- fills your pipeline", "Knowledge Base -- instant team answers", "Operations Workflow -- automates task management"],
  },
  {
    icon: Zap,
    label: "Automations",
    title: "Set It Once. Let It Run Forever.",
    desc: "From the moment a lead comes in to the moment they become a paying client -- every step can be automated. Follow-up texts, email sequences, appointment reminders, review requests, re-engagement campaigns. Build it once and it runs without you.",
    highlights: ["Multi-channel follow-up (SMS, email, voice, DM)", "Trigger-based workflows", "Appointment reminders & no-show recovery", "Lead nurture sequences", "Task automation & team notifications"],
  },
  {
    icon: Calendar,
    label: "Calendar",
    title: "Booked Solid. Without the Back-and-Forth.",
    desc: "Integrated booking calendars for you and your entire team. Syncs with Google Calendar. Clients book directly from your website, funnel, or even a text link. Automated confirmations, reminders, and follow-ups reduce no-shows and keep your schedule full.",
    highlights: ["Unlimited team calendars", "Google Calendar sync", "Automated confirmations & reminders", "Round-robin & group booking", "Embed on any website or funnel"],
  },
  {
    icon: Star,
    label: "Reviews",
    title: "5-Star Reputation on Autopilot.",
    desc: "Your reputation is your revenue. The Boost Platform automatically requests reviews after every job, monitors what people say about you, and helps you respond fast. More reviews. Better ratings. More trust. More clients.",
    highlights: ["Automated review requests via SMS & email", "Review monitoring across platforms", "AI-assisted response drafting", "Review widget for your website", "Reputation performance reporting"],
  },
  {
    icon: Globe,
    label: "Websites",
    title: "Websites & Funnels That Convert.",
    desc: "Build high-converting landing pages, full websites, and sales funnels -- all inside the platform. No WordPress. No Squarespace. No separate hosting. Drag-and-drop builder with proven templates designed to turn visitors into leads.",
    highlights: ["Drag-and-drop page builder", "Pre-built funnel templates", "Mobile responsive", "Custom domains", "A/B testing"],
  },
  {
    icon: DollarSign,
    label: "Payments",
    title: "Get Paid Faster. Chase Less.",
    desc: "Send invoices, collect payments, and manage contracts -- all from the same platform where you manage your leads. Text-to-pay lets clients pay from their phone in seconds. No more chasing checks or juggling Venmo requests.",
    highlights: ["One-click invoicing", "Text-to-pay", "Recurring billing", "Contracts & proposals", "Payment tracking & reporting"],
  },
  {
    icon: Smartphone,
    label: "Mobile",
    title: "Run Your Business From Your Phone.",
    desc: "Everything in the Boost Platform is accessible from the mobile app. Respond to leads, check your pipeline, make calls, send invoices, view reports -- all from the job site, the courtroom, or your kid's soccer game.",
    highlights: ["Full CRM on mobile", "Call, text, and email from the app", "Pipeline & calendar access", "Push notifications for new leads", "Point-of-sale functionality"],
  },
]

export function PlatformHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(255, 107, 0, 0.08), transparent), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(255, 107, 0, 0.04), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-24 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-accent text-primary mb-5">
          The Boost Platform
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-balance">
          One System to Run Your
          <br />
          <span className="gradient-text">Entire Business.</span>
        </h1>
        <p className="text-[19px] leading-relaxed text-foreground/70 mb-4 max-w-[680px] mx-auto">
          CRM. AI Employees. Marketing. Automation. Reputation. Payments. All in
          one platform -- so you can stop juggling 10 tools and start growing.
        </p>
        <p className="text-[15px] text-foreground/45 mb-10">
          Replaces HubSpot, Calendly, Mailchimp, ClickFunnels, Podium, and more.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#pricing"
            className="bg-primary text-primary-foreground px-9 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)]"
          >
            See Plans & Pricing
          </a>

        </div>

        {/* Icon bar */}
        <div className="flex justify-center gap-8 mt-16 flex-wrap">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 opacity-50"
              >
                <Icon className="w-6 h-6" />
                <span className="text-[11px] font-semibold tracking-[0.08em] uppercase text-foreground/40">
                  {f.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)
  const current = FEATURES[activeFeature]
  const Icon = current.icon

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0B1A2B 0%, #0F2035 100%)",
      }}
    >
      <div id="features" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-accent text-primary mb-4">
            Platform Features
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3">
            Everything You Need.{" "}
            <span className="gradient-text">Nothing You Don{"'"}t.</span>
          </h2>
          <p className="text-muted-foreground text-[17px] max-w-[600px] mx-auto">
            Click through each capability to see how the Boost Platform replaces
            your entire tech stack.
          </p>
        </div>

        {/* Feature tabs */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {FEATURES.map((f, i) => {
            const TabIcon = f.icon
            return (
              <button
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                  activeFeature === i
                    ? "bg-primary/15 border-primary text-primary"
                    : "border-foreground/8 text-foreground/50 hover:border-foreground/20 hover:text-foreground/80"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Feature detail */}
        <div className="bg-foreground/[0.03] border border-primary/12 rounded-[20px] p-8 lg:p-12 min-h-[320px]">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <h3 className="font-serif text-2xl lg:text-[28px] font-bold mb-4">
                {current.title}
              </h3>
              <p className="text-base leading-relaxed text-foreground/70 mb-7">
                {current.desc}
              </p>

            </div>
            <div className="flex-1 flex flex-col gap-3">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-[15px] text-foreground/75">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
