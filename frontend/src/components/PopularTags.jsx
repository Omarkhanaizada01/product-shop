'use client';

import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
  "Bread", "Meat", "Snacks", "Tiffin", "Launch",
  "Dinner", "Breakfast", "Fruit"
];

export default function PopularTags() {
  const [hoveredTag, setHoveredTag] = useState("Organic");

  return (
    <div className="w-full lg:w-[312px] h-auto lg:h-[293px] pb-4 lg:pb-[26px] opacity-100 pt-4 lg:pt-6">
      <SectionHeading title="Popular Tag" />
      
      <div className="w-full lg:w-[294px] h-auto opacity-100 rounded-[30px] flex flex-wrap gap-2 p-1">
        {tags.map((tag, index) => (
          <div
            key={tag}
            className={`inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-1.5 rounded-[30px] transition-all duration-200 cursor-pointer ${
              hoveredTag === tag
                ? 'bg-[#00B207] text-white'
                : 'bg-[#F2F2F2] text-[#1A1A1A]'
            }`}
            style={{
              height: '28px',
              padding: '4px 12px'
            }}
            onMouseEnter={() => setHoveredTag(tag)}
            onMouseLeave={() => setHoveredTag("Organic")}
          >
            <span className="font-poppins font-normal text-xs md:text-[14px] leading-[150%] whitespace-nowrap">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}