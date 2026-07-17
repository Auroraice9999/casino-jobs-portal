/****************************************************************************
 *  ONE PLACE TO EDIT EVERYTHING.
 *  Both pages (index.html and job.html) read their settings from here.
 *  You do NOT need to touch any other file for normal changes.
 ****************************************************************************/

const CONFIG = {

  /* (1) Paste your Google Apps Script Web App URL here (see SETUP-GUIDE.md, Step 4). */
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbyikTmeqXYOtgMau4EuxVHs3pEi8KSIQctrBeF7r9QED_L-DDoOdLzIvAD7psRrQfAM/exec",

  /* (2) Your branding. */
  COMPANY_NAME: "Casino Jobs",
  COMPANY_TAGLINE: "100% remote iGaming & Web3 careers. Hiring talent across India, Bangladesh, Nepal and beyond.",

  /* (3) Your Telegram for candidates to contact you.
         TELEGRAM_ID is what they see; TELEGRAM_LINK is the clickable link. */
  TELEGRAM_ID:   "@casinojobsofficial",
  TELEGRAM_LINK: "https://t.me/casinojobsofficial",

  /* (4) Work-experience dropdown options. */
  EXPERIENCE_OPTIONS: ["Fresher", "0-1 year", "1-3 years", "3+ years"],

  /* (5) YOUR JOBS.
         To ADD a job: copy one { ... } block, paste it, edit the text.
         To REMOVE a job: delete its { ... } block.
         "title" must be unique. The lists (responsibilities / requirements /
         workSetup) can have as many or as few lines as you like. */
  JOBS: [
    {
      title: "Cricket Sportsbook Senior Product Manager / Product Owner",
      location: "Dubai",
      type: "Full-time",
      openings: "1",
      summary: "Own our cricket exchange and sportsbook end-to-end — markets, pricing and product decisions across every major cricket tournament.",
      responsibilities: [
        "Own the cricket product across the exchange and sportsbook — markets, pricing, roadmap and results.",
        "Decide which cricket markets go live (match odds, session/fancy markets, player props, series & tournament bets), when they open and how they settle.",
        "Manage the cricket exchange — back/lay liquidity, matched bets, in-play trading and risk.",
        "Track the global cricket calendar — IPL, T20 leagues, internationals, ICC events & domestic tournaments.",
        "Work closely with Trading, Commercial, UX and Development teams.",
        "Take features from idea to launch — write requirements, manage the backlog and stay close to the build.",
        "Monitor live matches and react in real time to events, odds and market movements."
      ],
      requirements: [
        "Deep cricket knowledge — formats, rules, playing conditions and how they shape betting markets.",
        "Proven experience on a cricket exchange and/or sportsbook product — match odds, session/fancy markets, bet builders, pricing and market structure.",
        "Strong grasp of exchange mechanics — back/lay, liquidity, matched bets and in-play trading.",
        "5+ years in product or trading, ideally as a Senior PM, Product Owner or trading/product lead.",
        "Betting & gaming industry experience is a must — this is a specialised domain.",
        "Data-driven mindset — you use numbers and product instinct together.",
        "Strong communication and stakeholder management skills.",
        "Nice to have: familiarity with A/B testing and experimentation.",
        "Nice to have: experience working in remote or distributed teams."
      ],
      workSetup: [
        "Based in Dubai — full-time, part of a growing international team.",
        "Cricket runs on live events — expect real-time monitoring around key matches and tournaments."
      ]
    },
    {
      title: "Esports Category Manager",
      location: "100% Remote",
      type: "Full-time",
      openings: "1",
      summary: "Live for CS2, Dota 2 and LoL? Own our esports category end-to-end — markets, settlement and growth across every major tournament.",
      responsibilities: [
        "Own the esports category across CS2, Dota 2, LoL, Valorant & more.",
        "Decide which matches, tournaments & markets go live, when they open and how they're settled.",
        "Set up markets — match winner, map winner, series score & in-game props.",
        "Track the global esports schedule — majors, leagues, qualifiers & regional events.",
        "Ensure fast, accurate settlement and handle disputes.",
        "Grow the category — engagement, volume & new market types.",
        "Monitor live matches and react in real time."
      ],
      requirements: [
        "Deep knowledge of esports titles — CS2, Dota 2, LoL, Valorant (rules, formats & meta).",
        "A genuine fan who watches matches and follows teams, players & tournaments closely.",
        "Strong grasp of competitive formats — BO1/BO3/BO5, group stages, brackets & seeding.",
        "Awareness of the global esports calendar and major organisers (Valve, Riot, ESL, BLAST & more).",
        "Sharp judgement on market design, suspension timing & event resolution.",
        "Comfortable with data and calm under live-event pressure.",
        "Self-driven and able to work independently."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Competitive salary — get paid to know esports inside out.",
        "Esports runs on live events — flexibility around majors and key tournaments expected."
      ]
    },
    {
      title: "Call Center / Customer Care Executive",
      location: "100% Remote",
      type: "Full-time",
      openings: "100+",
      summary: "Be the frontline voice of our iGaming platform — helping users across chat, calls and WhatsApp, fast and with a smile.",
      responsibilities: [
        "Handle user queries across live chat, calls and WhatsApp — deposits, withdrawals, KYC, bonuses and gameplay.",
        "Respond quickly and accurately, keeping resolution times low and satisfaction high.",
        "Support users in their regional language as well as English.",
        "Log, track and escalate issues to the right teams and follow up to closure.",
        "Maintain a friendly, professional and patient tone at all times.",
        "Share recurring user pain points with product and ops teams."
      ],
      requirements: [
        "English fluency is mandatory, plus fluency in at least ONE of: Hindi, Tamil, Telugu, Bengali, Kannada or Marathi.",
        "Clear, warm communication — written and verbal.",
        "Calm and composed under pressure; strong problem-solving attitude.",
        "Comfortable with computers, chat tools and CRMs.",
        "Prior customer support experience (iGaming / fintech / e-commerce) is a plus.",
        "Reliable high-speed internet and a quiet work-from-home setup."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Shift-based — iGaming runs 24/7, so flexibility across shifts is expected."
      ]
    },
    {
      title: "Digital Marketing Executive — iGaming",
      location: "100% Remote",
      type: "Full-time",
      openings: "Multiple",
      summary: "Own user acquisition and channel ROI across Meta, Google and TikTok for our iGaming brands — data-driven, creative-led performance marketing.",
      responsibilities: [
        "Channel management & ROI: drive marketing and user acquisition through channels like Meta and Google, taking full accountability for channel ROI.",
        "Campaign execution & strategy: own the entire ad operations lifecycle — account setup, audience targeting, bidding strategies, data analysis and conversion attribution.",
        "Creative strategy: independently conceptualize creative directions and communicate them effectively to design teams.",
        "Cross-functional collaboration: work closely with ad designers to develop creative asset strategies rooted in data analysis and user personas.",
        "Market insight: stay ahead of competitor moves and industry trends to rapidly iterate on deployment strategies and explore efficient acquisition methods."
      ],
      requirements: [
        "2+ years in mobile internet ad operations; highly familiar with mainstream acquisition channels (including but not limited to Facebook, Google and TikTok). Proven successful cases preferred.",
        "Direct experience in the iGaming industry (slots, casino, betting or skill-based card games) is required; familiarity with the Indian market is a strong plus.",
        "Outstanding creative strategy skills — able to control and maintain the quality and planning of creative concepts.",
        "Highly sensitive to data, able to map relationships between metrics and keenly detect trends or anomalies.",
        "Result-oriented, resilient under pressure, and able to thrive in a fast-paced environment.",
        "Keen insight into target audiences and user behaviour."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Portfolio required: attach successful ad case studies or performance data results when applying.",
        "Comfortable with occasional data monitoring outside standard hours (adjusted to the target time zones of your campaigns)."
      ]
    },
    {
      title: "HR Manager — iGaming",
      location: "100% Remote",
      type: "Full-time",
      openings: "1",
      summary: "Own people operations for a fast-growing, distributed iGaming company — from hiring niche talent to keeping a global team engaged.",
      responsibilities: [
        "Own the full recruitment cycle across tech, product, marketing and support roles.",
        "Lead onboarding and offboarding for a remote, multi-location team.",
        "Build and maintain HR policies, contracts and documentation.",
        "Coordinate payroll inputs across multiple regions (including crypto-denominated where applicable).",
        "Drive employee engagement, retention and performance review cycles.",
        "Handle employee relations and be the trusted point of contact for the team."
      ],
      requirements: [
        "4-6 years of HR experience, ideally in iGaming, betting, crypto or tech startups.",
        "Proven experience managing remote, cross-border teams.",
        "Strong recruitment skills for niche tech and marketing roles.",
        "Excellent communication and people judgement.",
        "Highly organised, self-driven and able to work independently across time zones.",
        "Familiar with HR tools (Bayzat, Zoho People, Deel or similar)."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Flexible hours with overlap expected for a global team."
      ]
    },
    {
      title: "Cricket Content Manager",
      location: "100% Remote",
      type: "Full-time",
      openings: "1-2",
      summary: "Know the game inside out — every rule, every stat, every format — and turn match action into sharp, accurate, timely content.",
      responsibilities: [
        "Plan and manage the cricket content calendar across all formats & tournaments (IPL, T20, Tests, ICC events & more).",
        "Create and curate content — match previews, stats breakdowns, player insights & live updates.",
        "Own the cricket category: what goes live, when, and how it's presented.",
        "Ensure every piece is factually and statistically accurate — no errors on rules, records or numbers.",
        "Track content performance and engagement, and double down on what works.",
        "Stay on top of fixtures, team news, injuries and pitch/weather conditions in real time."
      ],
      requirements: [
        "Bachelor's degree (minimum).",
        "2+ years in cricket content, sports media or a related cricket-focused role.",
        "Expert command of the Laws of Cricket — DLS, powerplays, follow-on, no-balls, dismissals, playing conditions.",
        "Strong cricket statistics knowledge — averages, strike rates, economy, NRR, head-to-heads & records.",
        "Strong writing and content sense, with an eye for what fans want.",
        "Organised, self-driven and able to work independently."
      ],
      workSetup: [
        "100% remote / work from home.",
        "8-hour shift (compulsory) · 6-day week with Saturday off.",
        "Cricket runs on weekends, so Sunday is a working day."
      ]
    },
    {
      title: "Social Media Executive — Web3",
      location: "100% Remote",
      type: "Full-time",
      openings: "Multiple",
      summary: "Grow our Web3 community organically — host AMAs, live in Telegram, Discord and X, and know crypto culture cold.",
      responsibilities: [
        "Grow our Twitter/X, Telegram and Discord handles organically.",
        "Host AMAs and Twitter Spaces, and run daily community engagement.",
        "Create sharp, on-brand content — threads, posts, memes and announcements.",
        "Build relationships with KOLs, partner communities and ecosystem projects.",
        "Track followers, engagement, reach and community health, and double down on what works."
      ],
      requirements: [
        "Proven experience running social for Web3 / crypto brands (mandatory).",
        "Track record of organic growth — show us the numbers.",
        "Hands-on with Twitter/X, Telegram and Discord, plus AMA experience.",
        "Solid cricket and sports knowledge — our audience lives for it.",
        "Native in crypto culture, with sharp writing that gets shared.",
        "Self-driven and online when the community is active."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Crypto moves 24/7 — flexibility around key events expected."
      ]
    },
    {
      title: "Graphic Designer",
      location: "100% Remote",
      type: "Full-time",
      openings: "Few",
      summary: "Create bold, scroll-stopping visuals across our iGaming and crypto brands — social creatives, campaign assets and in-app graphics.",
      responsibilities: [
        "Design social media creatives, ad campaigns, banners and promotional assets.",
        "Create match-day, tournament and event graphics for cricket and sports content.",
        "Produce in-app and web visuals — icons, illustrations and UI assets.",
        "Maintain brand consistency across all channels and formats.",
        "Work fast with marketing and content teams to ship daily creatives.",
        "Adapt designs across sizes for Instagram, X, Telegram and web."
      ],
      requirements: [
        "2-4 years as a graphic designer, ideally in iGaming, sports, gaming or crypto.",
        "Strong portfolio showing social, campaign and brand work.",
        "Expert in Photoshop, Illustrator and Figma.",
        "Sharp eye for typography, colour, layout and hierarchy.",
        "Bonus: motion graphics / basic animation (After Effects).",
        "Fast turnaround without losing quality; reliable WFH setup."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Fast-paced — quick creative turnarounds expected around live events."
      ]
    },
    {
      title: "Video Editor",
      location: "100% Remote",
      type: "Full-time",
      openings: "Few",
      summary: "Cut fast, punchy short-form video for our iGaming and crypto brands — reels, promos, match highlights and social-first content.",
      responsibilities: [
        "Edit short-form video — reels, shorts, promos and announcements.",
        "Cut cricket and sports highlights, reaction clips and match-day content.",
        "Add motion graphics, captions, sound design and on-brand effects.",
        "Repurpose long-form content into platform-native cuts for X, Instagram, YouTube and Telegram.",
        "Turn briefs around quickly to match the pace of live events.",
        "Work closely with content, social and design teams."
      ],
      requirements: [
        "2-4 years in video editing, ideally for social, sports, gaming or crypto.",
        "Strong showreel of short-form and social-first content.",
        "Expert in Premiere Pro and After Effects (CapCut a plus).",
        "Good sense of pacing, music, trends and what performs on each platform.",
        "Basic motion graphics and caption/subtitle work.",
        "Fast, reliable and self-managing; solid WFH setup and internet."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Fast turnarounds expected, especially during live cricket and key events."
      ]
    },
    {
      title: "Team Leader — iGaming Operations",
      location: "100% Remote",
      type: "Full-time",
      openings: "Few",
      summary: "Lead a remote iGaming operations / support team — drive performance, coach the team and keep service sharp around the clock. Prior team-leading experience is mandatory.",
      responsibilities: [
        "Lead, coach and motivate a remote team of executives.",
        "Own team performance — set targets, track KPIs and run reviews.",
        "Plan shift rosters to ensure 24/7 coverage.",
        "Handle escalations and resolve complex user or operational issues.",
        "Report performance, trends and risks to management.",
        "Drive quality, consistency and a positive team culture remotely."
      ],
      requirements: [
        "Prior team-leading / supervisory experience is mandatory.",
        "3-5 years in iGaming, BPO, customer support or operations.",
        "Strong leadership, coaching and conflict-resolution skills.",
        "Comfortable with KPIs, dashboards and performance data.",
        "Excellent English communication; regional language a plus.",
        "Self-driven and able to lead a distributed team across time zones."
      ],
      workSetup: [
        "100% remote / work from home.",
        "Shift-based leadership — iGaming runs 24/7."
      ]
    }
    // , {  <-- copy this block to add a new job
    //   title: "New Role Name",
    //   location: "100% Remote", type: "Full-time", openings: "1",
    //   summary: "Short one-line summary.",
    //   responsibilities: ["Task one", "Task two"],
    //   requirements: ["Requirement one", "Requirement two"],
    //   workSetup: ["100% remote / work from home."]
    // }
  ]
};
