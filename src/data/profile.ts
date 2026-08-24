import type { Profile } from '../types';
import { experience } from './experience';
import { projects } from './projects';
import { formatYearsOfExperience } from '../utils/experienceYears';

export const profile: Profile = {
  name: 'Prathamesh Patekar',
  role: 'Software Engineer',
  headline:
    'Building scalable web applications, REST APIs, and production e-commerce systems.',
  photo: '/images/profile/prathamesh.webp',
  about:
    'Designing and shipping production web applications across healthcare, e-commerce, and enterprise — with strong expertise in PHP/Laravel, React, REST APIs, databases, and system integrations.',
  techStack: [
    'Laravel',
    'PHP',
    'React',
    'CSS',
    'WordPress',
    'Magento',
    'Shopify',
    'MySQL',
    'MongoDB',
    'Docker',
    'REST APIs',
  ],
  stats: [
    { label: 'Experience', value: formatYearsOfExperience(experience) },
    { label: 'Production apps', value: `${projects.length}+ Projects` },
    { label: 'Domains', value: 'Health · Commerce · Enterprise' },
  ],
  aiTools: [
    { name: 'ChatGPT', use: 'Code generation, debugging, documentation' },
    { name: 'Claude', use: 'Code review, refactoring, architecture analysis' },
    { name: 'Cursor', use: 'AI pair programming, development productivity' },
    { name: 'Gemini', use: 'Research, solution design, technical assistance' },
  ],
};
