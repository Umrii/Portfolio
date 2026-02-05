// components/ProjectCard.tsx
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-purple-400 mb-3">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300 border border-purple-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex gap-4">
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition-all duration-300"
        >
          <Github size={18} />
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
