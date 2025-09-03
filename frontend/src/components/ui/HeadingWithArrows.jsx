// src/components/ui/headings/HeadingWithArrows.jsx
"use client";

import Link from 'next/link';

const HeadingWithArrows = ({ 
  title, 
  buttonText, 
  buttonHref = "#", 
  className = "", 
  onPrevClick, 
  onNextClick 
}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <h2 className="text-2xl font-bold">{title}Client Testimonials</h2>
      <div className="flex gap-2 items-center">
        {buttonText && (
          <Link href={buttonHref} passHref className="mr-2">
            <span className="text-sm font-medium hover:text-[#00B207] transition-colors">
              {buttonText}
            </span>
          </Link>
        )}
        {/* Кнопка "налево" */}
        <button 
          onClick={onPrevClick}
          className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#00B207] group transition-colors duration-200"
          aria-label="Previous"
        >
          <svg 
            width="15" 
            height="12" 
            viewBox="0 0 15 12" 
            className="group-hover:stroke-white stroke-black transition-colors duration-200"
          >
            <path 
              d="M14 6L2 6M2 6L7 1M2 6L7 11" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Кнопка "направо" */}
        <button 
          onClick={onNextClick}
          className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#00B207] group transition-colors duration-200"
          aria-label="Next"
        >
          <svg 
            width="15" 
            height="12" 
            viewBox="0 0 15 12" 
            className="group-hover:stroke-white stroke-black transition-colors duration-200"
          >
            <path 
              d="M1 6H13M13 6L8 1M13 6L8 11" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeadingWithArrows;