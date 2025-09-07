"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchProducts } from "@/src/services/products";
import ProductCard5n from "./ui/ProductCard";

export default function ProductsList() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const params = {};
    if (categoryId) params.categoryId = categoryId;

    fetchProducts(params)
      .then(setProducts)
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Загрузка...</p>;
  if (!products.length) return <p className="text-gray-500">Нет товаров в этой категории.</p>;

  return (
    <div className="flex-1">
      <h2 className="text-xl font-semibold mb-4 font-poppins">
        {products.length ? (products[0].category?.name || "Products") : "Products"}
      </h2>

      {/* 5 колонок, расстояние 24px */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((p) => {
          const imageUrl = p.image
            ? p.image.startsWith("http")
              ? p.image
              : `http://localhost:3001${p.image}`
            : "/images/placeholder.png";

          return (
            <ProductCard5n
              key={p.id}
              size="5n"
              product={{
                name: p.title || p.name,
                price: `$${p.price}`,
                image: imageUrl,
              }}
              tags={[]} // если нужны метки (sale/new)
              salePercent={30} // пример процента скидки
              showWishlist={true}
              showQuickView={true}
            />
          );
        })}
      </div>
    </div>
  );
}
