"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchCategoryById } from "@/src/services/categories";

export default function Breadcrumbs() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    if (categoryId) {
      fetchCategoryById(categoryId)
        .then((c) => setCategoryName(c.name))
        .catch(() => setCategoryName(null));
    } else {
      setCategoryName(null);
    }
  }, [categoryId]);

  const paths = [
    { id: "home", type: "icon", content: "/images/icons/home.svg", link: "/", alt: "Home" },
    { id: "shop", type: "text", content: "Shop", link: "/shop" },
    { id: "current", type: "text", content: categoryName || "All Products" }
  ];

  return (
    <div className="relative w-full h-[120px]">
      {/* ✅ Фоновое изображение */}
      <Image
        src="/images/icons/breadcrumbs.jpg"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* ✅ затемнение поверх картинки */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      {/* ✅ Контент поверх */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center gap-[12px]">
          {paths.map((item, index) => (
            <div key={item.id} className="flex items-center gap-[12px]">
              {item.type === "icon" && (
                <Link href={item.link} passHref>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src={item.content}
                      alt={item.alt}
                      width={24}
                      height={24}
                      style={{ width: "24px", height: "auto" }}
                    />
                  </div>
                </Link>
              )}

              {item.type === "text" &&
                (item.link ? (
                  <Link href={item.link} passHref>
                    <span
                      className={`text-[16px] font-poppins ${
                        item.content === categoryName
                          ? "text-[#00B207]"
                          : "text-white"
                      } cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      {item.content}
                    </span>
                  </Link>
                ) : (
                  <span className="text-[16px] font-poppins text-[#00B207]">
                    {item.content}
                  </span>
                ))}

              {index < paths.length - 1 && (
                <img
                  src="/images/icons/vectorRight.svg"
                  alt="separator"
                  width={8}
                  height={8}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
