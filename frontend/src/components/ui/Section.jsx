import React from 'react';

const Section = ({ children, className = '' }) => {
  return (
    <section className={`flex justify-center ${className}`}>
      <div className="w-full max-w-4xl px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
