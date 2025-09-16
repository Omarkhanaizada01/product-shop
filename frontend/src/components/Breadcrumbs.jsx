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
    <div className="relative w-full h-[80px] md:h-[100px] lg:h-[120px]">
      <Image
        src="/images/icons/breadcrumbs.jpg"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center gap-2 md:gap-3">
          {paths.map((item, index) => (
            <div key={item.id} className="flex items-center gap-2 md:gap-3">
              {item.type === "icon" && (
                <Link href={item.link} passHref>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <img
                      src={item.content}
                      alt={item.alt}
                      width={20}
                      height={20}
                      className="w-5 h-5 md:w-6 md:h-6"
                    />
                  </div>
                </Link>
              )}

              {item.type === "text" &&
                (item.link ? (
                  <Link href={item.link} passHref>
                    <span
                      className={`text-sm md:text-base font-poppins ${
                        item.content === categoryName
                          ? "text-[#00B207]"
                          : "text-white"
                      } cursor-pointer hover:opacity-80 transition-opacity`}
                    >
                      {item.content}
                    </span>
                  </Link>
                ) : (
                  <span className="text-sm md:text-base font-poppins text-[#00B207]">
                    {item.content}
                  </span>
                ))}

              {index < paths.length - 1 && (
                <img
                  src="/images/icons/vectorRight.svg"
                  alt="separator"
                  width={6}
                  height={6}
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}