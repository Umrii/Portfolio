// data/portfolioData.ts
import { PersonalInfo, AboutMe, Project, ResumeData, BlogPost } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Anas Atiq",
  tagline: "AI Enthusiast | Creative Problem Solver",
  description: "Crafting elegant solutions to complex problems. Building the future, one line of code at a time.",
  email: "your.email@example.com",
  github: "https://github.com/Umrii",
  linkedin: "https://www.linkedin.com/in/anas-atiq/"
};

export const aboutMe: AboutMe = {
  paragraphs: [
    "I’m a software engineer with a strong foundation in Python and full-stack development, currently pursuing a Master’s in Data Science at Northumbria University, Newcastle, UK.",
    "I enjoy building practical systems that turn data into reliable, usable products, with experience across backend services, databases, and cloud-based workflows.",
    "Right now, I’m focused on data engineering, scalable architectures, and sharpening my problem-solving skills for real-world impact."
  ]
};


export const projects: Project[] = [
  {
    id: 1,
    title: "Mood-Aware Music Recommendation System",
    description: "A data-driven music recommendation system that analyzes audio features to cluster songs by mood and suggest personalized tracks based on emotional context.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "K-Means", "Spotify Audio Features"],
    liveDemo: "",
    github: "https://github.com/Umrii/Mood-Aware-Music-Recommendation-System"
  }
];

export const resumeData: ResumeData = {
  pdfUrl: "/Resume.pdf", // Place your PDF in the public folder
  experience: [
    {
      title: "Python Engineer",
      company: "HoboeTech, Lahore",
      period: " March 2025 - Sept 2025",
      description: "Leading development of scalable web applications"
    },
    {
      title: "Python Developer",
      company: "Cyberevangelists",
      period: "July 2023 - February 2025",
      description: "Built and maintained multiple client projects"
    }
  ],
  education: [
    {
      degree: "Master in Data Science",
      institution: "Northumbria University",
      period: "2025 - 2027"
    },
    {
      degree: "Bachelor in Computer Science",
      institution: "FAST - NUCES",
      period: "2019 - 2023"
    }
  ],
  skills: [
    "Python",
    "SQL",
    "Docker",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "JavaScript",
    "React",
    "Node.js",
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
