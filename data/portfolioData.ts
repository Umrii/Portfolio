// data/portfolioData.ts
import { PersonalInfo, AboutMe, Project, ResumeData, BlogPost } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Anas Atiq",
  tagline: "MSc Data Science | Python Developer | Data Engineering & Energy Tech",
  description: "Building data pipelines and APIs that solve real problems",
  email: "anas.atiq2023@gmail.com",
  github: "https://github.com/Umrii",
  linkedin: "https://www.linkedin.com/in/anas-atiq/"
};

export const aboutMe: AboutMe = {
  paragraphs: [
    "I'm a Python developer and MSc Data Science student at Northumbria University with 2 years of experience building production-grade APIs and data pipelines. Previously worked at Hoboetech and CyberEvangelists delivering backend systems used in production.",
    "Particularly interested in how data engineering and automation are shaping the energy transition — recently built a live EU ETS carbon price tracker pulling real market data from the European Energy Exchange."
  ]
};


export const projects: Project[] = [
  {
    id: 1,
    title: "Carbon Market Tracker",
    description: "End-to-end data pipeline tracking live EU ETS carbon allowance (EUA) prices from the European Energy Exchange (EEX). Features a FastAPI REST API serving rolling analytics (7-day MA, 30-day MA, annualised volatility) and automated price alerts, visualised in an interactive Streamlit dashboard.",
    techStack: ["Python", "FastAPI", "SQLite", "Streamlit", "Plotly", "APScheduler"],
    liveDemo: "https://carbon-market-tracker.onrender.com/",
    github: "https://github.com/Umrii/carbon-market-tracker"
  },
  {
    id: 2,
    title: "Cinematch",
    description: "A movie discovery website built with the TMDB API, with an ML-based recommendation system in progress.",
    techStack: ["NextJS", "React", "Vercel", "NodeJS"],
    liveDemo: "https://cinematch.anasatiq.com/",
    github: "https://github.com/Umrii/Cinematch"
  },
];
export const resumeData: ResumeData = {
  pdfUrl: "/Resume.pdf", // Replace with your latest CV
  experience: [
    {
      title: "Python Developer",
      company: "Hoboetech, Lahore",
      period: "March 2025 - Sept 2025",
      description: "Built scalable data processing pipelines, implemented data validation and fault-handling mechanisms, and improved distributed workflow resilience through retry logic and failure recovery strategies."
    },
    {
      title: "Python Developer",
      company: "CyberEvangelists (Software Consultancy), Lahore",
      period: "July 2023 - February 2025",
      description: "Designed and deployed 10+ production-grade REST APIs using FastAPI with 1000+ daily requests. Built async processing systems with Celery and Redis. Optimized SQL queries reducing API latency by 12%."
    }
  ],
  education: [
    {
      degree: "MSc Data Science",
      institution: "Northumbria University",
      period: "2025 - 2027"
    },
    {
      degree: "BSc Computer Science",
      institution: "FAST - NUCES",
      period: "2019 - 2023"
    }
  ],
  skills: [
    "Python",
    "FastAPI",
    "SQL",
    "Docker",
    "Redis",
    "Celery",
    "Streamlit",
    "pandas",
    "AWS",
    "PostgreSQL",
    "JavaScript",
    "React",
  ]
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "System Design",
    excerpt: "Netflix Case Study",
    date: "Jan, 2026"
  }
];
