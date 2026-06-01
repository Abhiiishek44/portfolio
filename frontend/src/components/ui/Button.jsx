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
    default: 'border-[#eae0e1] bg-white text-[#6b4e5b] hover:bg-[#f5eced]',
    primary: 'border-[#6b4e5b] bg-[#6b4e5b] text-white hover:bg-[#5d4350]',
    ghost: 'border-transparent text-[#4e4448] hover:text-[#6b4e5b]'
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
