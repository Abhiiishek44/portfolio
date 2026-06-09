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
    default: 'border-[#2b2b2d] bg-[#171717] text-[#d8b7c7] hover:bg-[#221a1f]',
    primary: 'border-[#7b5869] bg-[#7b5869] text-white hover:bg-[#8b6678]',
    ghost: 'border-transparent text-[#b9b3b7] hover:text-[#d8b7c7]'
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
