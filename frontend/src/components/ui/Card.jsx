import React from 'react';

const Card = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'rounded-md border border-[#2b2b2d] bg-[#171717]',
    secondary: 'rounded-xl border border-[#2b2b2d] bg-[#121213]',
    ghost: 'rounded-lg bg-transparent'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
