"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";
import Heading from "../ui/Heading";
import { fetchProducts } from "@/src/services/products";

const FeaturedProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    setLoading(true);
    fetchProducts({ limit: 5, sortBy: "featured" })
      .then((data) => {
        const prods = data?.products ?? [];
        setProducts(Array.isArray(prods) ? prods : []);
      })
      .catch((e) => {
        console.error("Ошибка загрузки featured:", e);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-6">Загрузка...</p>;
  if (!products.length) return <p className="text-center text-gray-500">Нет товаров.</p>;

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Featured Products" buttonText="View All" className="mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((p, index) => {
            const imageUrl = p.image?.startsWith("http") ? p.image : `${baseUrl}${p.image}`;
            return (
              <ProductCard
                key={p.id}
                size="5n"
                product={{
                  id: p.id,
                  name: p.title || p.name,
                  price: `$${p.price}`,
                  oldPrice: p.oldPrice ? `$${p.oldPrice}` : null,
                  image: imageUrl || "/images/placeholder.png",
                }}
                tags={index === 0 ? ["sale"] : []}
                salePercent={p.salePercent || 0}
                showWishlist
                showQuickView
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;

