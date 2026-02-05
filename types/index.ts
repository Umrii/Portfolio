// types/index.ts
export interface PersonalInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface AboutMe {
  paragraphs: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemo: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface ResumeData {
  pdfUrl: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}
