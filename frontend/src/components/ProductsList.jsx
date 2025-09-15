"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchProducts } from "@/src/services/products";
import ProductCard5n from "./ui/ProductCard";

export default function ProductsList({
  sortBy,
  priceRange,
  rating,
  page = 1,
  pageSize = 9,
  onCountChange,
}) {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    const params = {
      sortBy,
      page,
      limit: pageSize,
    };

    if (categoryId) params.categoryId = categoryId;
    if (priceRange && Array.isArray(priceRange)) {
      params.minPrice = priceRange[0];
      params.maxPrice = priceRange[1];
    }
    if (rating) {
      params.minRating = rating;
    }

    fetchProducts(params)
      .then((data) => {
        const prods = data?.products ?? data ?? [];
        if (mounted) {
          setProducts(Array.isArray(prods) ? prods : []);
          if (onCountChange) onCountChange(data?.total ?? (Array.isArray(prods) ? prods.length : 0));
        }
      })
      .catch((e) => {
        console.error("Ошибка загрузки продуктов:", e);
        if (mounted) {
          setProducts([]);
          if (onCountChange) onCountChange(0);
        }
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [categoryId, sortBy, priceRange, rating, page, pageSize]);

  if (loading) return <p className="text-center py-8">Загрузка...</p>;
  if (!products.length) return <p className="text-gray-500 text-center py-8">Нет товаров.</p>;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  return (
    <div className="flex-1">
      <h2 className="text-lg md:text-xl font-semibold mb-4 font-poppins">
        {products.length ? (products[0].category?.name || "Products") : "Products"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((p) => {
          const imageUrl = p.image
            ? p.image.startsWith("http")
              ? p.image
              : `${baseUrl}${p.image}`
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
              tags={[]}
              salePercent={p.salePercent || 0}
              showWishlist={true}
              showQuickView={true}
            />
          );
        })}
      </div>
    </div>
  );
}


