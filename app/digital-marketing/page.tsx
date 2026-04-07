import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { MarketingHero, MarketingPainPoints } from "@/components/marketing/marketing-hero"
import { MarketingDifference, MarketingPlans } from "@/components/marketing/marketing-plans"
import { MarketingIncluded, MarketingActivity } from "@/components/marketing/marketing-included"
import { MarketingCaseStudy, MarketingEcosystem, MarketingCTA } from "@/components/marketing/marketing-results"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "Digital Marketing Services | Boost Performers",
  description:
    "SEO, PPC, social media, content, and email marketing managed by a results-driven team. Two packages to build and scale your digital presence.",
}

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <SiteNav />
      <MarketingHero />
      <MarketingPainPoints />
      <MarketingDifference />
      <MarketingPlans />
      <MarketingIncluded />
      <MarketingActivity />
      <MarketingCaseStudy />
      <MarketingEcosystem />
      <MarketingCTA />
      <SharedFooter />
    </main>
  )
}
