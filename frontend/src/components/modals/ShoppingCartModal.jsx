"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ShoppingCartModal({ isOpen, onClose, cartItems = [] }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Локальные картинки из public/images/products/
  const getImageUrl = (item) => {
    if (item?.name?.toLowerCase() === "corn") {
      return "/images/products/corn.jpg";
    }
    if (item?.name?.toLowerCase() === "eggplant") {
      return "/images/products/eggplant.jpg";
    }
    // дефолт — пусть тоже кукуруза
    return "/images/products/corn.jpg";
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60">
      <div className="w-[456px] h-full bg-white border border-[#E6E6E6] shadow-[0px_12px_48px_rgba(0,0,0,0.12)] p-10 flex flex-col justify-between overflow-y-auto">
        
        {/* Заголовок */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium text-[#1A1A1A]">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-[#E6E6E6] rounded-full hover:bg-gray-100"
          >
            ×
          </button>
        </div>

        {/* Список товаров */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item, idx) => {
              const imageUrl = getImageUrl(item);

              return (
                <div
                  key={idx}
                  className={`flex gap-3 pb-4 mb-4 items-center ${
                    idx !== cartItems.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <Image
                    src={imageUrl}
                    alt={item.name || "Product"}
                    width={120}
                    height={100}
                    sizes="120px" // ✅ чтобы не ругался
                    className="object-cover rounded"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm text-[#1A1A1A]">{item.name}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">{item.quantity} кг</span>
                      <span className="text-gray-500">x</span>
                      <span className="font-semibold text-[#1A1A1A]">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-black">×</button>
                </div>
              );
            })
          )}
        </div>

        {/* Подвал */}
        <div className="mt-auto">
          <div className="flex justify-between items-center py-6 border-t border-b border-gray-200">
            <span className="text-base text-[#1A1A1A]">
              {cartItems.length} Products
            </span>
            <span className="text-base font-semibold text-[#1A1A1A]">
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col gap-3 mt-6">
            <button className="w-full h-[51px] rounded-[43px] bg-[#00B207] text-white font-semibold text-base">
              Checkout
            </button>
            <button className="w-full h-[51px] rounded-[43px] bg-[#56AC591A] text-[#00B207] font-semibold text-base">
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


