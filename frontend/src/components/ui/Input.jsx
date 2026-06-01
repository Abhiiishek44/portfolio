import React from 'react';

const Input = ({ 
  value, 
  onChange, 
  placeholder, 
  className = '',
  ...props 
}) => {
  return (
    <div className="rounded-full border border-[#eae0e1] bg-white px-5 py-3">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full bg-transparent font-geist text-sm text-[#6b4e5b] placeholder:text-[#807478] outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
