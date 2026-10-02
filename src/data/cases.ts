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
    tagline: 'Coworking, kitchen and community in one place.',
    year: '2023 — 2026',
    place: 'Weligama, Sri Lanka',
    role: 'Co-owner, operator',
    team: 'Local kitchen and operations team',
    stack: ['Hospitality operations', 'Network infrastructure', 'Digital ordering', 'Guest communications'],
    brief:
      'Pasijou was a coworking space and restaurant on the south coast of Sri Lanka. I co-owned and operated it from February 2023 until March 2026, when the lease ended and the project closed.',
    sections: [
      {
        title: 'What I was responsible for',
        body:
          'Day-to-day operations and everything technical behind them: the network that guests worked on — routing, VPN, mesh Wi-Fi, load balancing and backup power — and the digital side of the business: ordering, analytics and guest communications.',
        note: 'A coworking space lives or dies by its Wi-Fi.',
      },
      {
        title: 'Outcome',
        body:
          'The project reached breakeven in eight months and kept a 4.9 out of 5 guest rating while it ran. It closed in March 2026 at the end of the lease.',
      },
      {
        title: 'What it taught me',
        body:
          'Running a physical business is where operations stop being abstract. Stock, staff shifts and guest messages are data problems with real consequences — the same problems I now solve for other businesses with AI.',
      },
    ],
    links: [{ label: 'Pasijou on Instagram', href: 'https://www.instagram.com/pasijou/' }],
    accent: 'oklch(78% 0.14 165)',
  },

  apcu: {
    name: 'apcu.ua',
    tagline: 'The website of the Association of Perfumery and Cosmetics of Ukraine.',
    year: 'Zapleo project',
    place: 'Ukraine · live',
    role: 'Zapleo — development',
    team: 'Zapleo team',
    stack: ['WordPress', 'PHP', 'Editorial CMS'],
    brief:
      'Zapleo built the website of the Ukrainian association of perfumery and cosmetics manufacturers. The site is still live and still credits Zapleo for its development.',
    sections: [
      {
        title: 'What the site does',
        body:
          'It publishes industry news and regulatory updates for association members and the public, and is run by the association’s own editors without a developer in the loop.',
        note: 'A build is finished when the client can run it without you.',
      },
    ],
    links: [{ label: 'Visit apcu.ua', href: 'https://apcu.ua/' }],
    accent: 'oklch(82% 0.18 70)',
  },

  'ai-sales-assistant': {
    name: 'Stepan — AI sales agent',
    tagline: 'An AI agent that talks to leads and hands them to people.',
    year: '2026',
    place: 'Built for IT STEP Academy Jakarta',
    role: 'Idea, architecture and build',
    team: 'Built by me with AI-assisted development',
    stack: ['Python', 'Instagram', 'WhatsApp', 'CRM integration', 'LLM'],
    brief:
      'I built Stepan for the IT STEP branch I ran in Jakarta, when the idea had no one else to take it on. It answered inbound messages on Instagram and WhatsApp, held a staged sales conversation in the customer’s language, and handed the lead to a manager with a stated reason. Over July and August 2026 it handled about 80 inbound conversations a day.',
    sections: [
      {
        title: 'Why it was needed',
        body:
          'The branch paid for leads, but a large share of them went quiet after a missed call or a slow first reply. Managers also moved conversations into personal chats, where nobody could see what happened next.',
      },
      {
        title: 'What it did',
        body:
          'It answered inbound conversations, qualified the lead, recorded the context and passed it to a person when a human decision was needed. It was connected to the CRM so that a missed call could trigger a follow-up.',
        note: 'The agent works the queue; people make the calls that matter.',
      },
      {
        title: 'The safety check that matters most',
        body:
          'Once, in a live chat, the agent stated a price that did not exist. After that, replies that mention a price, a link or an offer are checked against the business’s own facts before sending. If a claim is not supported, the agent rewrites the reply or hands the conversation to a person.',
        note: 'An AI that can invent a price needs a check, not a better prompt.',
      },
    ],
    links: [
      { label: 'Stepan', href: 'https://stepan2.zapleo.com/' },
      { label: 'Discuss an agent for your business', href: '/contact/' },
    ],
    accent: 'oklch(68% 0.20 280)',
  },

  aibroker: {
    name: 'AIbroker',
    tagline: 'One gateway for every AI provider my systems use.',
    year: '2026',
    place: 'Self-hosted',
    role: 'Architecture and build',
    team: 'Built by me with AI-assisted development',
    stack: ['FastAPI', 'Python', 'PostgreSQL', 'LiteLLM', 'Docker'],
    brief:
      'My AI systems — the Vera memory and the Stepan sales agent among them — call many model providers. AIbroker is the single gateway in front of all of them: provider keys are kept in one place, with calls proxied or given time-limited lease access, every call is logged with an estimated cost, and dead or rate-limited keys are taken out of rotation automatically.',
    sections: [
      {
        title: 'Why cost has to be checked, not trusted',
        body:
          'On 27 June 2026 a library update silently changed how call costs were calculated, and every logged cost became $0. Later a gap of $122 appeared between logged spend and a provider invoice. Since then, logged costs are treated as estimates and checked against the provider’s own invoice.',
        note: 'A cost guard that trusts its own estimates is not a cost guard.',
      },
      {
        title: 'Two ways to serve a project',
        body:
          'Proxy mode: the broker calls the model and returns the answer, so the project never sees a key. Lease mode: for APIs that do not fit the standard interface, the broker hands out a short-lived key and records the usage when it comes back.',
      },
      {
        title: 'What keeps it running',
        body:
          'A monitor runs every ten minutes: failing keys are re-checked on every pass, healthy ones about once an hour. A key that hits a rate limit is parked for a few minutes; one that runs out of a monthly quota is parked until the quota resets. Spending limits are set per project.',
      },
    ],
    links: [{ label: 'GitHub — zapleoceo/AIbroker', href: 'https://github.com/zapleoceo/AIbroker' }],
    accent: 'oklch(68% 0.17 250)',
  },
};
