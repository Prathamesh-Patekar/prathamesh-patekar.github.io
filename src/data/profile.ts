import type { Profile } from '../types';

export const profile: Profile = {
  name: 'Prathamesh Patekar',
  role: 'Software Engineer',
  headline:
    'Building scalable web applications, REST APIs, and production e-commerce systems.',
  photo: '/images/profile/prathamesh.png',
  about:
    '4+ years delivering production software across healthcare, e-commerce, and enterprise — from Laravel APIs and React interfaces to WordPress, Magento, and Shopify platforms.',
  techStack: [
    'Laravel',
    'PHP',
    'React',
    'CSS',
    'WordPress',
    'Magento',
    'Shopify',
    'MySQL',
    'REST APIs',
  ],
  stats: [
    { label: 'Experience', value: '4+ Years' },
    { label: 'Production apps', value: '9+ Projects' },
    { label: 'Domains', value: 'Healthcare · E-commerce · Enterprise' },
  ],
  aiTools: [
    { name: 'ChatGPT', use: 'Code generation, debugging, documentation' },
    { name: 'Claude', use: 'Code review, refactoring, architecture analysis' },
    { name: 'Cursor', use: 'AI pair programming, development productivity' },
    { name: 'Gemini', use: 'Research, solution design, technical assistance' },
  ],
};
