"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";
import Heading from "../ui/Heading";
import { fetchProducts } from "@/src/services/products";

const PopularProducts = ({ cardSize = "5n" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    setLoading(true);
    fetchProducts({ limit: 10, sortBy: "popularity" })
      .then((data) => {
        const prods = data?.products ?? [];
        setProducts(Array.isArray(prods) ? prods : []);
      })
      .catch((e) => {
        console.error("Ошибка загрузки популярных продуктов:", e);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-6">Загрузка...</p>;
  if (!products.length) return <p className="text-center text-gray-500">Нет популярных товаров.</p>;

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Popular Products" buttonText="View All" className="mb-8" />

        <div className="w-full min-h-[714px]">
          <div className="flex flex-wrap">
            {products.slice(0, 5).map((p, index) => {
              const imageUrl = p.image?.startsWith("http") ? p.image : `${baseUrl}${p.image}`;
              return (
                <div key={p.id} className="w-full md:w-1/2 lg:w-1/5 flex justify-center">
                  <ProductCard
                    size={cardSize}
                    product={{
                      id: p.id,
                      name: p.title || p.name,
                      price: `$${p.price}`,
                      oldPrice: p.oldPrice ? `$${p.oldPrice}` : null,
                      image: imageUrl || "/images/placeholder.png",
                    }}
                    tags={index === 0 ? ["sale"] : []}
                    salePercent={p.salePercent || 0}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap mt-6">
            {products.slice(5, 10).map((p, index) => {
              const imageUrl = p.image?.startsWith("http") ? p.image : `${baseUrl}${p.image}`;
              return (
                <div key={p.id} className="w-full md:w-1/2 lg:w-1/5 flex justify-center">
                  <ProductCard
                    size={cardSize}
                    product={{
                      id: p.id,
                      name: p.title || p.name,
                      price: `$${p.price}`,
                      oldPrice: p.oldPrice ? `$${p.oldPrice}` : null,
                      image: imageUrl || "/images/placeholder.png",
                    }}
                    tags={index === 3 ? ["sale"] : []}
                    salePercent={p.salePercent || 0}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
