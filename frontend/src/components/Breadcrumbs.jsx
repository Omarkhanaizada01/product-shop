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
    <div className="relative w-full h-[120px]" style={{ background: "linear-gradient(90.02deg, rgba(0,0,0,0.7) 0.03%, rgba(0,0,0,0) 91.31%)" }}>
      <Image src="/images/breadcrumbs.jpg" alt="Background" fill sizes="100vw" className="object-cover -z-10" />
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="flex items-center gap-[12px]">
          {paths.map((item, index) => (
            <div key={item.id} className="flex items-center gap-[12px]">
              {item.type === "icon" && (
                <Link href={item.link} passHref>
                  <div className="cursor-pointer hover:opacity-80 transition-opacity">
                    <Image src={item.content} alt={item.alt} width={24} height={24} style={{ width: "24px", height: "auto" }} />
                  </div>
                </Link>
              )}

              {item.type === "text" && (
                item.link ? (
                  <Link href={item.link} passHref>
                    <span className={`text-[16px] font-poppins ${item.content === categoryName ? "text-[#00B207]" : "text-[#999999]"} cursor-pointer hover:opacity-80 transition-opacity`}>
                      {item.content}
                    </span>
                  </Link>
                ) : (
                  <span className="text-[16px] font-poppins text-[#00B207]">{item.content}</span>
                )
              )}

              {index < paths.length - 1 && (
                <Image src="/images/icons/vectorRight.svg" alt="separator" width={8} height={4} style={{ width: "8px", height: "auto" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
