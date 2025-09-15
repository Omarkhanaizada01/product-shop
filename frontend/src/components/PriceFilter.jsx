"use client";
import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";

export default function PriceFilter({ onChange }) {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(1500);

  const handleChange = (type, value) => {
    if (type === "min") setMinPrice(value);
    if (type === "max") setMaxPrice(value);

    if (onChange) {
      onChange({
        minPrice: type === "min" ? value : minPrice,
        maxPrice: type === "max" ? value : maxPrice,
      });
    }
  };

  return (
    <div className="w-full lg:w-[312px] flex flex-col gap-4 md:gap-[16px] pb-4 md:pb-[24px]">
      <SectionHeading title="Price" />

      {/* Слайдеры */}
      <div className="relative w-full lg:w-[312px] h-[18px]">
        <div className="absolute top-1/2 -translate-y-1/2 w-full h-[6px] bg-[#E6E6E6] rounded-[15px]"></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[6px] bg-[#00B207] rounded-[15px]"
          style={{
            left: `${(minPrice / 1500) * 100}%`,
            width: `${((maxPrice - minPrice) / 1500) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min="0"
          max="1500"
          value={minPrice}
          onChange={(e) => handleChange("min", Number(e.target.value))}
          className="absolute top-1/2 -translate-y-1/2 w-full h-[18px] bg-transparent cursor-pointer z-10"
        />

        <input
          type="range"
          min="0"
          max="1500"
          value={maxPrice}
          onChange={(e) => handleChange("max", Number(e.target.value))}
          className="absolute top-1/2 -translate-y-1/2 w-full h-[18px] bg-transparent cursor-pointer z-10"
        />

        {/* Кастомные ползунки */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-2 border-[#00B207] rounded-full z-20"
          style={{ left: `${(minPrice / 1500) * 100}%`, marginLeft: "-9px" }}
        ></div>
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] bg-white border-2 border-[#00B207] rounded-full z-20"
          style={{ left: `${(maxPrice / 1500) * 100}%`, marginLeft: "-9px" }}
        ></div>
      </div>

      {/* Отображение значений */}
      <div>
        <span className="text-[#1A1A1A] font-poppins text-sm md:text-[14px]">
          Price: <span className="font-medium">{minPrice}</span> —{" "}
          <span className="font-medium">{maxPrice}</span>
        </span>
      </div>

      <div className="border-t border-[#E6E6E6]"></div>
    </div>
  );
}
