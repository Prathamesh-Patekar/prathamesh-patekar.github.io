import type { EducationItem, CertificationItem } from '../types';

export const education: EducationItem[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Mumbai',
    period: '2023 — 2025',
    score: 'CGPI: 7.69',
  },
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Mumbai',
    period: '2021',
    score: 'CGPA: 8.33',
  },
];

export const certifications: CertificationItem[] = [
  {
    title: 'NPTEL Elite Certification — Artificial Intelligence in Industrial and Management Engineering',
    detail: '8-week course, Aug–Oct 2025 — Score: 64%',
  },
  {
    title: 'NPTEL Elite Certification — Big Data Computing',
    detail: '8-week course, Aug–Oct 2025 — Score: 60%',
  },
];

export const activities: string[] = [
  'Volunteer in Graphics Designing at College Fest',
  'Student Assistant in Placement Cell',
];
