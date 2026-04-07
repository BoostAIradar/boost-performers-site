import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteNav } from "@/components/site-nav"
import { ContactHero } from "@/components/contact/contact-hero"
import { BookingSection, ContactFormSection } from "@/components/contact/contact-form"
import { SharedFooter } from "@/components/shared-footer"

export const metadata: Metadata = {
  title: "Contact Us | Boost Performers",
  description:
    "Book a free 15-minute discovery call or send us a message. No pitch, just clarity on your biggest growth constraint.",
}

export default function ContactPage() {
  return (
    <main>
      <SiteNav />
      <ContactHero />
      <Suspense fallback={<div className="min-h-[600px]" />}>
        <BookingSection />
      </Suspense>
      <ContactFormSection />
      <SharedFooter />
    </main>
  )
}
