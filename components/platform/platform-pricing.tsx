"use client"

import { Check } from "lucide-react"

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

const FOUNDATION_FEATURES = [
  "Social Media Management (4 posts/week)",
  "SEO On-Page Optimization",
  "Content -- 2 long-form articles + 4 micro-content/month",
  "Google My Business Management",
  "Local Marketing & Citation Building",
  "Review Management & Response Drafting",
  "Website Optimization & Maintenance",
  "Monthly Performance Reporting",
]

const ACCELERATOR_FEATURES = [
  "Everything in Growth Foundation",
  "Enhanced Social Media (5/week + dynamic posts)",
  "Off-Page SEO & Link Building (10-15 links/month)",
  "Enhanced Content (3 articles + 6 micro/month)",
  "Newsletter Campaign Management",
  "PPC / Google Ads Management (up to 4 campaigns)",
  "Enhanced Local SEO & Landing Pages",
  "Review Generation Campaigns",
  "Quarterly Strategy Review",
]

export function PricingSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)",
      }}
    >
      <div id="pricing" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3 text-[#0B1A2B]">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-[#0B1A2B]/55 text-[17px]">
            No hidden fees. No long-term contracts. Pick the plan that fits
            where you are right now.
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

export function MarketingSection() {
  return (
    <section style={{ background: "#0F2035" }}>
      <div id="marketing" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-accent text-primary mb-4">
            Add-On Services
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-3">
            Growth Marketing{" "}
            <span className="gradient-text">That Plugs Right In.</span>
          </h2>
          <p className="text-muted-foreground text-[17px] max-w-[600px] mx-auto">
            Your marketing feeds leads directly into the Boost Platform. AI
            employees handle the follow-up. Everything works together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Growth Foundation */}
          <div className="flex-1 bg-gradient-to-br from-foreground/5 to-foreground/2 border border-foreground/8 rounded-2xl p-9 transition-all duration-300 hover:border-primary/30">
            <h3 className="font-serif text-[22px] font-bold mb-2">
              Growth Foundation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Build a strong digital presence and organic visibility.
            </p>
            <div className="border-t border-foreground/8 pt-5">
              {FOUNDATION_FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/65">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Accelerator */}
          <div className="flex-1 bg-gradient-to-br from-foreground/5 to-foreground/2 border border-primary/15 rounded-2xl p-9 transition-all duration-300 hover:border-primary/30">
            <h3 className="font-serif text-[22px] font-bold mb-2">
              Growth Accelerator
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Everything in Foundation, plus aggressive scaling.
            </p>
            <div className="border-t border-primary/10 pt-5">
              {ACCELERATOR_FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-3 mb-3">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span
                    className={`text-sm text-foreground/65 ${
                      i === 0 ? "font-semibold" : ""
                    }`}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="bg-primary text-primary-foreground px-10 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] cursor-pointer inline-block">
            Book a Strategy Call
          </a>
          <p className="text-[13px] text-muted-foreground mt-3">
            Marketing services are scoped and priced based on your business.
            Let{"'"}s talk.
          </p>
        </div>
      </div>
    </section>
  )
}
