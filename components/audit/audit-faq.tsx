"use client"

import { useState } from "react"
import Image from "next/image"
import { useSectionVisible } from "./audit-hero"

const FAQS = [
  {
    q: "How long will the report take to come through?",
    a: "Typically we generate your report within 2 weeks of the initial audit call. For more complex cases it may take an additional week.",
  },
  {
    q: "Do we have to use you to implement the suggestions?",
    a: "Not at all. You're welcome to take the report back to your team for internal implementation. However, if you do decide to use our services, your $1,500 audit fee is fully redeemable against any implementation project.",
  },
  {
    q: "What's the refund policy?",
    a: "Due to the nature of the project and the time involved in generating the report, we are unable to offer a refund. However, we are happy to clarify any aspect of the report during the debrief call.",
  },
  {
    q: "What aspects of my business will the report cover?",
    a: "The report covers 7 areas: Executive Summary, Current Business Analysis (operations, marketing, sales, team productivity, systems), AI & Automation Opportunities, Recommended Solutions, Impact & ROI Outlook, Implementation Roadmap (short-term quick wins, mid-term improvements, long-term automation), and Training & Adoption Guidance.",
  },
  {
    q: "What if I'm not sure AI is right for my business?",
    a: "That's exactly what the audit is for. We'll give you a clear, honest assessment of where AI fits and where it doesn't. If AI isn't the right move for certain areas, we'll tell you — and suggest better alternatives.",
  },
  {
    q: "How is this different from a free consultation?",
    a: "A free consultation is a sales call. This is a comprehensive 2-hour deep dive into your actual operations, followed by a custom implementation report you can act on immediately — whether you work with us or not.",
  },
]

export function FaqSection() {
  const visible = useSectionVisible("faq")
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section style={{ background: "linear-gradient(180deg, #0F2035 0%, #0B1A2B 100%)" }}>
      <div
        id="faq"
        className={`mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-5">
            FAQ
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold text-foreground">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-foreground/6">
              <button
                className="w-full py-6 flex justify-between items-center gap-4 text-left hover:text-primary transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h4 className="text-base font-semibold leading-snug text-foreground">
                  {faq.q}
                </h4>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#FF6B00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openFaq === i ? "max-h-[300px] pb-6" : "max-h-0"
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                <p className="text-[15px] leading-[1.75] text-foreground/60">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCtaSection() {
  return (
    <section className="bg-background relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,107,0,0.08), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-20 lg:py-[120px] text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase bg-primary/10 text-primary border border-primary/15 mb-6">
          Ready to Get Started?
        </span>
        <h2 className="font-serif text-3xl sm:text-[40px] lg:text-[46px] font-extrabold mb-4 leading-[1.1] text-foreground">
          Stop Guessing.
          <br />
          <span className="gradient-text">Start Knowing.</span>
        </h2>
        <p className="text-lg text-foreground/55 max-w-[520px] mx-auto mb-5">
          Your competitors are already exploring AI. Don&apos;t get left behind
          in the biggest technological transformation since the internet.
        </p>
        <p className="text-sm text-foreground/35 italic mb-10">
          Limited spots available to ensure premium service delivery.
        </p>
        <a
          href="#pricing"
          className="inline-block bg-gradient-to-br from-primary to-primary-hover text-primary-foreground px-12 py-[18px] text-[17px] font-semibold rounded-lg hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(255,107,0,0.35)] transition-all"
        >
          Book Your Audit Now
        </a>
      </div>
    </section>
  )
}

export function AuditFooter() {
  return (
    <footer className="bg-footer-bg border-t border-foreground/5 pt-12 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
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
          <p className="text-[13px] text-foreground/30">info@boostperformers.com</p>
        </div>
        <div className="flex gap-5">
          <a href="/privacy-policy" className="text-xs text-foreground/25 cursor-pointer hover:text-foreground/50 transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-xs text-foreground/25 cursor-pointer hover:text-foreground/50 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-4 pt-4 border-t border-foreground/4">
        <p className="text-xs text-foreground/20 text-center">
          &copy; 2026 Florida, Miami - All rights reserved.
        </p>
      </div>
    </footer>
  )
}
