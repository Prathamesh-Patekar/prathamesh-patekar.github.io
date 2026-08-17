export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface CertificationItem {
  title: string;
  detail?: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  architecture: string;
  contribution: string;
  technology: string[];
  challenges: string[];
  solutions: string[];
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  platform: string;
  summary: string;
  tags: string[];
  featured: boolean;
  image?: string;
  caseStudy: CaseStudy;
}

export interface EngineeringStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resumePath: string;
}

export interface Profile {
  name: string;
  role: string;
  headline: string;
  about: string;
  photo: string;
  techStack: string[];
  stats: { label: string; value: string }[];
  aiTools: { name: string; use: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}
