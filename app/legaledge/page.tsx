import type { Metadata } from "next"
import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import {
  LegalEdgeHeroSection,
  LegalEdgeLeakingSection,
  ProblemSolutionSection,
  LexSystemSection,
  MatterIntelligenceSection,
  RiskSection,
  LegalEdgeGuySection,
  LegalEdgeFaqSection,
  StartFreeSection,
} from "@/components/legaledge/legaledge-sections"

export const metadata: Metadata = {
  title: "LegalEdge | Deep Workflow AI for Florida Real Estate Litigation",
  description:
    "LEX reads, drafts, flags, and organizes every matter. Recover 40+ hours of paralegal time per month. Built for Florida HOA foreclosure, eviction, and closings.",
}

export default function LegalEdgePage() {
  return (
    <main>
      <SiteNav />
      <LegalEdgeHeroSection />
      <LegalEdgeLeakingSection />
      <ProblemSolutionSection />
      <LexSystemSection />
      <MatterIntelligenceSection />
      <RiskSection />
      <LegalEdgeGuySection />
      <LegalEdgeFaqSection />
      <StartFreeSection />
      <SharedFooter />
    </main>
  )
}
