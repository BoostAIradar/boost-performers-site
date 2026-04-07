"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

/* ─── Scroll hook ─── */
function useSectionVisible(id: string) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = document.getElementById(id)
    if (!el) { setVisible(true); return }
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [id])
  return visible
}

/* ─── Data ─── */
const CATEGORIES = [
  "All",
  "Leadership Mindset",
  "Financial Clarity",
  "Systems & Operations",
  "AI Automation",
  "Digital Marketing",
  "Industry Insights",
  "Freedom & Lifestyle",
]

const FEATURED_POST = {
  category: "Leadership Mindset",
  title: "Why Most Founders Stay Stuck at $500K, and What the Top 5% Do Differently",
  excerpt:
    "Most founders hit a ceiling not because of market conditions, but because they've built a business around themselves instead of around systems. Here's how to break through.",
  readTime: "7 min",
  date: "Feb 17, 2026",
}

export function categoryColor(cat: string) {
  const map: Record<string, string> = {
    "Leadership Mindset": "#E8A020",
    "Financial Clarity": "#2AAA6A",
    "Systems & Operations": "#3A8AD0",
    "AI Automation": "#1B6B9A",
    "Digital Marketing": "#4A8A4A",
    "Industry Insights": "#D07A2A",
    "Freedom & Lifestyle": "#7A5AAA",
  }
  return map[cat] || "#FF6B00"
}

/* ─── Hero Banner ─── */
export function BlogHero() {
  const visible = useSectionVisible("blog-hero")

  return (
    <section
      id="blog-hero"
      style={{ background: "#1B2B3A", position: "relative", overflow: "hidden", paddingTop: 80 }}
    >
      {/* Mosaic background */}
      <div
        className="absolute inset-0 grid grid-cols-8 grid-rows-3 gap-1 opacity-[0.12] p-2.5"
        aria-hidden="true"
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md"
            style={{ background: `hsl(${200 + i * 6}, ${30 + i * 2}%, ${25 + (i % 4) * 10}%)` }}
          />
        ))}
      </div>

      <div
        className={`relative z-10 py-14 lg:py-16 px-6 text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-serif text-[32px] lg:text-[46px] font-extrabold text-white leading-[1.15] mb-4">
          Insights for Founders Who
          <br />
          Want More Freedom.
        </h1>
        <p className="text-lg text-white/50 font-medium">
          Strategy. Systems. AI. Marketing. Leadership.
        </p>
      </div>
    </section>
  )
}

/* ─── Featured Post ─── */
export function BlogFeatured() {
  return (
    <section style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          {/* Image placeholder */}
          <div
            className="w-full lg:w-1/2 rounded-2xl overflow-hidden relative"
            style={{
              background: "linear-gradient(135deg, #2A6BAA 0%, #1B4B7A 40%, #E8A020 100%)",
              height: 340,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#E8A020] to-primary opacity-30" />
            </div>
            <div className="absolute bottom-5 left-5 flex gap-1.5">
              {[0.08, 0.12, 0.16].map((op, i) => (
                <div
                  key={i}
                  className="w-[50px] h-[50px] rounded-lg backdrop-blur-sm"
                  style={{ background: `rgba(255,255,255,${op})` }}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <span
              className="inline-block px-3 py-1 rounded text-[11px] font-bold tracking-wide uppercase mb-4"
              style={{
                background: `${categoryColor(FEATURED_POST.category)}15`,
                color: categoryColor(FEATURED_POST.category),
              }}
            >
              {FEATURED_POST.category}
            </span>
            <Link href="/blog/why-most-founders-stay-stuck">
              <h2 className="font-serif text-[26px] lg:text-[30px] font-extrabold text-primary leading-[1.25] mb-4 cursor-pointer hover:text-primary-hover transition-colors">
                {FEATURED_POST.title}
              </h2>
            </Link>
            <p className="text-[15px] text-[#6B7B8D] leading-[1.7] mb-5">
              {FEATURED_POST.excerpt}
            </p>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[13px] text-[#9BA8B5] flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {FEATURED_POST.readTime}
              </span>
              <span className="text-[13px] text-[#9BA8B5] flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {FEATURED_POST.date}
              </span>
            </div>
            <Link
              href="/blog/why-most-founders-stay-stuck"
              className="text-primary font-semibold text-[15px] inline-flex items-center gap-1.5 hover:text-primary-hover transition-colors"
            >
              Read Article <span>{"-->"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Category Tabs + Search ─── */
export function BlogCategoryBar({
  active,
  setActive,
  search,
  setSearch,
}: {
  active: string
  setActive: (c: string) => void
  search: string
  setSearch: (s: string) => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="sticky top-[72px] z-50 border-b border-[#E8ECF0]"
      style={{ background: "#fff" }}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex items-center gap-4 py-4">
          <div
            ref={scrollRef}
            className="flex gap-1 flex-1 overflow-x-auto scrollbar-none"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full font-semibold text-sm cursor-pointer transition-all whitespace-nowrap ${
                  active === cat
                    ? "bg-primary text-white shadow-[0_2px_12px_rgba(255,107,0,0.3)]"
                    : "bg-[#F0F2F5] text-[#3A4A5C] hover:text-[#1B2B3A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative shrink-0 hidden sm:block" style={{ width: 200 }}>
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0AAB4]"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-2.5 pl-9 pr-4 rounded-lg border border-[#E0E4E8] text-sm outline-none transition-colors focus:border-primary placeholder:text-[#A0AAB4] text-[#1B2B3A]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
