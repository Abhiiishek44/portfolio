import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold font-geist text-[#1f1a1b] flex items-center gap-3">
        About Me!
      </h1>

      <div className="font-geist text-[#4e4448] text-[18px] leading-[29px] space-y-6 font-normal">
        <p>
          I am currently pursuing a degree in AI & Data Science with a focus on AI/ML application engineering.
          I work with pre-trained machine learning models, fine-tune them, and integrate them into real-world applications.
        </p>
        <p>
          I am continuously learning and improving my skills to build efficient and practical AI-powered solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
