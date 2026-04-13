import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-all">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold font-geist text-white">{project.title}</h3>
          <div className="flex gap-3">
            {project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A6AAB0] hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A6AAB0] hover:text-white transition-colors"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="font-geist text-[#A6AAB0] text-[16px] leading-[26px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-geist text-[#A6AAB0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
