import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Boost Performers",
  description: "Boost Performers Terms and Conditions governing website use and communications.",
}

export default function TermsOfServicePage() {
  return (
    <main className="bg-white min-h-screen">
      <SiteNav />
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <h1 className="font-serif text-3xl lg:text-[40px] font-bold text-[#0B1A2B] mb-2">Terms and Conditions</h1>
        <p className="text-sm text-[#6B7B8D] mb-10">Last Updated: October 17th, 2025</p>

        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">1. Acceptance of Terms</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              These Terms and Conditions govern your use of the Boost Performers LLC website (www.boostperformers.com) and participation in our SMS and email communications.
            </p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">
              By using our website or opting into our communications, you agree to these Terms and our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">2. Services</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              Boost Performers provides consulting, advisory, and technology-enabled services. Appointment scheduling and related communications are offered to support these services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">3. SMS Messaging Program</h2>
            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2">Program Description</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">Boost Performers may send SMS messages to users who have opted in. Messages may include:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Service-related updates</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">{"Message frequency & data rate may vary."}</p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">Consent</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">By providing your phone number and opting in, you authorize Boost Performers to send SMS messages to your mobile number. Consent is not a condition of purchase.</p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">Opt-Out</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">You may opt out of SMS messages at any time by replying STOP. After opting out, you will receive a confirmation message and no further messages will be sent.</p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">Help</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">For assistance, reply HELP or contact us directly.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">4. User Responsibilities</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              You agree to provide accurate contact information and to use our website and communications in compliance with all applicable laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">5. Limitation of Liability</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              Boost Performers is not responsible for delays, delivery failures, or message errors caused by mobile carriers or third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">6. Intellectual Property</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              All content on this website, including text, logos, and materials, is the property of Boost Performers LLC and may not be copied or reused without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">7. Age Restriction</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              This website and its services are intended solely for individuals who are 18 years of age or older. By accessing or using this website, you represent and warrant that you are at least 18 years old. We do not knowingly collect, use, or disclose personal information from individuals under the age of 18. If we become aware that we have collected personal data from someone under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">8. Changes to Terms</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              We reserve the right to update these Terms at any time. Continued use of our services constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">9. Contact Information</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">Questions about these Terms can be sent to:</p>
            <div className="mt-3 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <p className="font-semibold">Boost Performers LLC</p>
              <p>Phone: (786) 305-7503</p>
              <p>Email: guy@boostperformers.com</p>
            </div>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">
              If you have any questions regarding privacy, please read our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E8ECF0]">
          <Link href="/" className="text-primary text-sm font-semibold hover:underline">
            {"<-- Back to Home"}
          </Link>
        </div>
      </div>
      <SharedFooter />
    </main>
  )
}
