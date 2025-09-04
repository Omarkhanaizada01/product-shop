"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchCategories } from "@/src/services/categories"; // проверь путь
import SectionHeading from "./SectionHeading";

export default function CategoriesList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryIdFromUrl = searchParams.get("categoryId");

  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(categoryIdFromUrl ? Number(categoryIdFromUrl) : null);

  useEffect(() => {
    fetchCategories().then(setCategories).catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    setSelectedCategoryId(categoryIdFromUrl ? Number(categoryIdFromUrl) : null);
  }, [categoryIdFromUrl]);

  const onSelect = (id) => {
    setSelectedCategoryId(id);
    const q = new URLSearchParams(searchParams.toString());
    if (id) q.set("categoryId", id);
    else q.delete("categoryId");
    router.push(`/shop?${q.toString()}`);
  };

  return (
    <div className="w-[312px] opacity-100">
      <SectionHeading />
      <div className="space-y-[10px] mt-4">
        {categories.map((cat) => {
          const checked = selectedCategoryId === cat.id;
          return (
            <div
              key={cat.id}
              className="flex items-center gap-[10px] cursor-pointer group py-1"
              onClick={() => onSelect(cat.id)}
            >
              <div className="relative">
                <input type="radio" id={`cat-${cat.id}`} name="category" checked={checked} readOnly className="absolute opacity-0 w-0 h-0" />
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${checked ? "border-[#00B207]" : "border-[#CCCCCC] group-hover:border-[#00B207]"}`}>
                  {checked && <div className="w-3 h-3 bg-[#00B207] rounded-full"></div>}
                </div>
              </div>

              <label htmlFor={`cat-${cat.id}`} className="flex items-center gap-1 cursor-pointer">
                <span className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">{cat.name}</span>
                {Array.isArray(cat.products) && <span className="text-[#808080] font-poppins text-sm leading-[150%]">({cat.products.length})</span>}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
