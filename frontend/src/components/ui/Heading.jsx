// src/components/ui/headings/Headings.jsx
"use client";

import Link from 'next/link';
import ArrowButton from './ArrowButton';

const Heading = ({ title, buttonText, buttonHref = "#", className = "" }) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {buttonText && (
        <Link href={buttonHref} passHref>
          <ArrowButton 
            variant="text-only" 
            as="span"
            className="!w-auto !h-auto px-0 py-0"
          >
            {buttonText}
          </ArrowButton>
        </Link>
      )}
    </div>
  );
};

export default Heading;