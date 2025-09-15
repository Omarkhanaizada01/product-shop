// frontend/src/components/Pagination.jsx
"use client";

import Image from "next/image";

export default function Pagination({ currentPage, total = 0, pageSize = 9, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Формирование видимого ряда страниц (как у тебя в верстке)
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    // логика отображения: первые 3, последние 1 и +/-1 вокруг текущей
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1) ||
      (currentPage <= 3 && i <= 5) ||
      (currentPage >= totalPages - 2 && i >= totalPages - 4)
    ) {
      pages.push(i);
    }
  }

  // Удаляем повторы
  const uniquePages = Array.from(new Set(pages)).sort((a, b) => a - b);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
          currentPage === 1 ? "bg-[#F2F2F2] opacity-50 cursor-not-allowed" : "bg-[#F2F2F2] hover:bg-[#e6e6e6]"
        }`}
      >
        <Image src="/images/icons/ChevronDown.png" alt="Prev" width={20} height={20} className="rotate-90" />
      </button>

      <div className="flex items-center gap-3">
        {uniquePages.map((page, idx) => {
          const prev = uniquePages[idx - 1];
          const showDots = prev && page - prev > 1;
          return (
            <div key={page} className="flex items-center">
              {showDots && <span className="w-9 h-9 flex items-center justify-center text-[#4D4D4D]">...</span>}
              <button
                onClick={() => onPageChange(page)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition ${
                  currentPage === page ? "bg-[#00B207] text-white" : "bg-[#F2F2F2] text-[#4D4D4D] hover:bg-[#e6e6e6]"
                }`}
              >
                {page}
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 flex items-center justify-center rounded-full transition ${
          currentPage === totalPages ? "bg-[#F2F2F2] opacity-50 cursor-not-allowed" : "bg-[#F2F2F2] hover:bg-[#e6e6e6]"
        }`}
      >
        <Image src="/images/icons/ChevronDown.png" alt="Next" width={20} height={20} className="-rotate-90" />
      </button>
    </div>
  );
}

