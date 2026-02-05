// sections/Resume.tsx
import React from 'react';
import { Download } from 'lucide-react';
import { resumeData } from '@/data/portfolioData';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Resume
        </h2>

        <div className="text-center mb-12">
          <a
            href={resumeData.pdfUrl}
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Download size={20} />
            Download Resume (PDF)
          </a>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-purple-300">Experience</h3>
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <h4 className="text-xl font-bold text-purple-300 mb-2">{exp.title}</h4>
                <p className="text-blue-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-purple-300">Education</h3>
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20"
              >
                <h4 className="text-xl font-bold text-purple-300 mb-2">{edu.degree}</h4>
                <p className="text-blue-400">
                  {edu.institution} | {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-bold mb-6 text-purple-300">Skills</h3>
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
            <div className="flex flex-wrap gap-3">
              {resumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-lg text-purple-300 border border-purple-500/30 hover:border-purple-400 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
