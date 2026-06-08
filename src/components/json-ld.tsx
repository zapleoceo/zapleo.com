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
          'Operator-turned-educator. 12 years of web agency work from Dnipro, now running an IT academy branch in Jakarta.',
        jobTitle: 'Branch Director, IT STEP Academy Jakarta',
        worksFor: { '@type': 'Organization', name: 'IT STEP Academy Jakarta' },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Oles Honchar Dnipro National University',
        },
        founder: [
          { '@type': 'Organization', name: 'Zapleo', url: 'https://zapleo.com' },
          { '@type': 'Organization', name: 'Pasijou', url: 'https://www.instagram.com/pasijou/' },
        ],
        knowsAbout: [
          'Software engineering',
          'Web development',
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
        '@type': 'WebSite',
        '@id': 'https://zapleo.com/#website',
        url: 'https://zapleo.com',
        name: 'zapleo',
        description:
          'Personal site of Dmitriy Zaporozhets — operator, educator, AI-augmented. 12 years of Ukrainian web agency, now running an IT academy branch in Jakarta.',
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
