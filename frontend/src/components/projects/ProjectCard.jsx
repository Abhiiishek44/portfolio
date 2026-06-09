import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg border border-[#2b2b2d] bg-[#171717] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition-all hover:border-[#7b5869] hover:bg-[#1c181b]">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold font-geist text-[#f4f2f3]">{project.title}</h3>
          <div className="flex gap-3">
            {project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9b3b7] transition-colors hover:text-[#d8b7c7]"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#b9b3b7] transition-colors hover:text-[#d8b7c7]"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="font-geist text-[#b9b3b7] text-[16px] leading-[26px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#2b2b2d] bg-[#121213] px-3 py-1 text-xs font-geist text-[#b9b3b7]"
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
