export interface BlogAuthor {
  name: string
  role: string
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "cta"
  text?: string
  items?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  subtitle: string
  category: string
  date: string
  readTime: string
  excerpt: string
  imageGradient: string
  content: ContentBlock[]
  authors: BlogAuthor[]
}

const AUTHORS: BlogAuthor[] = [
  { name: "Guy Balan", role: "Founder & CEO of Boost Performers" },
  { name: "Carl-Frederic Paret", role: "Partner at Boost Performers" },
]

export const CATEGORY_COLORS: Record<string, string> = {
  "Leadership Mindset": "#E8A020",
  "Financial Clarity": "#2AAA6A",
  "Systems & Operations": "#3A8AD0",
  "AI Automation": "#1B6B9A",
  "Digital Marketing": "#4A8A4A",
  "Industry Insights": "#D07A2A",
  "Freedom & Lifestyle": "#7A5AAA",
}

export function getCategoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] || "#FF6B00"
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "why-most-founders-stay-stuck",
    title: "Why Most Founders Stay Stuck at $500K, and What the Top 5% Do Differently",
    subtitle: "The mindset shift that separates lifestyle businesses from scalable enterprises.",
    category: "Leadership Mindset",
    date: "Feb 17, 2026",
    readTime: "7 min",
    excerpt:
      "Most founders hit a ceiling not because of market conditions, but because they've built a business around themselves instead of around systems. Here's how to break through.",
    imageGradient: "linear-gradient(135deg, #2A6BAA 0%, #1B4B7A 40%, #E8A020 100%)",
    content: [
      { type: "paragraph", text: "Every founder eventually hits a wall. Revenue stalls. Energy dips. The business runs only when you're running it." },
      { type: "heading", text: "The $500K Ceiling Is Real" },
      { type: "paragraph", text: "At around $500K in revenue, most service-based businesses hit an invisible barrier. The founder is the sales engine, the delivery engine, and the quality control engine, all at once." },
      { type: "paragraph", text: "The top 5% recognize this moment and make a critical shift: they stop building around their effort and start building around systems." },
      { type: "heading", text: "What the Top 5% Do Differently" },
      { type: "paragraph", text: "They invest in three things simultaneously:" },
      { type: "list", items: [
        "Operational Systems: Documented processes that run without founder input",
        "Client Acquisition Systems: Marketing and sales that work while they sleep",
        "Leadership Development: Building a team that thinks like owners",
      ]},
      { type: "cta" },
      { type: "heading", text: "The Freedom Engine Framework" },
      { type: "paragraph", text: "At Boost, we call this the Freedom Engine. It's not about working harder. It's about building the infrastructure that makes growth automatic." },
      { type: "paragraph", text: "The founders who break through $500K don't just add more hours. They subtract themselves from the equation and replace their effort with scalable systems." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "If you're stuck around this mark, the problem isn't your market. It's your model. And the fix is simpler than you think." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "ai-voice-agents-law-firm-intake",
    title: "How AI Voice Agents Are Transforming Law Firm Intake",
    subtitle: "Why the firms winning new clients aren't answering more calls — they're automating them.",
    category: "AI Automation",
    date: "Feb 11, 2026",
    readTime: "5 min",
    excerpt:
      "Law firms lose 35% of potential cases to missed calls. AI Voice Agents are changing that by handling intake 24/7 with human-level conversation.",
    imageGradient: "linear-gradient(135deg, #1B4B7A 0%, #2A6BAA 50%, #1B6B9A 100%)",
    content: [
      { type: "paragraph", text: "Law firms lose 35% of potential cases to missed calls. After hours, during lunch, on weekends — the phone rings and nobody answers. That call becomes someone else's client." },
      { type: "heading", text: "The Intake Problem" },
      { type: "paragraph", text: "Most law firms rely on receptionists or call centers for intake. Both have the same issue: limited hours, inconsistent quality, and no way to scale without adding headcount." },
      { type: "paragraph", text: "The result? Potential clients get voicemail, hang up, and call the next firm on Google." },
      { type: "heading", text: "Enter AI Voice Agents" },
      { type: "paragraph", text: "AI voice agents answer every call instantly, 24/7. They're not robocalls — they're conversational, empathetic, and trained on your firm's specific practice areas." },
      { type: "paragraph", text: "Here's what they do:" },
      { type: "list", items: [
        "Answer instantly — no hold times, no voicemail, no missed calls",
        "Qualify leads — ask the right questions to determine case fit",
        "Book consultations — schedule directly into your calendar",
        "Capture details — log everything into your CRM automatically",
        "Handle Spanish and English — bilingual by default",
      ]},
      { type: "heading", text: "The ROI Is Immediate" },
      { type: "paragraph", text: "One personal injury firm we worked with recovered 12 cases in the first month that would have been lost to missed calls. At an average case value of $8,000, that's $96,000 in recovered revenue — from a $497/month AI agent." },
      { type: "cta" },
      { type: "heading", text: "Who This Works For" },
      { type: "paragraph", text: "Any law firm doing intake by phone: personal injury, family law, immigration, criminal defense, estate planning. If you're getting calls, an AI voice agent will capture more of them." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "If you're losing leads to missed calls, the fix takes less than 7 days to deploy. No IT team required." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "real-roi-digital-marketing",
    title: "The Real ROI of Digital Marketing for Small Business Owners",
    subtitle: "Most small businesses waste 60% of their marketing budget. Here's how to fix that.",
    category: "Digital Marketing",
    date: "Feb 4, 2026",
    readTime: "6 min",
    excerpt:
      "Most small businesses waste 60% of their marketing budget. Here's a framework for measuring real ROI and cutting what doesn't work.",
    imageGradient: "linear-gradient(135deg, #2D5A8E 0%, #4A8A4A 50%, #2AAA6A 100%)",
    content: [
      { type: "paragraph", text: "Most small businesses spend money on marketing the same way they'd throw darts blindfolded — hoping something sticks." },
      { type: "heading", text: "The Problem With \"Doing Marketing\"" },
      { type: "paragraph", text: "You've probably tried a few things: ran some Facebook ads, posted on Instagram, maybe hired a freelancer to do SEO. Each one felt like a gamble. Some worked. Most didn't. And nobody could tell you why." },
      { type: "paragraph", text: "The issue isn't the channel. It's the lack of a system behind it." },
      { type: "heading", text: "What Real ROI Looks Like" },
      { type: "paragraph", text: "Effective digital marketing isn't about vanity metrics like followers or impressions. It's about:" },
      { type: "list", items: [
        "Cost per lead — how much you spend to get a qualified prospect",
        "Lead-to-close rate — what percentage of leads become paying clients",
        "Customer lifetime value — how much a client is worth over time",
        "Return on ad spend (ROAS) — for every $1 in, how much comes back",
      ]},
      { type: "paragraph", text: "When you track these four numbers, you stop guessing and start making data-driven decisions." },
      { type: "heading", text: "The System That Works" },
      { type: "paragraph", text: "The businesses that get real ROI from marketing follow a simple framework:" },
      { type: "list", items: [
        "Strategy first — define your ideal client, your offer, and your channels before spending a dollar",
        "Consistent execution — show up every week with content, ads, and outreach",
        "Measurable results — track everything so you know what's working and can double down",
      ]},
      { type: "cta" },
      { type: "heading", text: "What This Looks Like in Practice" },
      { type: "paragraph", text: "One of our clients — a local accounting firm — was spending $2,000/month on random marketing with no tracking. We rebuilt their strategy around SEO and Google Ads, set up proper analytics, and within 90 days they were generating 35 qualified leads per month at $28 per lead. Their close rate was 40%, making each client worth an average of $3,200/year." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "If your marketing feels like a money pit, it's not the marketing that's broken — it's the strategy. Start with the four numbers above and work backward." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "scale-beyond-founder-dependency",
    title: "How to Scale Beyond Founder Dependency in 90 Days",
    subtitle: "Your business shouldn't need you to run. Here's the 90-day blueprint to break free.",
    category: "Systems & Operations",
    date: "Jan 27, 2026",
    readTime: "8 min",
    excerpt:
      "Your business shouldn't need you to run. Here's the 90-day blueprint to removing yourself as the bottleneck.",
    imageGradient: "linear-gradient(135deg, #1A3A5C 0%, #3A8AD0 50%, #2A6BAA 100%)",
    content: [
      { type: "paragraph", text: "If your business can't run without you for two weeks, you don't own a business — you own a job with extra stress." },
      { type: "heading", text: "The Founder Trap" },
      { type: "paragraph", text: "Most founders between $300K and $2M in revenue are stuck in the same cycle: they're the top salesperson, the head of operations, the quality control department, and the firefighter. Every decision flows through them." },
      { type: "paragraph", text: "This isn't a badge of honor. It's a growth ceiling." },
      { type: "heading", text: "The 90-Day Blueprint" },
      { type: "paragraph", text: "Here's how to systematically remove yourself from daily operations:" },
      { type: "paragraph", text: "Days 1-30: Document Everything" },
      { type: "list", items: [
        "Record your top 10 recurring tasks using Loom or written SOPs",
        "Identify which tasks only you can do vs. which anyone trained could handle",
        "Set up a project management system (we recommend ClickUp or Asana)",
      ]},
      { type: "paragraph", text: "Days 31-60: Delegate and Automate" },
      { type: "list", items: [
        "Hire or assign team members to handle documented processes",
        "Set up automations for repetitive work (email sequences, invoicing, scheduling)",
        "Deploy AI tools where possible (chatbots, voice agents, workflow automation)",
        "Create a decision-making framework so your team doesn't need to ask you for every call",
      ]},
      { type: "paragraph", text: "Days 61-90: Optimize and Step Back" },
      { type: "list", items: [
        "Review KPIs weekly instead of managing daily",
        "Hold weekly team standups instead of ad-hoc check-ins",
        "Focus your time on strategy, partnerships, and growth — not operations",
      ]},
      { type: "cta" },
      { type: "heading", text: "The Result" },
      { type: "paragraph", text: "By day 90, you should be able to take a week off without your phone buzzing every hour. Your team knows what to do. Your systems handle the routine. You focus on what actually grows the business." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "Start with one task this week. Document it. Hand it off. That's the first domino." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "five-numbers-every-founder",
    title: "The 5 Numbers Every Founder Should Check Every Monday",
    subtitle: "Financial clarity isn't about complex spreadsheets. It's about knowing five numbers cold.",
    category: "Financial Clarity",
    date: "Jan 18, 2026",
    readTime: "4 min",
    excerpt:
      "Financial clarity isn't about complex spreadsheets. It's about knowing five critical numbers that tell you everything.",
    imageGradient: "linear-gradient(135deg, #3A5A4A 0%, #2AAA6A 50%, #4A8A4A 100%)",
    content: [
      { type: "paragraph", text: "Most founders can tell you their revenue. Few can tell you their profit margin. Even fewer know their cash runway or cost per acquisition." },
      { type: "heading", text: "Why This Matters" },
      { type: "paragraph", text: "Flying blind financially is the #1 reason businesses that seem successful on the surface suddenly collapse. Revenue masks problems. Profit reveals them." },
      { type: "heading", text: "The 5 Monday Numbers" },
      { type: "paragraph", text: "Every Monday morning, before you do anything else, check these:" },
      { type: "paragraph", text: "1. Cash in the Bank" },
      { type: "paragraph", text: "Not revenue. Not invoiced amounts. Actual cash available right now. This is your oxygen supply." },
      { type: "paragraph", text: "2. Accounts Receivable Over 30 Days" },
      { type: "paragraph", text: "Money you're owed that's late. If this number keeps growing, you have a collections problem — and a cash flow problem behind it." },
      { type: "paragraph", text: "3. Revenue This Week vs. Target" },
      { type: "paragraph", text: "Are you on pace for the month? Don't wait until the 28th to find out you're behind. Check weekly." },
      { type: "paragraph", text: "4. Gross Profit Margin" },
      { type: "paragraph", text: "Revenue minus direct costs, divided by revenue. If this is below 50% for a service business, something is structurally wrong with your pricing or delivery costs." },
      { type: "paragraph", text: "5. Customer Acquisition Cost (CAC)" },
      { type: "paragraph", text: "Total marketing and sales spend divided by new customers. If it costs you $500 to acquire a client worth $400, you're going bankrupt with growth." },
      { type: "cta" },
      { type: "heading", text: "How to Track These" },
      { type: "paragraph", text: "You don't need fancy software. A simple spreadsheet updated every Monday works. The discipline of checking these numbers weekly is more valuable than any dashboard." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "Block 15 minutes every Monday. Pull these five numbers. Within a month, you'll make better decisions than 90% of founders your size." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "patient-intake-automation",
    title: "Patient Intake Automation: Reducing Wait Times by 60%",
    subtitle: "Healthcare practices are using AI to transform the patient intake process -- and patients love it.",
    category: "Industry Insights",
    date: "Jan 13, 2026",
    readTime: "5 min",
    excerpt:
      "Healthcare practices are using AI to transform the patient intake experience, cutting wait times and improving satisfaction.",
    imageGradient: "linear-gradient(135deg, #4A7A6A 0%, #D07A2A 50%, #E8A020 100%)",
    content: [
      { type: "paragraph", text: "The average patient spends 15-20 minutes filling out paperwork before seeing a provider. For the practice, intake is even more painful: manual data entry, insurance verification phone tag, and scheduling headaches that eat up staff time." },
      { type: "heading", text: "The Intake Bottleneck" },
      { type: "paragraph", text: "Traditional intake is a bottleneck at every step:" },
      { type: "list", items: [
        "Patients fill out paper forms (or clunky PDFs)",
        "Staff manually enters data into the EHR",
        "Insurance verification requires phone calls and portal checks",
        "Scheduling is a back-and-forth dance between patient availability and provider slots",
      ]},
      { type: "paragraph", text: "Each step introduces delays, errors, and frustration -- for both staff and patients." },
      { type: "heading", text: "How Automation Fixes This" },
      { type: "paragraph", text: "AI-powered intake automation handles the entire process before the patient walks in:" },
      { type: "list", items: [
        "Digital forms sent via text/email 48 hours before the appointment",
        "Auto-populated fields from insurance card photos and ID scans",
        "Real-time insurance verification -- no phone calls, no waiting",
        "Smart scheduling that accounts for provider preferences, room availability, and procedure time",
        "Automatic EHR integration -- data flows directly into the system with zero manual entry",
      ]},
      { type: "heading", text: "The Results" },
      { type: "paragraph", text: "Practices that implement intake automation see:" },
      { type: "list", items: [
        "60% reduction in patient wait times",
        "45% less staff time spent on intake tasks",
        "30% fewer data entry errors",
        "Higher patient satisfaction scores",
        "More appointments per day (because each one starts faster)",
      ]},
      { type: "cta" },
      { type: "heading", text: "Who This Works For" },
      { type: "paragraph", text: "Any practice with a front desk: primary care, dental, dermatology, orthopedics, urgent care, behavioral health. If patients fill out forms, this applies to you." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "If your front desk staff spends more time on paperwork than patient care, the fix is straightforward. Most practices are live within 2 weeks." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "freedom-myth-lifestyle-businesses",
    title: "The Freedom Myth: Why Most 'Lifestyle Businesses' Are Prisons",
    subtitle: "You started a business for freedom. But somewhere along the way, the business started running you.",
    category: "Freedom & Lifestyle",
    date: "Jan 6, 2026",
    readTime: "6 min",
    excerpt:
      "You started a business for freedom. But somewhere along the way, the business became the prison. Here's how to break out.",
    imageGradient: "linear-gradient(135deg, #5A4A7A 0%, #7A5AAA 50%, #9A6ACA 100%)",
    content: [
      { type: "paragraph", text: "The dream was simple: start a business, be your own boss, work when you want, from where you want. Make good money on your own terms." },
      { type: "paragraph", text: "The reality? Most \"lifestyle businesses\" deliver the opposite." },
      { type: "heading", text: "The Prison You Built" },
      { type: "paragraph", text: "You're working 60-hour weeks. You can't take a vacation without your phone blowing up. Your \"team\" can't make decisions without you. Revenue is good but your take-home after expenses, taxes, and reinvestment isn't what you expected." },
      { type: "paragraph", text: "You traded a corporate job for a more stressful one -- except now there's no HR department, no benefits, and no one to blame but yourself." },
      { type: "heading", text: "Why This Happens" },
      { type: "paragraph", text: "Three patterns create the lifestyle business prison:" },
      { type: "list", items: [
        "Identity fusion -- you can't separate yourself from the business, so every task feels like it needs your touch",
        "Trust deficit -- you don't trust anyone to do it as well as you, so you hoard responsibilities",
        "System avoidance -- building systems feels like corporate bureaucracy, so you wing it",
      ]},
      { type: "paragraph", text: "The result is a business that's entirely dependent on your daily presence and energy." },
      { type: "heading", text: "The Way Out" },
      { type: "paragraph", text: "Freedom doesn't come from working less. It comes from building a business that doesn't need your hourly input to function." },
      { type: "paragraph", text: "This means:" },
      { type: "list", items: [
        "Documented systems that anyone can follow",
        "A team that owns outcomes, not just tasks",
        "Technology that handles the repetitive work so humans focus on high-value activities",
        "Financial clarity so you know exactly what the business needs to sustain itself without your panic-driven sales pushes",
      ]},
      { type: "cta" },
      { type: "heading", text: "The Real Lifestyle Business" },
      { type: "paragraph", text: "A true lifestyle business isn't one where you work from a beach. It's one where you have the option to -- because everything runs whether you're there or not." },
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "Ask yourself: if you disappeared for 30 days, would your business survive? If the answer is no, that's your starting point." },
    ],
    authors: AUTHORS,
  },
  {
    slug: "b2b-cold-outreach-playbook",
    title: "The B2B Cold Outreach Playbook That Actually Works in 2026",
    subtitle: "Cold email is not dead, but bad cold email is. Here's the playbook we use to book 15-25 meetings per month.",
    category: "Digital Marketing",
    date: "Jan 1, 2026",
    readTime: "7 min",
    excerpt:
      "Cold email is not dead, but bad cold email is. Here's the playbook we use to book meetings at scale.",
    imageGradient: "linear-gradient(135deg, #7A3A3A 0%, #AA5A3A 50%, #D07A2A 100%)",
    content: [
      { type: "paragraph", text: "Most cold outreach fails because it follows a 2019 playbook in a 2026 world. Mass emails, generic templates, and spray-and-pray tactics don't work anymore." },
      { type: "heading", text: "Why Most Cold Outreach Fails" },
      { type: "paragraph", text: "Three reasons:" },
      { type: "list", items: [
        "Volume over value -- sending 1,000 generic emails instead of 100 targeted ones",
        "No personalization -- \"Hi {first_name}\" doesn't count as personalization in 2026",
        "Wrong targeting -- reaching out to people who have no need, no budget, or no authority",
      ]},
      { type: "paragraph", text: "Email providers have gotten smarter too. Google and Microsoft now throttle or spam-flag bulk senders with low engagement rates. The old approach literally doesn't reach inboxes anymore." },
      { type: "heading", text: "The Playbook That Works" },
      { type: "paragraph", text: "Here's what we run for our clients -- and what consistently books 15-25 qualified meetings per month:" },
      { type: "paragraph", text: "Step 1: Build a Hyper-Targeted List" },
      { type: "list", items: [
        "Use Apollo, Clay, or LinkedIn Sales Navigator to build lists of 200-500 ideal prospects",
        "Filter by industry, company size, role, location, and tech stack",
        "Verify every email before sending (use NeverBounce or ZeroBounce)",
      ]},
      { type: "paragraph", text: "Step 2: Write Messages That Don't Sound Like Marketing" },
      { type: "list", items: [
        "Lead with their problem, not your solution",
        "Reference something specific about their business (a recent hire, a competitor, a public pain point)",
        "Keep it under 80 words. Shorter = higher reply rate",
        "One clear CTA: \"Worth a 15-minute call this week?\"",
      ]},
      { type: "paragraph", text: "Step 3: Multi-Channel Follow-Up" },
      { type: "list", items: [
        "Email 1: personalized cold email",
        "Day 3: LinkedIn connection request with a note",
        "Day 5: Email 2 (different angle, same offer)",
        "Day 8: LinkedIn comment on their content",
        "Day 12: Email 3 (breakup email -- \"Should I close your file?\")",
      ]},
      { type: "paragraph", text: "Step 4: Track and Optimize" },
      { type: "list", items: [
        "Open rates below 50%? Your subject lines need work",
        "Reply rates below 5%? Your messaging isn't resonating",
        "Positive reply rate below 2%? Your targeting is off",
        "A/B test subject lines, opening lines, and CTAs every two weeks",
      ]},
      { type: "cta" },
      { type: "heading", text: "The Results" },
      { type: "paragraph", text: "When done right, B2B cold outreach delivers:" },
      { type: "list", items: [
        "50-65% open rates",
        "8-15% reply rates",
        "15-25 booked meetings per month",
        "Pipeline value of $50K-$200K per month depending on deal size",
      ]},
      { type: "heading", text: "Your Next Step" },
      { type: "paragraph", text: "If your pipeline is dry and you're relying on referrals alone, cold outreach is the fastest way to fill it. But only if you do it right." },
    ],
    authors: AUTHORS,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug)
  if (!post) return BLOG_POSTS.slice(0, limit)
  // Prioritize posts from DIFFERENT categories for variety
  const others = BLOG_POSTS.filter(
    (p) => p.category !== post.category && p.slug !== slug
  )
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== slug
  )
  // Pick from different categories first, then fill with same category if needed
  const selected: BlogPost[] = []
  const usedCategories = new Set<string>()
  for (const p of others) {
    if (selected.length >= limit) break
    if (!usedCategories.has(p.category)) {
      selected.push(p)
      usedCategories.add(p.category)
    }
  }
  // Fill remaining slots
  for (const p of [...others, ...sameCategory]) {
    if (selected.length >= limit) break
    if (!selected.includes(p)) {
      selected.push(p)
    }
  }
  return selected
}
