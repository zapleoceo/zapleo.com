export type CaseStudy = {
  name: string;
  tagline: string;
  year: string;
  place: string;
  role: string;
  team: string;
  stack: string[];
  brief: string;
  sections: { title: string; body: string; note?: string }[];
  links: { label: string; href: string }[];
  accent: string;
};

export const CASES: Record<string, CaseStudy> = {
  pasijou: {
    name: 'Pasijou',
    tagline: 'Coworking, kitchen, cinema. One room.',
    year: '2022 — present',
    place: 'Weligama, Sri Lanka',
    role: 'Founder, operator',
    team: '8 (local kitchen + ops + community)',
    stack: ['Hospitality ops', 'Community programming', 'Tripadvisor 4.9', 'IG @pasijou'],
    brief:
      'After the agency closed in early 2022, the first project on the south coast was not a startup. It was a building — with a kitchen, twelve coworking seats, a small cinema room, and a yoga deck. Pasijou opened in Weligama as a place where digital nomads could work, eat, and have actual human evenings on the same plot of land.',
    sections: [
      {
        title: 'Why a clubhouse instead of a SaaS',
        body:
          'The brief I gave myself was selfish: build the place I wanted to spend my own months in. A coworking with a real kitchen. Ukrainian comfort food, fast Wi-Fi, lunch you do not have to leave for, and a community calendar that runs music nights and movie evenings without becoming a hostel.',
        note: 'Coworking-only is fragile in a town with monsoons; a kitchen makes you indispensable.',
      },
      {
        title: 'What an engineer learns running F&B',
        body:
          'Inventory is a database with worse error messages. Staff scheduling is a constraint solver. Menu engineering is product. The first six months we lost money on a beef burger we kept on the menu because guests asked for it; once we replaced it with a curry-of-the-week, margin went from -8% to +21%. Same code-review discipline, different vocabulary.',
        note: 'F&B taught me cost control faster than 12 years of agency P&L.',
      },
      {
        title: 'Outcome and what stayed',
        body:
          'Three years in. Tripadvisor 4.9 on a hundred-plus reviews. Uber Eats Sri Lanka live. A small loyal regulars list that knows the staff by name. The cinema room runs at 30% utilisation and that is fine — it pays for itself in retention, not ticket sales.',
        note: 'The clubhouse model works in towns where nomad density is high but venue density is low.',
      },
    ],
    links: [
      { label: 'Pasijou on Instagram', href: 'https://www.instagram.com/pasijou/' },
      {
        label: 'Tripadvisor reviews',
        href: 'https://www.tripadvisor.com/Restaurant_Review-g612380-d24111150-Reviews-Pasijou_Coworking_And_Food-Weligama_Matara_Southern_Province.html',
      },
      {
        label: 'Uber Eats LK',
        href: 'https://www.ubereats.com/lk/store/pasijou-restaurant-coworking-cinema-yoga-space-for-anything-weligama/3otPqT1CV2iYMCDEpmuYxg',
      },
    ],
    accent: 'oklch(78% 0.14 165)',
  },

  apcu: {
    name: 'apcu.ua',
    tagline: 'Industry portal that still iterates after eight years.',
    year: '2018 — present',
    place: 'Ukraine · live',
    role: 'Tech lead at Zapleo',
    team: '3 (PM + dev + design)',
    stack: ['WordPress (custom theme)', 'PHP', 'Regulatory CMS', 'Member directory'],
    brief:
      'Official portal for the Ukrainian Cosmetics & Perfumery Association — APCU. Members are manufacturers, importers, distributors. The portal had to handle three audiences without three sites: industry news, regulatory updates, and a public-facing membership directory.',
    sections: [
      {
        title: 'Why custom WordPress in 2018',
        body:
          'The first instinct was to skip WordPress and build it on Symfony. Wrong instinct. The non-technical editorial team is a single person, working evenings. WordPress with a tight custom theme means she ships on her schedule, not ours. Eight years later, the editorial cadence still works without a developer in the loop.',
        note: 'Choose stack by maintenance reality, not engineer preference.',
      },
      {
        title: 'The regulatory bit',
        body:
          'EU cosmetic regulations change quarterly. The portal tracks notification labelling, INCI updates, ingredient bans, and the Ukrainian equivalents. Originally a flat CMS; we added a structured "regulation" content type with sort-by-effective-date and a per-document changelog. Boring. Critical.',
        note: 'Boring features keep users from leaving for Telegram channels.',
      },
      {
        title: 'Outcome',
        body:
          'Live since 2018. Still on the same custom theme. Multiple ownership transitions on the association side — the portal kept publishing through all of them. The strongest signal an agency build worked is that it still works after the agency closed.',
      },
    ],
    links: [{ label: 'Visit apcu.ua', href: 'https://apcu.ua/' }],
    accent: 'oklch(82% 0.18 70)',
  },

  'ai-sales-assistant': {
    name: 'AI Sales Assistant',
    tagline: 'Talks to leads. Learns from coaching.',
    year: '2025 — present',
    place: 'Jakarta · live in production',
    role: 'Architect and builder',
    team: '1 engineer + client as trainer',
    stack: ['Python', 'Telegram Bot API', 'Instagram Graph API', 'LLM (OpenAI-compatible)', 'PostgreSQL'],
    brief:
      'Most businesses lose 60-80% of inbound leads not because the product is wrong, but because no one replied fast enough. This AI assistant closes that gap — it responds on Instagram, Telegram, and WhatsApp in seconds, 24/7, and gets smarter every week through a built-in coaching interface that requires no code to operate.',
    sections: [
      {
        title: 'Speed-to-lead is the variable no one optimizes',
        body:
          'Research across industries is consistent: a lead that gets a reply within five minutes is 21 times more likely to convert than one that waits an hour. Most businesses operate as if this number does not exist — the sales team is in a meeting, it is 11pm, it is Sunday. The AI assistant has no such schedule. It handles the first contact, qualifies the lead through a scripted conversation flow, and either books the appointment or escalates to a human — without the lead ever experiencing a wait.',
        note: 'First response speed matters more than first response quality.',
      },
      {
        title: 'Coach mode: your team trains the AI, not the other way around',
        body:
          'The most common failure mode with AI chatbots is that they go stale. Scripts that converted in March stop working in June — pricing changes, new products launch, objections evolve. Coach mode solves this at the source. When the AI gives a wrong or outdated answer, the business owner — or any team member — corrects it in a simple interface. The correction is stored, applied immediately across all conversations, and the AI does not repeat the mistake. No redeploy. No developer ticket. The people who understand your product best are the ones who update the AI.',
        note: 'An AI your team cannot update is an AI that becomes wrong.',
      },
      {
        title: 'One assistant, every channel where your leads already are',
        body:
          'Leads arrive through multiple channels simultaneously — Instagram DMs, Telegram, WhatsApp, web chat. Each expects a reply within minutes. One AI assistant serves all of them from a single knowledge base, adapting tone per channel automatically. Every conversation is logged, searchable, and tagged by outcome: which channel converts, which script fails, exactly where in the flow leads drop off. When a CRM is connected, lead status updates without a human touching it.',
        note: 'Same product knowledge, different conversation styles per channel.',
      },
      {
        title: 'What gets built and what you operate',
        body:
          'A custom AI assistant trained on your product, pricing, and objection library. Connected to your active sales channels. A coach interface that any non-technical team member can use to update it day-to-day. Initial build takes 2-4 weeks depending on channel count and script complexity. A 30-day calibration period follows where edge cases get handled and the conversion flow gets tuned. After handover, your team trains it — Zapleo supports when the architecture needs to grow.',
        note: 'Fits EdTech, hospitality, retail, services — any business with a high-volume inbound channel.',
      },
    ],
    links: [{ label: 'Discuss building one for your business', href: '/contact/' }],
    accent: 'oklch(68% 0.20 280)',
  },

  aibroker: {
    name: 'AIbroker',
    tagline: 'One control plane for every API key you use.',
    year: '2024 — present',
    place: 'Self-hosted · Hetzner',
    role: 'Sole architect and builder',
    team: '1',
    stack: ['FastAPI', 'Python 3.12', 'PostgreSQL', 'LiteLLM', 'Docker'],
    brief:
      'Running two AI-powered products from a single server — Vera (personal assistant) and Stepan (Instagram sales agent) — the recurring problem was API key sprawl and invisible cost. AIbroker is the single control plane: every LLM call across all projects routes through it, with per-project caps, automatic cooldown on 429s, and a Telegram alert the moment a key dies.',
    sections: [
      {
        title: 'The cost incident that made it necessary',
        body:
          'In June 2026, a stale cost multiplier in LiteLLM caused provider calls to be logged at 1/20th of actual price. The cost guard thought it had budget remaining; it did not. A $25 bill arrived. AIbroker was already in development; the incident pushed it from "useful experiment" to "production requirement." The broker reads real USD from usage logs, not model-tier estimates.',
        note: 'Any cost guard that uses estimated prices instead of real prices is not a cost guard.',
      },
      {
        title: 'Two modes for two problems',
        body:
          'Proxy mode: the broker calls the provider via LiteLLM SDK, returns the response, logs the cost. The client project never sees the API key. Vending mode: the broker issues a short-lived key lease; the client calls the provider directly, reports usage back on release. Vending handles providers that do not conform to the OpenAI-compatible interface.',
        note: 'Vending costs an extra round-trip but is unavoidable for non-LLM APIs.',
      },
      {
        title: 'What runs in production',
        body:
          'LRU-aware key selection avoids hot-rotating one key while others sit idle. Per-project daily and monthly cost caps enforce budget discipline across all connected clients. A health monitor runs every 10 minutes — cheapest valid call per provider — and marks dead keys immediately with a Telegram alert. A live dashboard shows cost, key health, and per-project usage.',
      },
    ],
    links: [
      { label: 'AIbroker dashboard', href: 'https://aib.zapleo.com' },
      { label: 'GitHub — zapleoceo/AIbroker', href: 'https://github.com/zapleoceo/AIbroker' },
    ],
    accent: 'oklch(68% 0.17 250)',
  },
};
