export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  isPlaceholder?: boolean;
  featured?: boolean;
  highlights?: string[];
  architectureNotes?: string;
}

export interface ExperienceItem {
  id: string;
  systemName: string;
  role: string;
  companyContext: string;
  period: string;
  technologies: string[];
  description: string;
  workflows: string[];
  keyContributions: string[];
  systemType: 'CRM' | 'ERP' | 'Task Management' | 'WMS' | 'Business Application';
}

export interface SkillCategory {
  category: string;
  description?: string;
  skills: string[];
}

export interface DomainItem {
  id: string;
  title: string;
  shortDescription: string;
  typicalWorkflows: string[];
  architecturalConsiderations: string[];
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Other';
  label: string;
  url: string;
  isPlaceholder: boolean;
  iconName: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  emailPlaceholder: boolean;
  location: string;
  availability: string;
  intro: string;
}
