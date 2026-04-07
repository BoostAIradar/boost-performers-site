import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import {
  AuditHeroSection,
  IsThisYouSection,
  LeakingSection,
  HowItWorksSection,
  StatsBar,
  ReportSection,
  CaseStudySection,
  AuditGuySection,
  FaqSection,
  AuditFinalCtaSection,
} from "@/components/new-audit/audit-sections"

export const metadata: Metadata = {
  title: "Free AI Audit | Boost Performers",
  description:
    "See exactly where your Florida real estate litigation firm is leaking time and money. Free 90-120 minute working session with a written AI Capacity & Profit Report.",
}

export default function AIAuditPage() {
  return (
    <main>
      <SiteNav />
      <AuditHeroSection />
      <IsThisYouSection />
      <LeakingSection />
      <HowItWorksSection />
      <StatsBar />
      <ReportSection />
      <CaseStudySection />
      <AuditGuySection />
      <FaqSection />
      <AuditFinalCtaSection />
      <SharedFooter />
    </main>
  )
}
