"use client";
import { useState } from "react";
import Image from "next/image";

export default function ShopTopBar({ onSortChange, resultsCount, onFilterToggle }) {
  const [sortOption, setSortOption] = useState("latest");

  const handleSortChange = (option) => {
    setSortOption(option);
    onSortChange(option);
  };

  return (
    <div className="w-full h-auto md:h-[45px] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
      {/* Кнопка Filter (видна на всех устройствах) */}
      <button 
        className="w-full md:w-[131px] h-[45px] bg-[#00B207] rounded-[43px] flex items-center justify-center gap-3 md:gap-[12px] md:mr-[205px]"
        onClick={onFilterToggle}
      >
        <span className="text-white font-poppins font-semibold text-sm md:text-[14px]">
          Filter
        </span>
        <Image src="/images/icons/filter.svg" alt="Filter" width={20} height={17} />
      </button>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
        {/* Sort By */}
        <div className="flex items-center gap-2 md:gap-[8px]">
          <span className="text-[#808080] font-poppins text-sm md:text-[14px]">Sort by:</span>
          
          <select
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-[#E5E5E5] rounded-[4px] px-3 py-2 md:px-4 md:py-[8px] text-[#4D4D4D] text-sm md:text-base"
          >
            <option value="latest">Latest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>

        {/* Results */}
        <div>
          <span className="text-[#4D4D4D] font-poppins text-sm md:text-[16px]">
            <span className="font-semibold">{resultsCount}</span> Results Found
          </span>
        </div>
      </div>
    </div>
  );
}