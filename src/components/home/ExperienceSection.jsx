import React from 'react';
import { EXPERIENCE } from '../../constants/experience';

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <h2 className="text-3xl font-bold font-geist text-white">Experience</h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="font-geist text-[18px] leading-[29px]">
              <span className="text-[#E4E5E6] underline decoration-gray-600 underline-offset-4">
                {exp.period}
              </span>
              :{' '}
              <span className="text-red-500">
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
            <p className="font-geist text-[#A6AAB0] text-[18px] leading-[29px]">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
