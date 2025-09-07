"use client";
import Image from "next/image";
import { useState } from "react";

const ProductCard = ({
  size = "5n",
  product = {
    name: "Green Apple",
    price: "$14.99",
    oldPrice: "$24.99",
    image: "/images/products/greenApple.svg",
  },
  tags = [],
  salePercent = 50,
  showWishlist = true,
  showQuickView = true,
  withHoverBorder = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Конфиги размеров
  const sizesConfig = {
    "5n": {
      card: "w-full max-w-[264px] h-[327px]",
      image: "w-full h-[240px] relative",
      info: "w-full h-[87px] p-3 sm:p-[12px]",
      content: "w-full h-[63px]",
    },
    "4x": {
      card: "w-full max-w-[312px] h-[407px] rounded-[8px]",
      image: "w-full h-[312px] relative",
      info: "w-full h-[95px] p-4",
      content: "w-full h-full",
    },
    "5x": {
      card: "w-full max-w-[248px] h-[339px] rounded-[8px]",
      image: "w-full h-[248px] relative",
      info: "w-full h-[91px] p-4",
      content: "w-full h-full",
    },
  };

  const currentSize = sizesConfig[size];

  const tagConfig = {
    sale: { bg: "bg-[#EA4B48]", text: `${salePercent}% Sale`, width: "w-[72px]" },
    new: { bg: "bg-[#FF8A00]", text: "New", width: "w-[47px]" },
    best: { bg: "bg-[#2388FF]", text: "Best Sale", width: "w-[80px]" },
    out: { bg: "bg-[#1A1A1A]", text: "Out of stock", width: "w-[101px]" },
  };

  return (
    <div
      className={`bg-white border border-[#E5E5E5] relative transition-all duration-300 ${currentSize.card} 
      ${isHovered ? "border-[#00B207] shadow-[0px_0px_12px_0px_#20B52652]" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Теги */}
      {tags.length > 0 && (
        <div className="absolute left-2 top-2 z-10 flex flex-col gap-1">
          {tags.map((tagType) => (
            <div
              key={tagType}
              className={`${tagConfig[tagType].bg} ${tagConfig[tagType].width} h-[27px] rounded px-2 flex items-center justify-center`}
            >
              <span className="text-white text-xs font-medium">{tagConfig[tagType].text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Изображение */}
      <div className={currentSize.image}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      {/* Информация */}
      <div className={`absolute bottom-0 ${currentSize.info}`}>
        <div className={`flex flex-col gap-[6px] ${currentSize.content}`}>
          <p
            className={`font-poppins text-sm sm:text-[14px] leading-[150%] ${
              isHovered ? "text-green-500" : "text-[#4D4D4D]"
            }`}
          >
            {product.name}
          </p>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-[14px] text-gray-400 line-through">{product.oldPrice}</span>
              )}
            </div>
            <div className="relative w-[60px] h-[12px]">
              <Image
                src="/images/icons/rating.svg"
                alt="Rating"
                fill
                sizes="60px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Кнопка корзины */}
        <div className="absolute w-10 h-10 top-[23.5px] right-3">
          <button className="w-full h-full flex items-center justify-center">
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none">
              <circle cx="20" cy="20.5" r="19.5" stroke="#E5E5E5" strokeWidth="1" />
              <path
                d="M16.6667 19.3333H14.1667L12.5 28.5H27.5L25.8333 19.3333H23.3333M16.6667 19.3333V16.8333C16.6667 14.9924 18.1591 13.5 20 13.5V13.5C21.8409 13.5 23.3333 14.9924 23.3333 16.8333V19.3333M16.6667 19.3333H23.3333M16.6667 19.3333V21.8333M23.3333 19.3333V21.8333"
                stroke={isHovered ? "#4CAF50" : "#1A1A1A"}
                strokeWidth="1.3"
                className="transition-colors duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Wishlist & Quick view */}
      {isHovered && (showWishlist || showQuickView) && (
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          {showWishlist && (
            <button className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/icons/add to wishlist.svg"
                alt="Wishlist"
                width={40}
                height={40}
              />
            </button>
          )}
          {showQuickView && (
            <button className="w-10 h-10 flex items-center justify-center">
              <div className="relative w-[46px] h-[46px]">
                <Image
                  src="/images/icons/gray quick view.svg"
                  alt="Quick view"
                  fill
                  sizes="46px"
                  className="object-contain"
                />
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
