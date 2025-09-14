// # Слайдер цены
'use client';
import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

export default function PriceFilter() {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(1500);

  return (
    <div className="w-[312px] h-[149px] opacity-100 flex flex-col gap-[16px] pb-[24px]">
      {/* Heading Section */}
      <SectionHeading title="Price" />

      {/* Slider Container */}
      <div className="w-[312px] h-[18px] relative">
        {/* Slider BG */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[6px] bg-[#E6E6E6] rounded-[15px]"></div>
        
        {/* Active Range */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 h-[6px] bg-[#00B207] rounded-[15px]"
          style={{
            left: `${(minPrice / 1500) * 100}%`,
            width: `${((maxPrice - minPrice) / 1500) * 100}%`
          }}
        ></div>
        
        {/* First Thumb */}
        <input
          type="range"
          min="0"
          max="1500"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="absolute top-1/2 transform -translate-y-1/2 w-full h-[18px] appearance-none bg-transparent cursor-pointer z-10"
          style={{
            background: 'transparent'
          }}
        />
        
        {/* Second Thumb */}
        <input
          type="range"
          min="0"
          max="1500"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="absolute top-1/2 transform -translate-y-1/2 w-full h-[18px] appearance-none bg-transparent cursor-pointer z-10"
          style={{
            background: 'transparent'
          }}
        />
        
        {/* Custom Thumbs */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] bg-white border-2 border-[#00B207] rounded-full cursor-pointer z-20"
          style={{
            left: `${(minPrice / 1500) * 100}%`,
            marginLeft: '-9px'
          }}
        ></div>
        
        <div 
          className="absolute top-1/2 transform -translate-y-1/2 w-[18px] h-[18px] bg-white border-2 border-[#00B207] rounded-full cursor-pointer z-20"
          style={{
            left: `${(maxPrice / 1500) * 100}%`,
            marginLeft: '-9px'
          }}
        ></div>
      </div>

      {/* Price Text */}
      <div className="w-[114px] h-[21px]">
        <span className="text-[#1A1A1A] font-poppins text-[14px] leading-[150%]">
          Price: <span className="font-medium">{minPrice}</span> — <span className="font-medium">{maxPrice}</span>
        </span>
      </div>

      {/* Divider Line */}
      <div className="w-[312px] h-[0px] opacity-100 border-t border-[#E6E6E6]"></div>
    </div>
  );
}