import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SolutionsHero, SolutionsPainPoints } from "@/components/solutions/solutions-hero"
import { SolutionsAgents, SolutionsResults } from "@/components/solutions/solutions-agents"
import { SolutionsPricing, SolutionsFaq, SolutionsCta } from "@/components/solutions/solutions-pricing"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "AI Solutions | Boost Performers",
  description:
    "AI Employees that work 24/7. Voice, chat, sales, admin, knowledge, and operations -- handled by AI, managed by real humans. Deploy in 7 days.",
}

export default function AISolutionsPage() {
  return (
    <main>
      <SiteNav />
      <SolutionsHero />
      <SolutionsPainPoints />
      <SolutionsAgents />
      <SolutionsResults />
      <SolutionsPricing />
      <SolutionsFaq />
      <SolutionsCta />
      <SharedFooter />
    </main>
  )
}
