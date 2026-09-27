export type Project = {
  title: string
  description: string
  label: string
  href?: string
}

// 虚构示例：把这些内容换成你愿意公开的介绍和项目。
export const site = {
  name: 'Mina Chen',
  headline: {
    lead: 'Ideas with',
    accent: 'somewhere to go.',
  },
  eyebrow: 'Independent project lab',
  intro:
    'I make small, thoughtful tools that turn complicated ideas into useful experiences.',
  location: 'Shanghai · working remotely',
  availability: 'Open to a good problem',
  builtWith: 'time, care & good questions',
  contactEmail: 'hello@example.com',
  footerNote: 'Made for curious people',
  projects: [
    {
      title: 'Signal Garden',
      description: 'A quiet dashboard for noticing patterns in a week of small observations.',
      label: 'Data / 2025',
      // 项目有真实入口后，添加 href，例如 href: 'https://example.com'。
    },
    {
      title: 'Field Notes',
      description: 'A reading companion for collecting sources, questions, and useful edges.',
      label: 'Research / 2024',
    },
    {
      title: 'A small game, soon',
      description: 'A playful experiment will live here as the project grows.',
      label: 'Play / next',
    },
  ] satisfies Project[],
}
