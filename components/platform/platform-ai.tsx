"use client"

import { Phone, MessageCircle, ClipboardList, Target, BookOpen, Settings } from "lucide-react"

const AI_EMPLOYEES = [
  { name: "Voice Agent", icon: Phone, desc: "Answers every inbound call, captures details, books appointments, and follows up. Your clients get a live voice -- not a voicemail -- 24 hours a day." },
  { name: "Chat Agent", icon: MessageCircle, desc: "Turns website visitors into booked appointments. Answers questions, qualifies leads, and hands off warm prospects to your team -- instantly." },
  { name: "Executive Assistant", icon: ClipboardList, desc: "Handles your inbox, calendar, follow-ups, and admin. Your team gets back 8-10 hours a week to focus on billable work." },
  { name: "Sales Acquisition Agent", icon: Target, desc: "Finds prospects, scores leads, and fills your pipeline without adding headcount. Your calendar stays full, your team stays focused." },
  { name: "Knowledge Base", icon: BookOpen, desc: "Your team stops asking the same questions. Policies, processes, pricing -- answers are instant and always up to date." },
  { name: "Operations Workflow", icon: Settings, desc: "Tasks get assigned, deadlines get tracked, handoffs happen automatically. No more things falling through the cracks." },
]

const REPLACES = [
  { tool: "HubSpot / Salesforce", category: "CRM", cost: "$50-300/mo" },
  { tool: "Calendly / Acuity", category: "Booking", cost: "$16-46/mo" },
  { tool: "Mailchimp / ActiveCampaign", category: "Email Marketing", cost: "$30-160/mo" },
  { tool: "ClickFunnels / Leadpages", category: "Funnels", cost: "$97-297/mo" },
  { tool: "Podium / Birdeye", category: "Reviews", cost: "$249-399/mo" },
  { tool: "DocuSign / PandaDoc", category: "Contracts", cost: "$25-65/mo" },
  { tool: "Squarespace / WordPress", category: "Website", cost: "$16-45/mo" },
  { tool: "PhoneBurner / CallRail", category: "Phone System", cost: "$69-149/mo" },
  { tool: "Zapier / Make", category: "Automations", cost: "$20-70/mo" },
  { tool: "Kajabi / Teachable", category: "Courses", cost: "$69-199/mo" },
]

export function AiEmployeesSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)",
      }}
    >
      <div id="ai-employees" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary mb-4">
            What Makes Us Different
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3 text-[#0B1A2B]">
            Other Platforms Give You Software.
            <br />
            <span className="gradient-text">We Give You a Workforce.</span>
          </h2>
          <p className="text-[#0B1A2B]/55 text-[17px] max-w-[640px] mx-auto">
            AI employees that live inside your platform -- answering calls,
            converting leads, managing operations. 24/7. Zero overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_EMPLOYEES.map((ai, i) => {
            const Icon = ai.icon
            return (
              <div
                key={i}
                className="p-8 bg-primary/[0.04] border border-primary/10 rounded-2xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                  <h4 className="font-serif text-lg font-bold text-[#0B1A2B]">
                    {ai.name}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-[#0B1A2B]/60">
                  {ai.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ReplacesSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0F2035 0%, #0B1A2B 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3">
            Stop Paying For{" "}
            <span className="gradient-text">10 Different Tools.</span>
          </h2>
          <p className="text-muted-foreground text-[17px]">
            The Boost Platform replaces your entire tech stack.
          </p>
        </div>

        <div className="bg-foreground/[0.03] rounded-2xl overflow-hidden border border-foreground/6">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-4 items-center px-6 py-4 bg-primary/8 border-b border-primary/20">
            {["Replaces", "Category", "Their Cost", "Boost Platform"].map(
              (h) => (
                <span
                  key={h}
                  className="text-[13px] font-bold uppercase tracking-[0.08em] text-primary"
                >
                  {h}
                </span>
              )
            )}
          </div>
          {REPLACES.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-2 sm:grid-cols-4 items-center px-6 py-4 border-b border-foreground/5 hover:bg-primary/[0.04] transition-colors gap-2"
            >
              <span className="text-[15px] font-semibold text-foreground/80">
                {r.tool}
              </span>
              <span className="text-sm text-muted-foreground">
                {r.category}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {r.cost}
              </span>
              <span className="text-sm font-bold text-primary">Included</span>
            </div>
          ))}
          {/* Total row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center px-6 py-4 bg-primary/[0.06] border-t-2 border-primary/30 gap-2">
            <span className="font-serif text-base font-bold">Total</span>
            <span />
            <span className="text-base font-bold text-foreground/60 line-through">
              $641-1,730/mo
            </span>
            <span className="font-serif gradient-text text-xl font-extrabold">
              Starting at $397/mo
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
