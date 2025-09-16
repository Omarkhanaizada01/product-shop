"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumbs from "@/src/components/Breadcrumbs";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Green Capsicum",
      price: 14.99,
      oldPrice: 20.99,
      stock: true,
      image: "/images/products/capsicum.jpg",
    },
    {
      id: 2,
      name: "Chinese Cabbage",
      price: 45.0,
      oldPrice: null,
      stock: true,
      image: "/images/products/cabbage.jpg",
    },
    {
      id: 3,
      name: "Fresh Sujapuri Mango",
      price: 9.0,
      oldPrice: null,
      stock: false,
      image: "/images/products/mango.jpg",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Хлебные крошки */}
      <Breadcrumbs currentPage="Wishlist" />

      <div className="container mx-auto px-4 py-6 md:py-8 lg:py-10">
        {/* Заголовок по центру */}
        <div className="flex justify-center mb-6 md:mb-8 mt-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800">
            My Wishlist
          </h1>
        </div>
      
        {/* Мобильная версия - карточки */}
        <div className="block md:hidden">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <span className="font-medium text-sm sm:text-base">{item.name}</span>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-gray-400 hover:text-red-600 text-lg"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <div className="flex items-center">
                    {item.oldPrice && (
                      <span className="line-through text-gray-400 mr-2 text-xs">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-semibold text-gray-800 text-sm">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-1">Stock</p>
                  {item.stock ? (
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                      In Stock
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              <button
                disabled={!item.stock}
                className={`w-full py-2 rounded-full text-sm font-medium ${
                  item.stock
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Десктопная версия - таблица */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-white text-left text-sm uppercase">
                <th className="p-4 text-gray-500 font-semibold">Product</th>
                <th className="p-4 text-gray-500 font-semibold">Price</th>
                <th className="p-4 text-gray-500 font-semibold">Stock Status</th>
                
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="flex items-center gap-3 p-4">
                    <div className="relative w-14 h-14">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span className="font-medium text-gray-800">{item.name}</span>
                  </td>

                  <td className="p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      {item.oldPrice && (
                        <span className="line-through text-gray-400 mr-2 text-sm">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="font-semibold text-gray-800 text-lg">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </td>

                  <td className="p-4">
                    {item.stock ? (
                      <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
                        In Stock
                      </span>
                    ) : (
                      <span className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                        Out of Stock
                    </span>
                    )}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-end items-center gap-2 lg:gap-3">
                      <button
                        disabled={!item.stock}
                        className={`px-4 py-2 lg:px-5 lg:py-2 rounded-full text-xs lg:text-sm font-medium ${
                          item.stock
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Add to Cart
                      </button>

                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-gray-400 hover:text-red-600 p-1 lg:p-2"
                      >
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Сообщение для пустого вишлиста */}
        {wishlist.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">❤️</div>
            <h2 className="text-xl font-medium text-gray-600 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-6">Start adding items you love!</p>
            <button 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
              onClick={() => window.location.href = '/shop'}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}