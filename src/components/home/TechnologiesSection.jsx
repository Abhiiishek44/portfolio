import React from 'react';
import { TECHNOLOGIES } from '../../constants/technologies';

const TechnologiesSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h2 className="text-3xl font-bold font-geist text-white">Technologies I have worked with</h2>

      <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
        The below mentioned list is a subset of all type of stack I have worked with, you can checkout my{' '}
        <a href="#projects" className="underline decoration-1 underline-offset-4 hover:text-white transition-colors">
          projects
        </a>{' '}
        to know more.
      </p>

      <div className="font-geist text-[#A6AAB0] text-[18px] leading-[29px] space-y-4">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.category}>
            <span className="text-red-500">{tech.category}:</span> {tech.skills.join(', ')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;
