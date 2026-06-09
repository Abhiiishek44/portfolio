import React from 'react';
import { TECHNOLOGIES } from '../../constants/technologies';

const TechnologiesSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h2 className="text-3xl font-bold font-geist text-[#f4f2f3]">Technologies I have worked with</h2>

      <p className="font-geist text-[#d4ced2] text-[18px] leading-[29px]">
        The below mentioned list is a subset of all type of stack I have worked with, you can checkout my{' '}
        <a href="#interaone" className="underline decoration-1 underline-offset-4 transition-colors hover:text-[#d8b7c7]">
          InteraOne
        </a>{' '}
        to know more.
      </p>

      <div className="font-geist text-[#d4ced2] text-[18px] leading-[29px] space-y-4">
        {TECHNOLOGIES.map((tech) => (
          <div key={tech.category}>
            <span className="text-[#d8b7c7]">{tech.category}:</span> {tech.skills.join(', ')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologiesSection;
