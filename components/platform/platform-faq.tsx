"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const FAQS = [
  { q: "What exactly is the Boost Platform?", a: "The Boost Platform is an all-in-one business operating system that combines your CRM, communications, calendar, marketing, automation, reputation management, invoicing, and AI employees into a single platform. Instead of paying for 8-10 separate tools, you get everything in one place -- fully managed and set up for your business." },
  { q: "How is this different from just using HubSpot or GoHighLevel?", a: "Two things: AI employees and done-for-you setup. Most CRM platforms give you a blank canvas and say 'good luck.' We build your system, deploy AI employees trained on your business, and make sure everything is working before you go live. The platform is the engine. We make sure it runs." },
  { q: "What are AI Employees?", a: "AI Employees are intelligent agents that handle real business tasks -- answering phone calls, responding to website chats, following up with leads, managing your calendar, and automating operations. They're trained on your business, your services, and your tone of voice. Available 24/7 with zero overhead." },
  { q: "Do I need to be tech-savvy to use this?", a: "No. We set everything up for you and train your team on how to use it. The platform is intuitive -- if you can use a smartphone, you can use the Boost Platform. Plus, we're always a call away if you need help." },
  { q: "What are credits and how do they work?", a: "Credits cover usage costs for phone calls, text messages, and emails sent through the platform. Each plan includes a base credit allotment. If you exceed it, additional usage is billed at cost -- no markup. Most small businesses stay well within the included credits." },
  { q: "Can I add marketing services later?", a: "Absolutely. Our Growth Foundation and Growth Accelerator marketing packages are designed to plug directly into the Boost Platform. Your marketing feeds leads straight into your CRM and AI employees handle the follow-up. Book a strategy call and we'll scope what makes sense for your business." },
  { q: "Is there a contract?", a: "Platform subscriptions are month-to-month after an initial 3-month commitment. Setup fees are one-time. You can upgrade, downgrade, or cancel with 30 days notice." },
  { q: "How long does setup take?", a: "Depending on your plan, setup takes 1-3 weeks. The Get Organized tier is the fastest -- we can have you live in about a week. AI Powered and Scale Faster tiers involve custom AI employee configuration, which takes a bit longer to get dialed in properly." },
]

export function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)",
      }}
    >
      <div id="faq" className="mx-auto max-w-[1200px] px-6 py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold text-[#0B1A2B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl mb-3 overflow-hidden transition-all duration-300 ${
                activeFaq === i
                  ? "border-primary/30"
                  : "border-[#0B1A2B]/8 hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-[15px] text-[#0B1A2B] pr-4">
                  {faq.q}
                </span>
                <span
                  className="text-primary text-xl transition-transform duration-300 shrink-0"
                  style={{
                    transform:
                      activeFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {activeFaq === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-[#0B1A2B]/60">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PlatformCta() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,107,0,0.08), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 lg:py-28 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold mb-4 text-balance">
          Ready to run your business{" "}
          <span className="gradient-text">from one platform?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-[560px] mx-auto">
          Stop duct-taping tools together. Get the platform, the AI, and the
          team to make it all work.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#pricing"
            className="bg-primary text-primary-foreground px-10 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)]"
          >
            Get Started Today
          </a>

        </div>
      </div>
    </section>
  )
}

export function PlatformFooter() {
  return (
    <footer className="bg-footer-bg border-t border-foreground/6">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
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
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-[280px]">
              AI Employees + Growth Marketing. Eliminate the busywork. Boost
              revenue & margin.
            </p>
            <p className="text-[13px] text-foreground/40">
              info@boostperformers.com
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Platform
            </h4>
            {["Features", "AI Employees", "Pricing", "Integrations"].map(
              (item) => (
                <p
                  key={item}
                  className="text-sm text-muted-foreground mb-2.5 cursor-pointer hover:text-foreground transition-colors"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Services
            </h4>
            {["AI Solutions", "Growth Foundation", "Growth Accelerator", "AI Audit"].map(
              (item) => (
                <p
                  key={item}
                  className="text-sm text-muted-foreground mb-2.5 cursor-pointer hover:text-foreground transition-colors"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Company
            </h4>
            {[
              { label: "Home", href: "/" },
              { label: "Platform", href: "/platform" },
              { label: "Blog", href: "#" },
              { label: "Contact Us", href: "#" },
              { label: "Book a Call", href: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-muted-foreground mb-2.5 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-foreground/6 flex flex-wrap justify-between gap-3">
          <p className="text-xs text-foreground/30">
            &copy; 2026 Florida, Miami - All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-xs text-foreground/30 cursor-pointer hover:text-foreground/50 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs text-foreground/30 cursor-pointer hover:text-foreground/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
