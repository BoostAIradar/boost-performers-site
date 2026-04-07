"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import type { BlogPost, ContentBlock } from "@/lib/blog-data"
import { getCategoryColor } from "@/lib/blog-data"

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="font-serif text-2xl lg:text-[28px] font-bold text-[#0B1A2B] mt-10 mb-4 leading-tight"
              >
                {block.text}
              </h2>
            )
          case "paragraph":
            return (
              <p key={i} className="text-[16px] leading-[1.85] text-[#3A4A5C] mb-5">
                {block.text}
              </p>
            )
          case "list":
            return (
              <ul key={i} className="mb-6 flex flex-col gap-3 pl-1">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 text-xs shrink-0">{">"}</span>
                    <span className="text-[15px] leading-[1.7] text-[#3A4A5C]">{item}</span>
                  </li>
                ))}
              </ul>
            )
          case "cta":
            return (
              <div
                key={i}
                className="my-8 p-7 rounded-xl text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0.02) 100%)",
                  border: "1px solid rgba(255,107,0,0.12)",
                }}
              >
                <p className="font-serif text-lg font-bold text-[#0B1A2B] mb-2">
                  Want to see how this applies to your business?
                </p>
                <p className="text-sm text-[#3A4A5C] mb-4">
                  Book a free discovery call and we will walk you through it.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-7 py-3 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all"
                >
                  Book a Discovery Call
                </Link>
              </div>
            )
          default:
            return null
        }
      })}
    </>
  )
}

export function BlogPostClient({
  post,
  related,
}: {
  post: BlogPost
  related: BlogPost[]
}) {
  const catColor = getCategoryColor(post.category)

  return (
    <main>
      <SiteNav />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: post.imageGradient, minHeight: "380px" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 mx-auto max-w-[800px] px-6 pt-32 pb-16">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 text-sm mb-6 hover:text-white transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Blog
          </Link>
          <div className="text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase mb-5"
              style={{ background: `${catColor}30`, color: "#fff", border: `1px solid ${catColor}50` }}
            >
              {post.category}
            </span>
            <h1 className="font-serif text-3xl lg:text-[44px] font-extrabold text-white leading-[1.15] mb-4 text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-white/75 max-w-[600px] mx-auto leading-relaxed">
              {post.subtitle}
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-white/50 text-sm">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {post.readTime} read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[720px] px-6 py-14 lg:py-20">
          {/* Authors */}
          <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-[#E8ECF0]">
            {post.authors.map((author, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: catColor }}
                >
                  {author.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1A2B]">{author.name}</p>
                  <p className="text-xs text-[#8A96A3]">{author.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <ContentRenderer blocks={post.content} />

          {/* Bottom CTA */}
          <div className="mt-12 pt-8 border-t border-[#E8ECF0] text-center">
            <p className="font-serif text-xl font-bold text-[#0B1A2B] mb-2">
              Ready to take the next step?
            </p>
            <p className="text-sm text-[#3A4A5C] mb-5">
              Talk to our team about how we can apply these strategies to your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-3.5 text-sm font-semibold rounded-md hover:bg-primary-hover transition-all"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: "#F7F8FA" }}>
          <div className="mx-auto max-w-[1200px] px-6 py-14 lg:py-20">
            <h2 className="font-serif text-2xl font-bold text-[#0B1A2B] mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                >
                  <div
                    className="h-[140px] relative"
                    style={{ background: r.imageGradient }}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-5">
                    <span
                      className="inline-block px-3 py-1 rounded text-[11px] font-bold tracking-wide uppercase mb-2"
                      style={{
                        background: `${getCategoryColor(r.category)}15`,
                        color: getCategoryColor(r.category),
                      }}
                    >
                      {r.category}
                    </span>
                    <h3 className="font-serif text-[15px] font-bold text-[#1B2B3A] leading-[1.35] mb-1.5">
                      {r.title}
                    </h3>
                    <span className="text-[12px] text-[#B0B8C4]">{r.readTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SharedFooter />
    </main>
  )
}
