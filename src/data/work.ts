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
        year: '2026',
        place: 'Built for IT STEP Academy Jakarta',
        name: 'Stepan — AI sales agent',
        tagline: 'AI sales conversations connected to CRM.',
        body: 'An AI agent for Instagram and WhatsApp. It qualified leads in the customer’s language, checked replies about prices, links and offers against business facts, and handed the conversation to a person with a stated reason.',
        tags: ['Python', 'Instagram', 'WhatsApp', 'LLM', 'CRM'],
        url: 'https://stepan2.zapleo.com',
        accent: 'oklch(68% 0.20 280)',
      },
      {
        slug: 'aibroker',
        year: '2026',
        place: 'Self-hosted',
        name: 'AIbroker',
        tagline: 'One gateway for every AI provider.',
        body: 'Provider keys are kept in one place: calls go through the broker or get time-limited lease access. Every call is logged with an estimated cost, spending limits are set per project, and a monitor takes dead or rate-limited keys out of rotation.',
        tags: ['FastAPI', 'Python', 'PostgreSQL', 'LiteLLM'],
        url: 'https://github.com/zapleoceo/AIbroker',
        accent: 'oklch(68% 0.17 250)',
      },
    ],
  },
  {
    eraKey: 'hospitality',
    items: [
      {
        slug: 'veranda',
        year: '2025 — present',
        place: 'Nha Trang, Vietnam',
        name: 'Veranda',
        tagline: 'A restaurant I co-own and operate.',
        body: 'Opened in November 2025. I set up its operations software: POS integration, automatic payment reconciliation, a kitchen display with time alerts, and staff reporting over Telegram.',
        tags: ['F&B', 'Operations', 'Automation'],
        url: 'https://veranda.my/',
      },
      {
        slug: 'pasijou',
        year: '2023 — 2026',
        place: 'Weligama, Sri Lanka',
        name: 'Pasijou',
        tagline: 'Coworking and restaurant on the south coast.',
        body: 'Co-owned and operated from February 2023 until the lease ended in March 2026. Breakeven in eight months; a 4.9 out of 5 guest rating while it ran.',
        tags: ['F&B', 'Coworking', 'Operations'],
        url: 'https://www.instagram.com/pasijou/',
        accent: 'oklch(78% 0.14 165)',
      },
    ],
  },
  {
    eraKey: 'agency',
    items: [
      {
        slug: 'apcu',
        year: 'Zapleo',
        place: 'Ukraine · live',
        name: 'apcu.ua',
        tagline: 'Website of the Association of Perfumery and Cosmetics of Ukraine.',
        body: 'Built by Zapleo and still run by the association’s own editors. The site credits Zapleo for its development.',
        tags: ['WordPress', 'PHP', 'Editorial CMS'],
        url: 'https://apcu.ua/',
        accent: 'oklch(82% 0.18 70)',
      },
      {
        slug: 'archive',
        year: '2010 →',
        place: 'Ukraine, for clients in the US and Europe',
        name: 'Zapleo client work',
        tagline: 'Web and mobile development since 2010.',
        body: 'Most client projects were delivered under NDA or have since been replaced. Public footprint: the Zapleo organisation on GitHub.',
        tags: ['Web', 'Mobile', 'Client work'],
        url: 'https://github.com/zapleo',
      },
    ],
  },
];

// Slugs with a full case-study page at /work/[slug]/
export const CASE_SLUGS = new Set<string>(['pasijou', 'apcu', 'aibroker']);

export function getAllWorkItems(): WorkItem[] {
  return WORK_ERAS.flatMap((era) => era.items);
}
