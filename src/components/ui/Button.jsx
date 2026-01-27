import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'default', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-full border px-4 py-1.5 text-sm font-geist transition-all cursor-pointer';
  
  const variants = {
    default: 'border-white/10 bg-white/[0.04] text-red-500 hover:bg-white/[0.08] hover:text-red-400',
    primary: 'border-red-500 bg-red-500 text-white hover:bg-red-600',
    ghost: 'border-transparent text-[#A6AAB0] hover:text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
