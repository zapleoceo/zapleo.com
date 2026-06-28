export type WorkItem = {
  slug: string;
  name: string;
  year: string;
  place: string;
  tagline: string;
  body: string;
  tags: string[];
  url: string;
  accent?: string;
};

export type WorkEra = {
  eraKey: 'ai' | 'hospitality' | 'agency';
  items: WorkItem[];
};

export const WORK_ERAS: WorkEra[] = [
  {
    eraKey: 'ai',
    items: [
      {
        slug: 'ai-sales-assistant',
        year: '2025 — present',
        place: 'Jakarta · live in production',
        name: 'AI Sales Assistant',
        tagline: 'Talks to leads. Learns from coaching. Ships in weeks.',
        body: 'Conversational AI for high-volume sales channels — Instagram DMs, Telegram, WhatsApp. Responds to leads in seconds, qualifies, books appointments. Includes a coach interface: the business owner updates scripts and product knowledge themselves, no code required.',
        tags: ['Python', 'Telegram API', 'Instagram API', 'LLM', 'Sales automation'],
        url: '/work/ai-sales-assistant/',
        accent: 'oklch(68% 0.20 280)',
      },
      {
        slug: 'aibroker',
        year: '2024 — present',
        place: 'Self-hosted · Hetzner',
        name: 'AIbroker',
        tagline: 'LLM key broker · multi-provider · cost-guarded',
        body: 'Centralized API key broker for all AI providers — LRU-aware routing, per-project cost caps, health monitoring. Proxy mode via LiteLLM + vending mode for arbitrary APIs. Serves Vera and Stepan bots in production.',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'LiteLLM', 'Self-hosted'],
        url: 'https://aib.zapleo.com',
        accent: 'oklch(68% 0.17 250)',
      },
    ],
  },
  {
    eraKey: 'hospitality',
    items: [
      {
        slug: 'pasijou',
        year: '2022 — present',
        place: 'Weligama, Sri Lanka',
        name: 'Pasijou',
        tagline: 'Coworking + restaurant + cinema + yoga, in one room',
        body: 'Hybrid clubhouse on the south coast — work and lunch in the same space, BBQ nights, music. Ukrainian comfort food, 4.9 on Tripadvisor.',
        tags: ['F&B', 'Hospitality', 'Coworking', 'Operator role'],
        url: 'https://www.instagram.com/pasijou/',
        accent: 'oklch(78% 0.14 165)',
      },
      {
        slug: 'veranda',
        year: '2023 — present',
        place: 'Vietnam',
        name: 'Veranda',
        tagline: 'Second hospitality venture, same playbook',
        body: 'A place where work and food belong in one room. Currently semi-private — public launch in progress.',
        tags: ['F&B', 'Hospitality', 'Operator role'],
        url: '#',
      },
    ],
  },
  {
    eraKey: 'agency',
    items: [
      {
        slug: 'apcu',
        year: '2018 — present',
        place: 'Ukraine · live',
        name: 'apcu.ua',
        tagline: 'Industry portal · Cosmetics & Perfumery Association of Ukraine',
        body: 'Custom WordPress build. Multi-section editorial CMS, member directory, regulatory news feed. Built once, iterating with the industry ever since.',
        tags: ['CMS', 'Industry body', 'WordPress', 'PHP'],
        url: 'https://apcu.ua/',
        accent: 'oklch(82% 0.18 70)',
      },
      {
        slug: 'mobilshina',
        year: '2014 — 2017',
        place: 'Ukraine · since refactored',
        name: 'Mobilshina (earlier version)',
        tagline: 'Frontend rebuild · automotive ecommerce, 30K+ SKUs',
        body: 'Catalog UX, fitment selector, mobile-first checkout. Site has since been re-platformed by another studio.',
        tags: ['E-commerce', 'High-SKU', 'PHP + JS'],
        url: '#',
      },
      {
        slug: 'opentv',
        year: '2016 — 2020',
        place: 'Ukraine · archived',
        name: 'opentv.media',
        tagline: 'Custom CMS · independent news outlet',
        body: 'Long-form articles, photo essays, live coverage workflow. Editorial-first publishing pipeline.',
        tags: ['News', 'Editorial CMS', 'PHP'],
        url: '#',
      },
      {
        slug: 'archive',
        year: '2010 — 2022',
        place: 'Dnipro, mostly',
        name: '+ 37 client engagements',
        tagline: 'Booking platforms, retail, EdTech-adjacent, mobile apps',
        body: 'A long tail of agency work — most under NDA, some long-since taken offline. Public footprint: github.com/zapleo (org repos), Clutch profile, LinkedIn company page.',
        tags: ['Agency archive', 'Mixed stack', 'On request'],
        url: 'https://github.com/zapleo',
      },
    ],
  },
];

// Slugs with a full case-study page at /work/[slug]/
export const CASE_SLUGS = new Set<string>(['pasijou', 'apcu', 'aibroker', 'ai-sales-assistant']);

export function getAllWorkItems(): WorkItem[] {
  return WORK_ERAS.flatMap((era) => era.items);
}
