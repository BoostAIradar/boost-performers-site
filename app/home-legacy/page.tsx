import { SiteNav } from "@/components/site-nav"
import { HeroSection, PainPointsSection, DifferentSection } from "@/components/hero-sections"
import { ServicesSection, HowItWorksSection } from "@/components/services-sections"
import { IndustriesSection } from "@/components/audit-industries-sections"
import { TeamSection, CtaSection } from "@/components/team-footer-sections"
import { SharedFooter } from "@/components/shared-footer"

export default function HomeLegacy() {
  return (
    <main>
      <SiteNav />
      <HeroSection />
      <PainPointsSection />
      <DifferentSection />
      <ServicesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <TeamSection />
      <CtaSection />
      <SharedFooter />
    </main>
  )
}
