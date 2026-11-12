import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Fieldnotes',
  description: 'IS 117-005 research portfolio on fast-growing careers in artificial intelligence and technology.',
  base: '/is117005-ai-career-research/',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'AI Career Fieldnotes',
    nav: [
      { text: 'Research', link: '/research/' },
      { text: 'Career Paths', link: '/careers/' },
      { text: 'About', link: '/about' }
    ],
    sidebar: [
      { text: 'Start Here', items: [
        { text: 'Research overview', link: '/research/' },
        { text: 'Career role comparison', link: '/research/career-role-comparison' },
        { text: 'NY / NJ job market snapshot', link: '/research/job-market-snapshot' },
        { text: 'About this project', link: '/about' }
      ] },
      { text: 'Career Profiles', items: [
        { text: 'AI / ML Specialist', link: '/careers/ai-ml-specialist' },
        { text: 'Data Scientist', link: '/careers/data-scientist' },
        { text: 'AI Product Manager', link: '/careers/ai-product-manager' },
        { text: 'AI Governance Analyst', link: '/careers/ai-governance-analyst' },
        { text: 'AI Security Engineer', link: '/careers/ai-security-engineer' },
        { text: 'Forward Deployed Engineer', link: '/careers/forward-deployed-engineer' },
        { text: 'AI Operations & Automation Engineer', link: '/careers/ai-operations-engineer' }
      ] }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/jo373-droid/is117005-ai-career-research' }],
    footer: { message: 'IS 117-005 · Student research portfolio', copyright: 'Research snapshot: November 2026' },
    search: { provider: 'local' },
    editLink: { pattern: 'https://github.com/jo373-droid/is117005-ai-career-research/edit/main/docs/:path', text: 'Edit this page on GitHub' }
  }
})
