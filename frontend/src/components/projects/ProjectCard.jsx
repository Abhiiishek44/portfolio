import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg border border-[#eae0e1] bg-white p-6 shadow-[0_2px_24px_rgba(82,55,68,0.04)] transition-all hover:border-[#6b4e5b] hover:bg-[#f5eced]">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl font-bold font-geist text-[#1f1a1b]">{project.title}</h3>
          <div className="flex gap-3">
            {project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4e4448] transition-colors hover:text-[#6b4e5b]"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4e4448] transition-colors hover:text-[#6b4e5b]"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="font-geist text-[#4e4448] text-[16px] leading-[26px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#eae0e1] bg-[#fff8f8] px-3 py-1 text-xs font-geist text-[#4e4448]"
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
