import Image from "next/image"

const FOOTER_COLS = [
  { title: "Company", items: ["Home", "Our Brand", "Solutions Hub", "Blog", "Contact Us", "Book a Call"] },
  { title: "Solutions", items: ["Business Coaching & Consulting", "AI Solutions", "Digital Marketing", "Cold Outreach", "Executive VA"] },
  { title: "AI Solutions", items: ["Voice Agent", "Chat Agent", "Executive Assistant", "Sales Acquisition", "Knowledge Base", "Content Engine", "Operations Workflow"] },
  { title: "Digital Marketing", items: ["Growth Foundation", "Growth Accelerator"] },
  { title: "Industries", items: ["Law Firms", "Accounting Firms", "Business Services", "Real Estate", "Retail", "Healthcare", "Transportation & Logistics", "Hospitality", "Construction & Trades", "Professional Services"] },
]

export function ContactFooter() {
  return (
    <footer style={{ background: "#15202D", color: "rgba(255,255,255,0.4)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <Image
                src="/images/boost-logo.png"
                alt="Boost Performers"
                width={100}
                height={42}
                className="h-7 w-auto"
              />
              <span className="text-foreground text-xs font-semibold tracking-[0.15em] uppercase">
                Performers
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mt-3 text-[rgba(255,255,255,0.4)]">
              More Profit. Greater Value. More Freedom.
            </p>
            <div className="mt-4 flex flex-col gap-1.5">
              <span className="text-xs text-[rgba(255,255,255,0.4)]">info@boostperformers.com</span>
              <span className="text-xs text-[rgba(255,255,255,0.4)]">Contact via website</span>
              <span className="text-xs text-[rgba(255,255,255,0.4)]">Global, Remote First</span>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold text-white mb-4">{col.title}</h4>
              {col.items.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-[13px] text-[rgba(255,255,255,0.4)] mb-2.5 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between gap-3">
          <span className="text-xs text-[rgba(255,255,255,0.4)]">
            {"© 2026 Florida, Miami - All rights reserved."}
          </span>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="text-xs text-[rgba(255,255,255,0.4)] hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs text-[rgba(255,255,255,0.4)] hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
