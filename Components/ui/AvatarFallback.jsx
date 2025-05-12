import React from 'react';

const AvatarFallback = ({ name, className }) => {
  // Get initials from name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className={`flex items-center justify-center bg-[#D1B49D] ${className}`}>
      <span className="text-5xl font-bold text-[#7B3F00]">{initials}</span>
    </div>
  );
};

export default AvatarFallback;