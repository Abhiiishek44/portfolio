import React from 'react';

const Card = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'rounded-md border border-white/10 bg-white/[0.03]',
    secondary: 'rounded-xl border border-white/10 bg-white/[0.02]',
    ghost: 'rounded-lg bg-transparent'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
