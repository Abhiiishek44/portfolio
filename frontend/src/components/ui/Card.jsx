import React from 'react';

const Card = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'rounded-md border border-[#eae0e1] bg-white',
    secondary: 'rounded-xl border border-[#eae0e1] bg-[#fff8f8]',
    ghost: 'rounded-lg bg-transparent'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
