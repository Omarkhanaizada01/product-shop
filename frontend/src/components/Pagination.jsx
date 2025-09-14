"use client";
import { useState } from "react";
import Image from "next/image";

export default function Pagination() {
  const totalPages = 21;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
          currentPage === 1
            ? "bg-[#F2F2F2] opacity-50 cursor-not-allowed"
            : "bg-[#F2F2F2] hover:bg-[#e6e6e6]"
        }`}
      >
        <Image
          src="/images/icons/ChevronDown.png"
          alt="Prev"
          width={20}
          height={20}
          className="rotate-90"
        />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((page) => {
            // Показываем первые 3, последние 1 и 2 вокруг текущей
            return (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1) ||
              (currentPage <= 3 && page <= 5) ||
              (currentPage >= totalPages - 2 && page >= totalPages - 4)
            );
          })
          .map((page, idx, arr) => {
            const prevPage = arr[idx - 1];
            const showDots = prevPage && page - prevPage > 1;

            return (
              <div key={page} className="flex items-center">
                {showDots && (
                  <span className="w-9 h-9 flex items-center justify-center text-[#4D4D4D]">
                    ...
                  </span>
                )}
                <button
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition ${
                    currentPage === page
                      ? "bg-[#00B207] text-white"
                      : "bg-[#F2F2F2] text-[#4D4D4D] hover:bg-[#e6e6e6]"
                  }`}
                >
                  {page}
                </button>
              </div>
            );
          })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
          currentPage === totalPages
            ? "bg-[#F2F2F2] opacity-50 cursor-not-allowed"
            : "bg-[#F2F2F2] hover:bg-[#e6e6e6]"
        }`}
      >
        <Image
          src="/images/icons/ChevronDown.png"
          alt="Next"
          width={20}
          height={20}
          className="-rotate-90"
        />
      </button>
    </div>
  );
}
