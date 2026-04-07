import Image from "next/image"
import Link from "next/link"

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
]

const SERVICES_LINKS = [
  { label: "AI Audit", href: "/ai-audit" },
  { label: "LegalEdge", href: "/legaledge" },
]

export function SharedFooter() {
  return (
    <footer className="border-t border-white/[0.06]" style={{ background: "#0B1420" }}>
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/boost-logo.png"
                alt="Boost Performers"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-[13px] text-white/40 leading-relaxed mt-3 max-w-[260px]">
              Eliminate the Busywork, Increase Online Presence. Boost Revenue & Margin.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Company
            </h4>
            {COMPANY_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[13px] text-white/40 mb-2.5 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Services
            </h4>
            {SERVICES_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-[13px] text-white/40 mb-2.5 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-bold mb-4 text-primary uppercase tracking-[0.08em]">
              Get in Touch
            </h4>
            <Link
              href="/contact"
              className="block text-[13px] text-white/40 mb-2.5 hover:text-primary transition-colors"
            >
              Book a Call
            </Link>
            <span className="block text-[13px] text-white/40 mb-2.5">
              (786) 305-7503
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between gap-3">
          <span className="text-xs text-white/30">
            &copy; 2026 Florida, Miami - All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white/30 hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
