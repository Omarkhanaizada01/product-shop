"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchProducts } from "@/src/services/products";

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
      <h2 className="text-xl font-semibold mb-4 font-poppins">{products.length ? (products[0].category?.name || "Products") : "Products"}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col items-center">
            <Image src={p.image} alt={p.title || p.name} width={150} height={150} className="object-contain" />
            <h3 className="mt-3 font-poppins text-[16px]">{p.title || p.name}</h3>
            <p className="text-[#00B207] font-semibold">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
