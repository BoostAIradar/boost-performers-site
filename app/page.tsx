import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import {
  NewHeroSection,
  ProductsSection,
  AuditSection,
  HowWeWorkSection,
  GuySection,
  FinalCtaSection,
} from "@/components/new-home/home-sections"

export default function Home() {
  return (
    <main>
      <SiteNav />
      <NewHeroSection />
      <ProductsSection />
      <AuditSection />
      <HowWeWorkSection />
      <GuySection />
      <FinalCtaSection />
      <SharedFooter />
    </main>
  )
}
