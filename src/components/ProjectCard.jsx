import React from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-neutral">{project.title}</h3>
          <div className="flex items-center space-x-3 mt-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === 'Production' ? 'bg-green-100 text-green-800' :
              project.status === 'Active Development' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
              {project.status}
            </span>
            <span className="text-sm text-gray-500 flex items-center space-x-1">
              <Tag size={14} />
              {project.category}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <h4 className="font-bold text-neutral mb-2">Key Features:</h4>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 mb-4">
        {project.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <h4 className="font-bold text-neutral mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-light text-gray-800 rounded-lg text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
            <Github size={18} className="mr-1" /> View Code
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
            <ExternalLink size={18} className="mr-1" /> Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;