import React from 'react';

const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  ...props 
}) => {
  return (
    <div className="rounded-full border border-white/10 bg-black/40 px-5 py-3">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent font-geist text-sm text-red-500 placeholder:text-[#A6AAB0] outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
