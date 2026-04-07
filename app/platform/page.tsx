import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { PlatformHero, FeaturesSection } from "@/components/platform/platform-hero"
import { AiEmployeesSection, ReplacesSection } from "@/components/platform/platform-ai"
import { PricingSection, MarketingSection } from "@/components/platform/platform-pricing"
import { FaqSection, PlatformCta } from "@/components/platform/platform-faq"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "Boost Platform | All-in-One Business Operating System",
  description:
    "CRM, AI Employees, Marketing, Automation, Reputation, Payments -- all in one platform. Stop juggling 10 tools and start growing.",
}

export default function PlatformPage() {
  return (
    <main>
      <SiteNav />
      <PlatformHero />
      <FeaturesSection />
      <AiEmployeesSection />
      <ReplacesSection />
      <PricingSection />
      <MarketingSection />
      <FaqSection />
      <PlatformCta />
      <SharedFooter />
    </main>
  )
}
