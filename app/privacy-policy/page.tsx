import { SiteNav } from "@/components/site-nav"
import { SharedFooter } from "@/components/shared-footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Boost Performers",
  description: "Boost Performers Privacy Policy - how we collect, use, store, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white min-h-screen">
      <SiteNav />
      <div className="max-w-[800px] mx-auto px-6 pt-32 pb-20">
        <h1 className="font-serif text-3xl lg:text-[40px] font-bold text-[#0B1A2B] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6B7B8D] mb-10">Last Updated: October 17th, 2025</p>

        <div className="prose-custom space-y-8">
          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">1. Introduction</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">
              {"Boost Performers LLC (\"Boost Performers,\" \"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website www.boostperformers.com, book appointments, or opt in to receive SMS or email communications from us."}
            </p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">
              By using our website or opting into our communications, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">2. Information We Collect</h2>
            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2">a. Contact Information</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">We may collect personal information including, but not limited to:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">
              This information is collected when you submit a form, schedule an appointment, request information, or otherwise interact with our services.
            </p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">b. Communication Data</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">If you opt in to receive SMS or email communications, we collect and store:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Your consent preferences</li>
              <li>Message delivery records</li>
              <li>Opt-in and opt-out timestamps</li>
            </ul>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">c. Usage and Device Information</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">We may collect limited technical data such as:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Interaction data</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">This data is used for analytics, security, and website optimization.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">3. How We Use Your Information</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Confirm and remind you of scheduled appointments</li>
              <li>Send service-related communications</li>
              <li>Respond to inquiries and support requests</li>
              <li>Maintain compliance with legal and messaging regulations</li>
              <li>Improve our website and services</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3 font-semibold">We do not sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">4. SMS and Email Communications</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">If you opt in, Boost Performers may send you SMS or email messages related to:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Service-related updates</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">Message frequency may vary. Message and data rates may apply. Consent to receive messages is not a condition of purchase.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">5. Opt-Out and Consent Management</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">You may opt out of SMS communications at any time by replying STOP to any message. You may request assistance by replying HELP.</p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">Once you opt out, you will no longer receive SMS messages unless you opt in again.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">6. Data Sharing</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">We may share your information only with trusted service providers who assist in operating our website, scheduling, or messaging systems (such as SMS delivery platforms), and only as necessary to provide our services.</p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">All service providers are required to protect your information and comply with applicable laws.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">7. Mobile Information Sharing</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">We do not share, sell, rent, or disclose mobile phone numbers or SMS opt-in information to third parties for marketing or promotional purposes.</p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">Text messaging originator opt-in data and consent are excluded from any information sharing and will not be disclosed to third parties under any circumstances.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">8. Cookies and Tracking Technologies</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">We use cookies and similar tracking technologies to operate our website, analyze usage, and support our communications services, including Application-to-Person (A2P) messaging.</p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">What information is collected</h3>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>IP address</li>
              <li>Device and browser type</li>
              <li>Pages visited and interaction data</li>
              <li>Referral source</li>
              <li>Form submission activity (including when a user submits their phone number)</li>
            </ul>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">Purpose of cookies and tracking</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">We use cookies and tracking technologies to:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Ensure website functionality and security</li>
              <li>Monitor and prevent fraud or abuse of our messaging services</li>
              <li>Understand website usage and improve user experience</li>
              <li>Attribute opt-in events for A2P messaging compliance</li>
              <li>Maintain records of consent for SMS communications</li>
            </ul>

            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">If you provide your mobile number, we may use cookies, pixels, or server-side tracking to record the date, time, and source of your opt-in, associate consent with a specific web form or page, and support compliance with carrier, aggregator, and regulatory requirements.</p>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3 font-semibold">We do not use tracking technologies to send unsolicited messages.</p>

            <h3 className="font-semibold text-[#0B1A2B] text-[15px] mb-2 mt-4">Your choices</h3>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">You may control or delete cookies through your browser settings. Disabling cookies may affect website functionality or our ability to properly record SMS consent.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">9. Data Security</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, misuse, or disclosure.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">10. Your Rights</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <li>Access your personal information</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
            </ul>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed mt-3">To exercise these rights, contact us using the information below.</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">11. Updates to This Policy</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">{"We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated \"Last Updated\" date."}</p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-[#0B1A2B] mb-3">12. Contact Information</h2>
            <p className="text-[15px] text-[#3A4A5C] leading-relaxed">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <div className="mt-3 text-[15px] text-[#3A4A5C] leading-relaxed space-y-1">
              <p className="font-semibold">Boost Performers LLC</p>
              <p>Phone: (786) 305-7503</p>
              <p>Email: guy@boostperformers.com</p>
            </div>
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
