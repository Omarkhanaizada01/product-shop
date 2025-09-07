"use client";
import Image from "next/image";
import { useState } from "react";
import Tag from "./Tag";

const BigProductCard = ({
  title = "Chinese cabbage",
  price = "$4.99",
  originalPrice = "$9.99",
  ratingCount = 48,
  tags = ["sale", "best"],
  timeLeft = "02:23:12:45",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full max-w-[528px] h-auto bg-white border 
      ${isHovered ? "border-[#2C742F] shadow-[0_0_12px_0_rgba(32,181,38,0.32)]" : "border-[#E6E6E6]"} 
      transition-all flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Теги */}
      <div className="absolute left-3 top-3 sm:left-6 sm:top-6 flex gap-2 z-10">
        {tags.includes("sale") && (
          <div className="bg-red-500 text-white text-xs font-medium rounded px-2 h-[27px] flex items-center justify-center whitespace-nowrap">
            Sale 50%
          </div>
        )}
        {tags.includes("best") && <Tag type="best" />}
      </div>

      {/* Изображение */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[448px]">
        <Image src="/images/products/big apple.svg" 
        alt={title}
         fill 
         className="object-cover" />
      </div>

      {/* Кнопочная панель */}
      <div className="px-4 sm:px-6 flex items-center gap-2 mt-4">
        {/* Wishlist */}
        <button className="w-10 h-10 sm:w-[45px] sm:h-[45px] flex items-center justify-center">
          <svg width="47" height="46" viewBox="0 0 47 46" fill="none">
            <circle cx="23.5" cy="23" r="23" fill="#F2F2F2" />
            <path
              d="M23.4996 30.5451C6.83328 21.3333 18.4999 11.3333 23.4996 17.6567C28.4999 11.3333 40.1666 21.3333 23.4996 30.5451Z"
              stroke="#1A1A1A"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        {/* Add to Cart */}
        <button
          className={`flex-1 h-10 sm:h-[45px] rounded-[43px] flex items-center justify-center gap-3 px-4 sm:px-8 transition-colors 
          ${isHovered ? "bg-[#00B207] text-white" : "bg-[#F2F2F2]"}`}
        >
          <span className="font-medium text-sm sm:text-base">Add to Cart</span>
          <svg width="24" height="24" fill="none" stroke={isHovered ? "white" : "#1A1A1A"}>
            <path
              d="M8 10H5.5L4 16H17L15.5 10H13M8 10V7.5C8 5.567 9.567 4 11.5 4V4C13.433 4 15 5.567 15 7.5V10M8 10H15M8 10V12.5M15 10V12.5"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Quick View */}
        <button className="w-10 h-10 sm:w-[45px] sm:h-[45px] flex items-center justify-center">
        <div className="relative w-[46px] h-[46px]">
  <Image
    src="/images/icons/gray quick view.svg"
    alt="Quick view"
    fill
    className="object-contain"
  />
</div>
        </button>
      </div>

      {/* Текстовый блок */}
      <div className="px-4 sm:px-6 py-6 flex flex-col items-center gap-2">
        <h3 className="text-[#4D4D4D] text-base sm:text-lg md:text-xl font-normal text-center">
          {title}
        </h3>

        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl md:text-2xl font-bold">{price}</span>
          <span className="text-sm sm:text-base text-gray-400 line-through">{originalPrice}</span>
        </div>

        <div className="flex items-center gap-2">
        <div className="relative w-[60px] h-[12px]">
  <Image
    src="/images/icons/rating.svg"
    alt="Rating"
    fill
    className="object-contain"
  />
</div>
          <span className="text-xs sm:text-sm text-gray-400">({ratingCount})</span>
        </div>
      </div>

      {/* Таймер */}
      <div className="px-4 sm:px-6 pb-6 flex flex-col items-center gap-2">
        <p className="text-gray-500 text-xs sm:text-sm">Hurry up! Offer ends In:</p>
        <div className="flex gap-3 sm:gap-4">
          {timeLeft.split(":").map((unit, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-bold">{unit}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">
                {["days", "hours", "mins", "secs"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigProductCard;
