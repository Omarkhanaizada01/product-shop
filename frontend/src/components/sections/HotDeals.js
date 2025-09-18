"use client";

import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import BigProductCard from "../ui/BigProductCard";
import ProductCard5n from "../ui/ProductCard";
import { fetchProducts } from "@/src/services/products";

const HotDeals = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  useEffect(() => {
    setLoading(true);
    fetchProducts({ limit: 12, sortBy: "discount" })
      .then((data) => {
        const prods = data?.products ?? [];
        setProducts(Array.isArray(prods) ? prods : []);
      })
      .catch((e) => {
        console.error("Ошибка загрузки hot deals:", e);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-6">Загрузка...</p>;
  if (!products.length) return <p className="text-gray-500 text-center">Нет акций.</p>;

  const bigProduct = products[0];
  const topProducts = products.slice(1, 7);
  const bottomProducts = products.slice(7, 12);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <Heading
        title="Hot Deals"
        subtitle="Don't miss out on these limited time offers"
        buttonText="View All"
        className="mb-6 sm:mb-10"
      />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
        {bigProduct && (
          <div className="lg:w-[520px] xl:w-[560px] flex-shrink-0">
            <BigProductCard
              title={bigProduct.title || bigProduct.name}
              price={`$${bigProduct.price}`}
              originalPrice={bigProduct.oldPrice ? `$${bigProduct.oldPrice}` : null}
              ratingCount={bigProduct.rating || 0}
              tags={["sale"]}
            />
          </div>
        )}

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {topProducts.map((p) => {
            const imageUrl = p.image?.startsWith("http") ? p.image : `${baseUrl}${p.image}`;
            return (
              <ProductCard5n
                key={p.id}
                size="5n"
                product={{
                  id: p.id,
                  name: p.title || p.name,
                  price: `$${p.price}`,
                  oldPrice: p.oldPrice ? `$${p.oldPrice}` : null,
                  image: imageUrl || "/images/placeholder.png",
                }}
                tags={["sale"]}
                salePercent={p.salePercent || 0}
              />
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {bottomProducts.map((p) => {
          const imageUrl = p.image?.startsWith("http") ? p.image : `${baseUrl}${p.image}`;
          return (
            <ProductCard5n
              key={p.id}
              size="5n"
              product={{
                id: p.id,
                name: p.title || p.name,
                price: `$${p.price}`,
                oldPrice: p.oldPrice ? `$${p.oldPrice}` : null,
                image: imageUrl || "/images/placeholder.png",
              }}
              tags={["sale"]}
              salePercent={p.salePercent || 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HotDeals;
