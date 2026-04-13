import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import {
  AuditHeroSection,
  GuaranteeBlock,
  ProofSection,
  ZeroEffortBlock,
  HowItWorksSection,
  WhoThisIsForSection,
  AuditGuySection,
  FaqSection,
  AuditFinalCtaSection,
} from "@/components/new-audit/audit-sections"

export const metadata: Metadata = {
  title: "AI Audit | Boost Performers",
  description:
    "I'll find $10,000+/month your Florida real estate litigation firm is losing to manual work. 90-minute working session. Written report in 48 hours. $497 with a $10K guarantee.",
}

export default function AIAuditPage() {
  return (
    <main>
      <SiteNav />
      <AuditHeroSection />
      <GuaranteeBlock />
      <ProofSection />
      <ZeroEffortBlock />
      <HowItWorksSection />
      <WhoThisIsForSection />
      <AuditGuySection />
      <AuditFinalCtaSection />
      <FaqSection />
      <SharedFooter />
    </main>
  )
}
