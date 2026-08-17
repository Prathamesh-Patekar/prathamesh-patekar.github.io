import type { Profile } from '../types';
import { experience } from './experience';
import { projects } from './projects';
import { getYearsOfExperience, formatYearsOfExperience } from '../utils/experienceYears';

const years = getYearsOfExperience(experience);

export const profile: Profile = {
  name: 'Prathamesh Patekar',
  role: 'Software Engineer',
  headline:
    'Building scalable web applications, REST APIs, and production e-commerce systems.',
  photo: '/images/profile/prathamesh.webp',
  about: `${years}+ years delivering production software across healthcare, e-commerce, and enterprise — from Laravel APIs and React interfaces to WordPress, Magento, and Shopify platforms.`,
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
