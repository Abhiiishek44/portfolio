import React from 'react';

const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  ...props 
}) => {
  return (
    <div className="rounded-full border border-[#2b2b2d] bg-[#171717] px-5 py-3">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent font-geist text-sm text-[#f4f2f3] placeholder:text-[#8f888d] outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
