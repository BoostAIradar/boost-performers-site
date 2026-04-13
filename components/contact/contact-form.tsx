"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

const BOOKING_TYPES = [
  {
    id: "demo",
    label: "Demo",
    duration: "30 min",
    description: "Quick walkthrough of the Boost platform and how it fits your business.",
    url: "https://link.boostperformers.com/widget/booking/G9GW706y9eEFZbS0s61z",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
    ),
  },
  {
    id: "audit",
    label: "AI Audit Discovery",
    duration: "15 min",
    description: "Let's us quickly discuss your workflows to determine if the full 90 min audit makes sense.",
    url: "https://link.boostperformers.com/widget/booking/9tPXkG94Xqh7zPJs8mjn",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0-4h18"/></svg>
    ),
  },
]

export function BookingSection() {
  const searchParams = useSearchParams()
  const typeParam = searchParams.get("type")
  const [active, setActive] = useState(typeParam === "audit" ? "audit" : "demo")
  const activeType = BOOKING_TYPES.find((t) => t.id === active)!
  
  useEffect(() => {
    if (typeParam === "audit") {
      setActive("audit")
    }
  }, [typeParam])

  return (
    <section id="booking" className="bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pt-14 pb-12">
        <div className="text-center mb-10">
          <h2 className="font-serif text-[28px] lg:text-[34px] font-extrabold text-[#1B2B3A] mb-2">
            Book Your Call
          </h2>
          <p className="text-[15px] text-[#6B7B8D] leading-relaxed">
            Choose the call type that fits your needs, then pick a time.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-stretch gap-4 mb-8 w-full">
          {BOOKING_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => setActive(type.id)}
              className={`relative text-left p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group w-full sm:max-w-[320px] ${
                active === type.id
                  ? "border-primary bg-[rgba(255,107,0,0.03)] shadow-[0_4px_20px_rgba(255,107,0,0.08)]"
                  : "border-[#E8ECF0] bg-white hover:border-[#D0D5DB] hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              }`}
            >
              {active === type.id && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary rounded-t-xl" />
              )}
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  active === type.id
                    ? "bg-primary text-white"
                    : "bg-[#F4F6F8] text-[#6B7B8D] group-hover:text-[#3A4A5C]"
                }`}
              >
                {type.icon}
              </div>
              <h3
                className={`font-semibold text-[15px] mb-1 transition-colors ${
                  active === type.id ? "text-[#1B2B3A]" : "text-[#3A4A5C]"
                }`}
              >
                {type.label}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    active === type.id
                      ? "bg-primary/10 text-primary"
                      : "bg-[#F4F6F8] text-[#6B7B8D]"
                  }`}
                >
                  {type.duration}
                </span>
              </div>
              <p className="text-[13px] text-[#6B7B8D] leading-relaxed">
                {type.description}
              </p>
            </button>
          ))}
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-[#F4F6F8] rounded-lg p-1 gap-0.5">
            {BOOKING_TYPES.map((type) => (
              <button
                key={type.id}
                onClick={() => setActive(type.id)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  active === type.id
                    ? "bg-white text-[#1B2B3A] shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                    : "text-[#6B7B8D] hover:text-[#3A4A5C]"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Embed */}
        <div className="bg-white rounded-2xl border border-[#E8ECF0] overflow-hidden">
          <iframe
            key={activeType.id}
            src={activeType.url}
            title={`Book ${activeType.label}`}
            className="w-full border-0"
            style={{ minHeight: 700 }}
            loading="lazy"
          />
        </div>

        <div className="flex gap-7 justify-center flex-wrap mt-8">
          {["Clear diagnosis", "Honest advice", "No obligation"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-[#3A4A5C]">
              <div className="w-5 h-5 rounded-full bg-[rgba(34,197,94,0.1)] border-[1.5px] border-[#22C55E] flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    revenue: "", challenge: "", source: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const inputClass =
    "w-full py-3.5 px-4 rounded-lg border border-[#D8DDE3] text-sm text-[#1B2B3A] font-sans outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_rgba(255,107,0,0.06)] placeholder:text-[#A8B4C0] bg-white"
  const selectClass =
    "w-full py-3.5 px-4 rounded-lg border border-[#D8DDE3] text-sm text-[#1B2B3A] font-sans outline-none transition-all focus:border-primary bg-white appearance-none cursor-pointer bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%236B7B8D%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_16px_center]"

  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-5 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Form */}
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-[28px] font-extrabold text-[#1B2B3A] mb-2">
              Or Send Us a Message
            </h2>
            <p className="text-[15px] text-[#6B7B8D] mb-8 leading-relaxed">
              Prefer email? Fill out the form and we{"'"}ll get back within 24 hours.
            </p>

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Phone + Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Your company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                />
              </div>
            </div>

            {/* Revenue Range */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                Revenue Range
              </label>
              <select
                className={selectClass}
                value={formData.revenue}
                onChange={(e) => handleChange("revenue", e.target.value)}
              >
                <option value="">Select revenue range</option>
                <option value="pre-revenue">Pre-Revenue</option>
                <option value="0-250k">{"$0 – $250K"}</option>
                <option value="250k-500k">{"$250K – $500K"}</option>
                <option value="500k-1m">{"$500K – $1M"}</option>
                <option value="1m-5m">{"$1M – $5M"}</option>
                <option value="5m-20m">{"$5M – $20M"}</option>
                <option value="20m+">{"$20M+"}</option>
              </select>
            </div>

            {/* Workflow Pain */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                What's your biggest workflow pain right now? <span className="text-primary">*</span>
              </label>
              <textarea
                className={`${inputClass} resize-y min-h-[120px]`}
                placeholder="Tell us about your biggest business constraint right now..."
                value={formData.challenge}
                onChange={(e) => handleChange("challenge", e.target.value)}
                rows={5}
              />
            </div>

            {/* How Did You Hear */}
            <div className="mb-7">
              <label className="block text-sm font-semibold text-[#1B2B3A] mb-2">
                How Did You Hear About Us?
              </label>
              <select
                className={selectClass}
                value={formData.source}
                onChange={(e) => handleChange("source", e.target.value)}
              >
                <option value="">Select one</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="podcast">Podcast</option>
                <option value="blog">Blog / Article</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button className="bg-primary text-white px-9 py-4 text-base font-semibold rounded-md hover:bg-primary-hover transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-2">
              Send Message <span>{"→"}</span>
            </button>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-5">
            {/* Get in Touch */}
            <div className="bg-white rounded-xl p-7 border border-[#E8ECF0]">
              <h3 className="font-serif text-xl font-extrabold text-[#1B2B3A] mb-5">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { icon: "mail", label: "info@boostperformers.com" },
                  { icon: "phone", label: "(786) 305-7503" },
                  { icon: "pin", label: "Miami, FL" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(255,107,0,0.06)] flex items-center justify-center shrink-0">
                      <ContactIcon type={item.icon} />
                    </div>
                    <span className="text-sm text-[#3A4A5C]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-[#FFF8F3] rounded-xl p-7 border-l-4 border-l-primary">
              <p className="text-sm text-[#3A4A5C] leading-relaxed italic mb-3.5">
                {"\"The clarity call alone was worth more than 6 months of guessing. No pitch, just genuine insight into what was holding us back.\""}
              </p>
              <p className="text-[13px] text-[#6B7B8D]">
                {"— Healthcare Practice Owner, Miami"}
              </p>
            </div>

            {/* Quick Questions */}
            <div className="bg-white rounded-xl p-7 border border-[#E8ECF0]">
              <h3 className="font-serif text-xl font-extrabold text-[#1B2B3A] mb-5">
                Quick Questions
              </h3>
              <div className="flex flex-col gap-5">
                {[
                  { q: "What does the audit cost?", a: "$497 — but only if we find $10K+/month in recoverable capacity. If we can't find it, you pay nothing." },
                  { q: "How fast will you respond?", a: "Within 24 hours on business days. Usually faster." },
                  { q: "What if I'm not sure what I need?", a: "That's exactly what the call is for. We'll help you identify priorities." },
                ].map((item) => (
                  <div key={item.q}>
                    <h4 className="text-sm font-bold text-[#1B2B3A] mb-1">
                      {item.q}
                    </h4>
                    <p className="text-[13px] text-[#6B7B8D] leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    mail: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
    phone: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    pin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  }
  return <>{icons[type]}</>
}
