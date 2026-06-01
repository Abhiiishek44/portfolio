import React from 'react';
import { EXPERIENCE } from '../../constants/experience';

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h2 className="text-3xl font-bold font-geist text-[#1f1a1b]">InteraOne</h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="font-geist text-[18px] leading-[29px]">
              <span className="text-[#1f1a1b] underline decoration-[#d1c3c7] underline-offset-4">
                {exp.period}
              </span>
              :{' '}
              <span className="text-[#6b4e5b]">
                {exp.role} @{' '}
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  {exp.company}
                </a>{' '}
                ({exp.type})
              </span>
            </div>
            <p className="font-geist text-[#4e4448] text-[18px] leading-[29px]">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
