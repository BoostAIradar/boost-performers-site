import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { AuditHero, IsThisYouSection } from "@/components/audit/audit-hero"
import { ProcessSection, WhyNowSection, ReportSection } from "@/components/audit/audit-process"
import { PerfectForSection, PricingSection, MeetGuySection } from "@/components/audit/audit-pricing"
import { FaqSection, FinalCtaSection } from "@/components/audit/audit-faq"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "AI & Automation Audit | Boost Performers",
  description:
    "Transform your business with a comprehensive AI & Automation Audit. Uncover hidden opportunities for efficiency, profit growth, and increased business value.",
}

export default function AIAuditLegacyPage() {
  return (
    <main>
      <SiteNav />
      <AuditHero />
      <IsThisYouSection />
      <ProcessSection />
      <WhyNowSection />
      <ReportSection />
      <PerfectForSection />
      <PricingSection />
      <MeetGuySection />
      <FaqSection />
      <FinalCtaSection />
      <SharedFooter />
    </main>
  )
}
