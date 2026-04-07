"use client"

import { Tag, useSectionVisible } from "./hero-sections"

const PRO_SERVICES = [
  {
    name: "Law Firms",
    desc: "Missed calls mean missed cases and lost revenue. AI handles intake, follow-up, and scheduling so nothing falls through.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    name: "Accounting Firms",
    desc: "Tax season shouldn't mean burnout season. Automate client communication, document collection, and repetitive admin.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    name: "Insurance",
    desc: "Slow follow-up kills quotes. AI handles lead response, policy inquiries, and renewal reminders so your team closes more.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
]

const HOME_SERVICES_DATA = [
  {
    name: "Roofing",
    desc: "Leads call while your crew is on the roof. AI answers every call, books every estimate, and follows up automatically.",
    img: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&h=400&fit=crop",
  },
  {
    name: "Construction & Remodeling",
    desc: "Capture every job opportunity — even from the job site. AI manages inquiries, scheduling, and client updates.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
  },
  {
    name: "Home Services",
    desc: "24/7 availability without 24/7 staffing. AI handles dispatch, booking, and customer communication around the clock.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
  },
]

function IndustryCard({
  name,
  desc,
  img,
}: {
  name: string
  desc: string
  img: string
}) {
  return (
    <div className="group relative h-[320px] md:h-[340px] rounded-2xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        crossOrigin="anonymous"
      />
      <div
        className="absolute inset-0 flex flex-col justify-end px-7 py-6"
        style={{
          background:
            "linear-gradient(transparent 30%, rgba(0,0,0,0.8) 100%)",
        }}
      >
        <h4 className="font-serif text-2xl lg:text-[28px] font-bold text-white mb-2">
          {name}
        </h4>
        <p className="text-sm leading-relaxed text-white/70">
          {desc}
        </p>
      </div>
    </div>
  )
}

export function IndustriesSection() {
  const visible = useSectionVisible("industries")

  return (
    <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F6F8 100%)" }}>
      <div
        id="industries"
        className={`mx-auto max-w-[1200px] px-6 py-16 lg:py-24 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.1em] uppercase bg-[rgba(255,107,0,0.1)] text-primary">
            Industries
          </span>
          <h2 className="font-serif text-3xl lg:text-[40px] font-bold mt-4 mb-3 text-[#0B1A2B]">
            Industries We Serve
          </h2>
          <p className="text-[#0B1A2B]/55 text-[17px]">
            We work with founders in two core verticals — professional services
            and home service providers.
          </p>
        </div>

        {/* Professional Services */}
        <h3 className="font-serif text-[22px] font-bold mb-5 pb-3 border-b-2 border-primary text-[#0B1A2B]">
          Professional Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PRO_SERVICES.map((ind, i) => (
            <IndustryCard key={i} {...ind} />
          ))}
        </div>

        {/* Home Service Providers */}
        <h3 className="font-serif text-[22px] font-bold mb-5 pb-3 border-b-2 border-primary text-[#0B1A2B]">
          Home Service Providers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOME_SERVICES_DATA.map((ind, i) => (
            <IndustryCard key={`hs-${i}`} {...ind} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/ai-solutions" className="border-2 border-primary text-primary px-8 py-3 font-semibold rounded-md hover:bg-primary/10 transition-all hover:-translate-y-0.5 cursor-pointer inline-block">
            See Solutions for Your Industry
          </a>
        </div>
      </div>
    </section>
  )
}
