// src/app/(main)/shop/ShopFilters/ShopTopBar.js
import Image from 'next/image';
import Link from 'next/link';

export default function ShopTopBar() {
  return (
    <div className="w-[1317px] h-[45px] flex items-center relative">
      {/* Кнопка Filter */}
      <button className="absolute left-0 w-[131px] h-[45px] bg-[#00B207] rounded-[43px] flex items-center justify-center px-8 py-[14px] gap-[12px]">
        <span className="text-white font-poppins font-semibold text-[14px] leading-[120%]">
          Filter
        </span>
        <Image 
          src="/images/icons/filter.svg" 
          alt="Filter"
          width={20}
          height={17}
          style={{ border: '0px solid #FFFFFF' }}
        />
      </button>

      {/* Блок Sort By */}
      <div className="absolute left-[336px] flex items-center gap-[8px]">
        <span className="text-[#808080] font-poppins text-[14px] leading-[150%]">
          Sort by:
        </span>
        
        <div className="w-[166px] h-[41px] border border-[#E5E5E5] rounded-[4px] px-4 py-[10px] flex items-center justify-between">
          <span className="text-[#4D4D4D] font-poppins text-[14px] leading-[150%]">
            Latest
          </span>
          <Image 
            src="/ChevronDown.png" 
            alt="Dropdown"
            width={14}
            height={14}
            style={{ transform: 'rotate(-0deg)' }}
          />
        </div>
      </div>

      {/* Блок с количеством результатов (теперь в одной строке) */}
      <div className="absolute left-[1125px] h-[24px] whitespace-nowrap">
        <span className="text-[#4D4D4D] font-poppins text-[16px] leading-[150%]">
          <span className="font-semibold leading-[120%]">52</span> Results Found
        </span>
      </div>
    </div>
  );
}