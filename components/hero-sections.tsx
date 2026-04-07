"use client"

import { useEffect, useState } from "react"

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-accent text-accent-foreground">
      {children}
    </span>
  )
}

export function useSectionVisible(id: string) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [id])

  return visible
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[70px] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(255, 107, 0, 0.08), transparent), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(255, 107, 0, 0.04), transparent)",
          }}
        />
      </div>

      {/* Hero lines */}
      <svg
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d={`M${50 + i * 45},0 Q${300 + i * 20},300 ${50 + i * 45},600`}
            stroke="rgba(255,107,0,0.3)"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-24">
        <div className="max-w-[720px]">
          <p className="text-base font-semibold text-primary mb-6 tracking-wide">
            AI Systems. Real Humans. Real Results.
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-6 text-balance text-foreground">
            Your Business Is Leaking Time, Leads, and Money.
            <br />
            <span className="gradient-text">
              We Fix That With AI and Marketing That Actually Works.
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground mb-4 max-w-[600px]">
            Boost Performers deploys AI-powered employees and growth marketing
            systems — operated by real humans — so your business runs smarter,
            grows faster, and gives you back your freedom.
          </p>

          {/* Proof bar */}
          <div className="flex gap-6 flex-wrap mb-10 text-[13px] text-muted-foreground font-medium">
            <span>AI-Powered Execution</span>
            <span className="text-primary">{"•"}</span>
            <span>90-Day Implementation</span>
            <span className="text-primary">{"•"}</span>
            <span>Built by a Former PE CEO</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-primary text-primary-foreground px-9 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,0,0.3)] cursor-pointer inline-block">
              Book a Discovery Call
            </a>
            <a href="/ai-audit" className="border-2 border-primary text-primary px-8 py-3.5 text-base font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
              {"Get Your AI Audit — $497"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const PAIN_POINTS = [
  { icon: "clock", text: "Your team wastes hours on repetitive tasks that AI should be handling" },
  { icon: "chart", text: "Leads come in but follow-up is slow — or doesn't happen at all" },
  { icon: "target", text: "Your marketing is inconsistent and impossible to measure" },
  { icon: "cpu", text: "You know AI could help, but you have no idea where to start" },
  { icon: "zap", text: "Competitors are moving faster with leaner, more automated operations" },
]

function PainIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    chart: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
    ),
    target: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    cpu: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
    ),
    zap: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  }
  return <>{icons[type]}</>
}

export function PainPointsSection() {
  const visible = useSectionVisible("pain-points")

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F7F8FA 0%, #EEF0F4 100%)",
        position: "relative",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,107,0,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div
        id="pain-points"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.08)] text-primary border border-[rgba(255,107,0,0.12)] mb-5">
            Sound Familiar?
          </span>
          <h2 className="font-serif text-3xl lg:text-[42px] font-bold leading-tight mb-4 text-[#0B1A2B]">
            Still Running Your Business{" "}
            <span className="gradient-text">the Hard Way?</span>
          </h2>
          <div className="w-16 h-[3px] bg-primary rounded-sm mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {PAIN_POINTS.map((item, i) => (
            <div
              key={i}
              className={`pain-card ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} stagger-${i + 1}`}
              style={{ transition: `opacity 0.5s ease ${(i + 1) * 0.1}s, transform 0.5s ease ${(i + 1) * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(255,107,0,0.06)] border border-[rgba(255,107,0,0.1)] flex items-center justify-center shrink-0">
                  <PainIcon type={item.icon} />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-primary tracking-[1.5px] uppercase block mb-1.5">
                    {"✕"}
                  </span>
                  <p className="text-[15px] leading-relaxed text-[#3A4A5C]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 py-7 px-10 rounded-2xl border border-[rgba(255,107,0,0.1)] max-w-[700px] mx-auto"
          style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0.02) 100%)" }}
        >
          <p className="text-lg text-primary-hover font-semibold italic leading-relaxed">
            {"You didn't build your business to babysit broken processes."}
            <br />
            {"You built it for growth and freedom."}
          </p>
        </div>
      </div>
    </section>
  )
}

export function DifferentSection() {
  const visible = useSectionVisible("how-were-different")

  return (
    <section className="bg-background-alt">
      <div
        id="how-were-different"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mb-6 text-balance text-foreground">
            Most AI Agencies Hand You Tools.
            <br />
            <span className="gradient-text">
              We Rebuild How Your Business Runs.
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Anyone can sell you a chatbot or run ads. The difference is we come
            from inside the machine — private equity, operations, scaling
            companies, and engineering exits. We don&apos;t just plug in
            technology. We look at how your business actually operates, fix
            what&apos;s broken, and then deploy AI and marketing systems that
            accelerate growth.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            That&apos;s why our clients don&apos;t just get tools. They get a
            smarter, leaner business.
          </p>
        </div>
      </div>
    </section>
  )
}
