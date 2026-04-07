"use client"

import { useState } from "react"
import { SiteNav } from "@/components/site-nav"
import { BlogHero, BlogFeatured, BlogCategoryBar } from "@/components/blog/blog-hero"
import { BlogGrid, BlogCta } from "@/components/blog/blog-content"
import { SharedFooter } from "@/components/shared-footer"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main>
      <SiteNav />
      <BlogHero />
      <BlogFeatured />
      <BlogCategoryBar
        active={activeCategory}
        setActive={setActiveCategory}
        search={searchQuery}
        setSearch={setSearchQuery}
      />
      <BlogGrid activeCategory={activeCategory} searchQuery={searchQuery} />
      <BlogCta />
      <SharedFooter />
    </main>
  )
}
