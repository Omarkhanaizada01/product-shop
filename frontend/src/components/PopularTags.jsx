
'use client';

import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

const tags = [
  "Healthy", "Low fat", "Vegetarian", "Kid foods", "Vitamins",
  "Bread", "Meat", "Snacks", "Tiffin", "Launch",
  "Dinner", "Breakfast", "Fruit"
];

export default function PopularTags() {
  const [hoveredTag, setHoveredTag] = useState("Organic"); // Второй тег в hover состоянии

  return (
    <div className="w-[312px] h-[293px] pb-[26px] opacity-100 pt-6">
      {/* Заголовок */}
      <SectionHeading title="Popular Tag" />
      
      {/* Контейнер для тегов */}
      <div className="w-[294px] h-[197px] opacity-100 rounded-[30px] flex flex-wrap gap-2 p-1">
        {tags.map((tag, index) => (
          <div
            key={tag}
            className={`inline-flex items-center justify-center px-4 py-1.5 rounded-[30px] transition-all duration-200 cursor-pointer ${
              hoveredTag === tag
                ? 'bg-[#00B207] text-white' // Hover состояние
                : 'bg-[#F2F2F2] text-[#1A1A1A]' // Default состояние
            }`}
            style={{
              height: '33px',
              padding: '6px 16px'
            }}
            onMouseEnter={() => setHoveredTag(tag)}
            onMouseLeave={() => setHoveredTag("Organic")} // Возвращаем второй тег в hover
          >
            <span className="font-poppins font-normal text-[14px] leading-[150%] whitespace-nowrap">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}