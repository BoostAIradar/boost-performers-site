"use client"

import { useState } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { useSectionVisible } from "./solutions-hero"

/* ─────────── PRICING TIERS ─────────── */
const TIERS = [
  {
    name: "Get Organized",
    desc: "For businesses that need a real system to stop losing leads",
    price: "$397",
    setup: "+ $500 one-time setup",
    popular: false,
    badge: null,
    features: [
      "Full CRM & Contact Management",
      "Pipeline & Deal Tracking",
      "Online Booking & Calendar",
      "Email & SMS Marketing",
      "Reputation Management",
      "Invoicing & Payments",
      "Website & Funnel Builder",
      "Mobile App",
      "Workflow Automations",
      "Base credits included",
    ],
    note: null,
  },
  {
    name: "Work Smarter",
    desc: "For businesses ready to let AI handle the busywork",
    price: "$597",
    setup: "+ $1,000 one-time setup",
    popular: true,
    badge: "Most Popular",
    features: [
      "Everything in Get Organized",
      "2-3 AI Employees (customized)",
      "AI-Powered Lead Follow-Up",
      "Smart Automations & Workflows",
      "AI Employee Dashboard",
      "Expanded credits included",
      "Email support",
    ],
    note: "AI Audit ($497) redeemable against setup",
  },
  {
    name: "Scale Faster",
    desc: "For businesses ready to run leaner with a full AI workforce",
    price: "$999",
    setup: "+ $2,500 one-time setup",
    popular: false,
    badge: "Full AI Suite",
    features: [
      "Everything in Work Smarter",
      "All 6 AI Employees deployed",
      "Unlimited custom workflows",
      "White-glove onboarding",
      "Dedicated success manager",
      "Priority support",
      "Custom integrations",
    ],
    note: null,
  },
]

export function SolutionsPricing() {
  const { visible } = useSectionVisible("solutions-tiers")

  return (
    <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <div
        id="solutions-tiers"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-28 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3 text-[#0B1A2B]">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-[#0B1A2B]/55 text-[17px]">
            No hidden fees. No long-term contracts. Pick the plan that fits where you are right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {TIERS.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-[20px] p-10 transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "bg-white border-2 border-primary shadow-[0_20px_60px_rgba(0,0,0,0.08)] scale-[1.02]"
                  : "bg-white border border-[#0B1A2B]/8"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-[20px]" />
              )}
              {tier.badge && (
                <div className="absolute top-4 right-4">
                  <span
                    className={`text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-[0.08em] ${
                      tier.popular
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              <h3 className="font-serif text-[22px] font-bold text-[#0B1A2B] mb-1">
                {tier.name}
              </h3>
              <p className="text-sm text-[#0B1A2B]/50 mb-6">{tier.desc}</p>

              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`font-serif text-5xl font-extrabold ${
                    tier.popular ? "gradient-text" : "text-[#0B1A2B]"
                  }`}
                >
                  {tier.price}
                </span>
                <span className="text-base text-[#0B1A2B]/50">/month</span>
              </div>
              <p className="text-[13px] text-[#0B1A2B]/40 mb-7">
                {tier.setup}
              </p>

              <div className="border-t border-[#0B1A2B]/8 pt-6 mb-7">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3 mb-3">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span
                      className={`text-sm text-[#0B1A2B]/70 ${
                        j === 0 && i > 0 ? "font-semibold" : ""
                      }`}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {tier.note && (
                <div className="p-3 bg-primary/8 rounded-lg mb-5 text-center">
                  <span className="text-[13px] text-primary font-semibold">
                    {tier.note}
                  </span>
                </div>
              )}

              <a
                href="/contact"
                className={`w-full text-center py-3.5 text-sm font-semibold rounded-md transition-all cursor-pointer hover:-translate-y-0.5 block ${
                  tier.popular
                    ? "bg-primary text-white hover:bg-primary-hover hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)]"
                    : "border-2 border-primary text-primary hover:bg-primary/10"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Comparison bar */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/[0.04] border border-primary/20 rounded-2xl py-8 px-10 text-center">
          <p className="text-[15px] text-[#0B1A2B]/55 mb-2">
            Still thinking about hiring?
          </p>
          <p className="text-lg font-semibold text-[#0B1A2B]">
            A part-time admin costs{" "}
            <span className="text-primary font-bold">$3,500/month</span>, drops
            the ball on follow-up, and takes vacation.
            <br />
            Your AI team costs{" "}
            <span className="gradient-text font-bold">$999/mo</span> -- and
            never sleeps.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────── FAQ ─────────── */
const FAQS = [
  { q: "How much does it cost?", a: "Pricing depends on the tier and number of AI Employees you need. Starter plans begin at $497/mo. Book a discovery call for a custom quote." },
  { q: "How long does setup take?", a: "Most AI Employees go live within 7 days. We handle all configuration, scripting, and integration setup." },
  { q: "What if it doesn't work for my business?", a: "We offer a 60-day performance guarantee. If the AI doesn't deliver measurable results, your setup fee is refunded." },
  { q: "Will it integrate with my current tools?", a: "Yes. We integrate with CRMs, Google Calendar, Slack, Zapier, HubSpot, Salesforce, and most business tools." },
  { q: "Do I need technical knowledge?", a: "Not at all. We handle all setup, configuration, and ongoing management. You get a dedicated account manager." },
  { q: "Can I start with one agent and add more later?", a: "Absolutely. Most clients start with Voice or Chat Agent and expand as they see results. Upgrading tiers is seamless." },
]

export function SolutionsFaq() {
  const { visible } = useSectionVisible("solutions-faq")
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section style={{ background: "#FFFFFF" }}>
      <div
        id="solutions-faq"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[100px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            FAQ
          </span>
          <h2 className="font-serif text-3xl lg:text-[44px] font-extrabold leading-tight text-[#0B1A2B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[700px] mx-auto flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className={`rounded-xl px-6 py-5 cursor-pointer transition-all border ${
                openIdx === i
                  ? "bg-[#FFF8F3] border-[rgba(255,107,0,0.2)]"
                  : "bg-[#F8F9FB] border-transparent hover:border-[rgba(255,107,0,0.15)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-base font-bold text-[#0B1A2B]">{faq.q}</h3>
                <span
                  className="text-[#6B7B8D] text-lg shrink-0 ml-4 transition-transform duration-300"
                  style={{ transform: openIdx === i ? "rotate(180deg)" : "rotate(0)" }}
                >
                  {'v'}
                </span>
              </div>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: openIdx === i ? 200 : 0 }}
              >
                <p className="text-sm text-[#6B7B8D] leading-relaxed pt-3">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────── CTA ─────────── */
export function SolutionsCta() {
  const { visible } = useSectionVisible("solutions-cta")

  return (
    <section style={{ background: "linear-gradient(180deg, #0B1A2B 0%, #0F2035 100%)" }}>
      <div
        id="solutions-cta"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[100px] text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Limited Availability */}
        <div className="bg-primary/[0.06] border border-primary/15 rounded-2xl px-8 py-8 max-w-[600px] mx-auto mb-14">
          <div className="text-[13px] font-bold text-primary tracking-[1.5px] uppercase mb-2">Limited Availability</div>
          <h3 className="font-serif text-[22px] font-extrabold text-foreground mb-2">
            We Only Onboard 3-4 New Clients Per Month
          </h3>
          <p className="text-sm text-foreground/45 leading-relaxed">
            Each AI deployment is custom-built for your business. To maintain quality, we limit onboarding capacity.
          </p>
        </div>

        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
          Ready to Automate?
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-[1.12] text-foreground mb-5 text-balance">
          Never Lose Another Lead Again.
        </h2>
        <p className="text-[17px] text-foreground/45 max-w-[520px] mx-auto leading-relaxed mb-9">
          Start automating in 7 days. 60-day performance guarantee. Zero risk.
        </p>
        <a href="/contact" className="bg-primary text-primary-foreground px-10 py-[18px] text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
          Book Your Discovery Call
        </a>
        <p className="text-[13px] text-foreground/25 mt-4">
          15-minute call - No obligation - Custom strategy session
        </p>
      </div>
    </section>
  )
}

/* ─────────── FOOTER ─────────── */
const FOOTER_COLS = [
  { title: "Company", items: ["Home", "Our Brand", "Solutions Hub", "Blog", "Contact Us"] },
  { title: "Solutions", items: ["Business Coaching", "AI Solutions", "Digital Marketing", "Cold Outreach"] },
  { title: "AI Solutions", items: ["Voice Agent", "Chat Agent", "Executive Assistant", "Sales Acquisition", "Knowledge Base", "Operations Workflow"] },
  { title: "Digital Marketing", items: ["Growth Foundation", "Growth Accelerator"] },
  { title: "Industries", items: ["Law Firms", "Accounting", "Real Estate", "Healthcare", "Construction"] },
]

export function SolutionsFooter() {
  return (
    <footer style={{ background: "#060E18" }}>
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <Image
                src="/images/boost-logo.png"
                alt="Boost Performers"
                width={100}
                height={42}
                className="h-7 w-auto"
              />
              <span className="text-foreground text-xs font-semibold tracking-[0.15em] uppercase">
                Performers
              </span>
            </div>
            <p className="text-[13px] text-foreground/40 leading-relaxed mt-3">
              More Profit. Greater Value. More Freedom.
            </p>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold text-foreground mb-4">{col.title}</h4>
              {col.items.map((item) => (
                <a key={item} href="#" className="block text-[13px] text-foreground/40 mb-2.5 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-foreground/[0.06] flex flex-wrap justify-between gap-3">
          <span className="text-xs text-foreground/40">&copy; 2026 Florida, Miami - All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-xs text-foreground/40 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-xs text-foreground/40 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
