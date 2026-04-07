"use client"

import Link from "next/link"
import Image from "next/image"
import { categoryColor } from "./blog-hero"
import { BLOG_POSTS } from "@/lib/blog-data"

const POPULAR = [
  { title: "Why Most Founders Stay Stuck at $500K, and What the Top 5% Do Differently", readTime: "7 min read", slug: "why-most-founders-stay-stuck" },
  { title: "How AI Voice Agents Are Transforming Law Firm Intake", readTime: "5 min read", slug: "ai-voice-agents-law-firm-intake" },
  { title: "The Real ROI of Digital Marketing for Small Business Owners", readTime: "6 min read", slug: "real-roi-digital-marketing" },
  { title: "How to Scale Beyond Founder Dependency in 90 Days", readTime: "8 min read", slug: "scale-beyond-founder-dependency" },
]

/* ─── Blog Grid + Sidebar ─── */
export function BlogGrid({
  activeCategory,
  searchQuery,
}: {
  activeCategory: string
  searchQuery: string
}) {
  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory)

  const searched = searchQuery
    ? filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filtered

  return (
    <section style={{ background: "#fff" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-10 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main grid */}
          <div className="flex-1 min-w-0">
            {searched.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {searched.map((post, i) => (
                  <Link
                    key={i}
                    href={`/blog/${post.slug}`}
                    className="rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] block"
                  >
                    {/* Image */}
                    <div
                      className="h-[180px] relative overflow-hidden"
                      style={{
                        background: post.imageGradient,
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[60px] h-[60px] rounded-xl bg-white/[0.08] backdrop-blur-sm" />
                      </div>
                      <div className="absolute top-2.5 right-2.5 w-[30px] h-[30px] rounded-md bg-white/[0.06]" />
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-4">
                      <span
                        className="inline-block px-3 py-1 rounded text-[11px] font-bold tracking-wide uppercase mb-2.5"
                        style={{
                          background: `${categoryColor(post.category)}15`,
                          color: categoryColor(post.category),
                        }}
                      >
                        {post.category}
                      </span>
                      <h3 className="font-serif text-[17px] font-bold text-[#1B2B3A] leading-[1.35] mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[13px] text-[#8A96A3] leading-relaxed mb-3.5">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-[12px] text-[#B0B8C4] flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {post.readTime}
                        </span>
                        <span className="text-[12px] text-[#B0B8C4] flex items-center gap-1">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#6B7B8D]">
                  No articles found. Try a different search or category.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-[280px] shrink-0 flex flex-col gap-6">
            {/* Ready to Scale CTA */}
            <div className="rounded-xl p-7 text-center" style={{ background: "#1B2B3A" }}>
              <svg className="mx-auto mb-3 text-primary" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <h3 className="font-serif text-xl font-extrabold text-white mb-2">
                Ready to Scale?
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                Book a free 15-minute discovery call.
              </p>
              <Link href="/contact" className="w-full bg-primary text-white px-5 py-3 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all cursor-pointer block text-center">
                Book a Call {"-->"}
              </Link>
            </div>

            {/* Weekly Insights */}
            <div className="rounded-xl p-7 border border-[#E8ECF0]">
              <svg className="mb-2 text-[#1B2B3A]" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              <h3 className="font-serif text-lg font-extrabold text-[#1B2B3A] mb-1">
                Weekly Insights
              </h3>
              <p className="text-[13px] text-[#6B7B8D] leading-relaxed mb-4">
                One email. One insight. Every week.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md border border-[#E0E4E8] text-sm outline-none mb-3 focus:border-primary placeholder:text-[#A0AAB4] text-[#1B2B3A]"
              />
              <button className="w-full py-3 rounded-md text-sm font-semibold text-white cursor-pointer transition-colors" style={{ background: "#1B2B3A" }}>
                Subscribe
              </button>
            </div>

            {/* Popular Articles */}
            <div className="rounded-xl p-7 border border-[#E8ECF0]">
              <h3 className="font-serif text-lg font-extrabold text-[#1B2B3A] mb-4">
                Popular Articles
              </h3>
              {POPULAR.map((article, i) => (
                <Link
                  key={i}
                  href={`/blog/${article.slug}`}
                  className={`py-3 block group ${
                    i < POPULAR.length - 1 ? "border-b border-[#F0F2F5]" : ""
                  }`}
                >
                  <h4 className="text-sm font-bold text-[#1B2B3A] leading-[1.4] mb-1 group-hover:text-primary transition-colors">
                    {article.title}
                  </h4>
                  <span className="text-[12px] text-[#B0B8C4]">
                    {article.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ─── Bottom CTA Banner ─── */
export function BlogCta() {
  return (
    <section className="px-6 lg:px-10 pb-20 mx-auto max-w-[1200px]">
      <div
        className="rounded-[20px] py-14 px-10 lg:px-16 text-center"
        style={{ background: "linear-gradient(135deg, #FF8533 0%, #FFAA33 40%, #FFD066 100%)" }}
      >
        <h2 className="font-serif text-[28px] lg:text-[36px] font-extrabold text-white mb-7">
          Ready to apply this to your business?
        </h2>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="px-8 py-4 text-[15px] font-semibold rounded-md text-white transition-all hover:-translate-y-0.5 cursor-pointer" style={{ background: "#1B2B3A" }}>
            Book a Discovery Call {"-->"}
          </Link>
          <Link href="/platform" className="px-8 py-4 text-[15px] font-semibold rounded-md border-2 border-white text-white transition-all hover:bg-white/10 cursor-pointer bg-transparent">
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
export function BlogFooter() {
  const FOOTER_COLS = [
    { title: "Company", items: ["Home", "Our Brand", "Solutions Hub", "Blog", "Contact Us", "Book a Call"] },
    { title: "Solutions", items: ["Business Coaching & Consulting", "AI Solutions", "Digital Marketing", "Cold Outreach", "Executive VA"] },
    { title: "AI Solutions", items: ["Voice Agent", "Chat Agent", "Executive Assistant", "Sales Acquisition", "Knowledge Base", "Content Engine", "Operations Workflow"] },
    { title: "Digital Marketing", items: ["Growth Foundation", "Growth Accelerator"] },
    { title: "Industries", items: ["Law Firms", "Accounting Firms", "Business Services", "Real Estate", "Retail", "Healthcare", "Transportation & Logistics", "Hospitality", "Construction & Trades", "Professional Services"] },
  ]

  return (
    <footer style={{ background: "#15202D" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <Image
                src="/images/boost-logo.png"
                alt="Boost Performers"
                width={100}
                height={42}
                className="h-7 w-auto"
              />
              <span className="text-white text-[10px] font-bold tracking-[2.5px] uppercase opacity-40">
                Performers
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-[1.7] mt-3">
              More Profit. Greater Value. More Freedom.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <span className="text-[12px] text-white/40">info@boostperformers.com</span>
              <span className="text-[12px] text-white/40">Contact via website</span>
              <span className="text-[12px] text-white/40">Global, Remote First</span>
            </div>
          </div>

          {FOOTER_COLS.map((col, i) => (
            <div key={i}>
              <h4 className="text-[13px] font-bold text-white mb-4">{col.title}</h4>
              {col.items.map((item, j) => (
                <a
                  key={j}
                  href="#"
                  className="block text-[13px] text-white/40 mb-2.5 hover:text-white/70 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/[0.06] flex justify-between flex-wrap gap-3">
          <span className="text-[12px] text-white/40">
            &copy; 2026 Florida, Miami - All rights reserved.
          </span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
