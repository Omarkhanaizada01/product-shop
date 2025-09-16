// src/components/modals/ProductQuickViewModal.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductQuickViewModal({ isOpen, onClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);

  if (!isOpen || !product) return null;

  // Слайды: либо массив картинок, либо одна картинка, либо дефолтная
  const slides =
    (product.images && product.images.length > 0
      ? product.images
      : product.image
      ? [product.image]
      : ["/images/products/default-product.svg"]);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-[1320px] h-[636px] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
        >
          ✕
        </button>

        <div className="flex h-full">
          {/* Левая часть - изображения */}
          <div className="w-[648px] h-[556px] mt-10 ml-10 flex gap-6">
            {/* Миниатюры */}
            <div className="relative w-[80px] h-[396px] flex flex-col items-center">
              <button onClick={prevSlide} className="w-6 h-6 flex items-center justify-center mb-3">
                ▲
              </button>

              <div className="flex flex-col gap-3 h-[396px] overflow-y-auto">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`w-[80px] h-[90px] flex items-center justify-center cursor-pointer transition-all duration-200 ${
                      activeSlide === index
                        ? "border border-[#00B207] rounded-[3px]"
                        : "border border-transparent"
                    }`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <div className="w-full h-full relative">
                      <Image
                        src={slide}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-contain rounded-[3px]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={nextSlide} className="w-6 h-6 flex items-center justify-center mt-3">
                ▼
              </button>
            </div>

            {/* Основное изображение */}
            <div className="flex-1 h-[556px] flex items-center justify-center">
              <div className="relative w-full h-[396px]">
                <Image
                  src={slides[activeSlide]}
                  alt={product.name || "Product image"}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Правая часть - детали */}
          <div className="w-[568px] mt-10 ml-16">
            <div className="space-y-6">
              {/* Заголовок и статус */}
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold text-gray-900">
                  {product.name || "Unknown Product"}
                </h1>

                <div className="flex items-center gap-4">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm">
                    {product.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                  <span className="text-gray-600 text-sm">
                    SKU: {product.sku || "N/A"}
                  </span>
                </div>
              </div>

              {/* Цена */}
              <div className="flex items-center gap-3">
                <span className="text-2xl font-semibold text-green-600">
                  ${product.price || "0.00"}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              {/* Описание */}
              <p className="text-gray-600 leading-relaxed">
                {product.description || "No description available."}
              </p>

              {/* Бренд */}
              <div className="flex items-center gap-4">
                <span className="font-medium">Brand:</span>
                <span className="text-gray-600">
                  {product.brand || "Unknown"}
                </span>
              </div>

              {/* Количество и кнопки */}
              <div className="flex items-center gap-4">
                <div className="w-[124px] h-[50px] border border-[#E6E6E6] rounded-[170px] bg-white flex items-center justify-between p-2">
                  <button onClick={decreaseQuantity}>-</button>
                  <span>{quantity}</span>
                  <button onClick={increaseQuantity}>+</button>
                </div>

                <button className="w-[368px] h-[45px] bg-[#00B207] text-white rounded-[43px] flex items-center justify-center gap-3 px-8 transition-colors hover:bg-green-700">
                  <span className="font-medium text-base">Add to Cart</span>
                </button>
              </div>

              {/* Категория */}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Category:</span>
                  <span className="text-gray-600">
                    {product.category?.name || "Uncategorized"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
