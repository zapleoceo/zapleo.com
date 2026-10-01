/**
 * Person + WebSite schema for the homepage.
 * All claims cross-referenced to public sources (LinkedIn, GitHub, DOU, Clutch).
 */
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://zapleo.com/#person',
        name: 'Dmitriy Zaporozhets',
        url: 'https://zapleo.com',
        description:
          'AI integrator and business operator. Founder of Zapleo and former branch director of IT STEP Academy Jakarta.',
        jobTitle: 'AI Integrator and Founder',
        worksFor: { '@type': 'Organization', name: 'Zapleo' },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Oles Honchar Dnipro National University',
        },
        founder: [
          { '@type': 'Organization', name: 'Zapleo', url: 'https://zapleo.com' },
          { '@type': 'Organization', name: 'Pasijou', url: 'https://www.instagram.com/pasijou/' },
        ],
        owns: {
          '@type': 'SoftwareApplication',
          name: 'AIbroker',
          applicationCategory: 'DeveloperApplication',
          url: 'https://aib.zapleo.com',
          codeRepository: 'https://github.com/zapleoceo/AIbroker',
          description: 'Centralized LLM API key broker with LRU routing, per-project cost caps, and health monitoring. Self-hosted on Hetzner.',
          operatingSystem: 'Linux',
          author: { '@id': 'https://zapleo.com/#person' },
        },
        knowsAbout: [
          'Software engineering',
          'Web development',
          'Conversational AI',
          'AI sales automation',
          'Project management',
          'EdTech',
          'AI-augmented education',
        ],
        sameAs: [
          'https://www.linkedin.com/in/dmitriy-zaporozhets-83b15375/',
          'https://github.com/zapleo',
          'https://www.instagram.com/ai_dimaz/',
          'https://t.me/zapleosoft',
          'https://x.com/zapleosoft',
        ],
      },
      {
        '@type': 'Service',
        '@id': 'https://zapleo.com/#revenue-recovery-service',
        name: 'Revenue Recovery Sprint',
        description: 'Ten-business-day diagnostic of one inbound sales funnel across source, CRM, calls, messages and handoffs. Delivers a measured loss map and a first-fix blueprint.',
        url: 'https://zapleo.com/revenue-recovery/',
        provider: { '@id': 'https://zapleo.com/#person' },
        serviceType: 'Sales funnel diagnostic and AI integration planning',
        areaServed: ['Southeast Asia', 'Ukraine', 'Global'],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://zapleo.com/contact/',
          contactType: 'sales',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://zapleo.com/#website',
        url: 'https://zapleo.com',
        name: 'zapleo',
        description:
          'Dmitriy Zaporozhets helps businesses find lost inbound leads and build AI-assisted operational fixes.',
        publisher: { '@id': 'https://zapleo.com/#person' },
        inLanguage: ['en', 'uk', 'ru', 'id'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
