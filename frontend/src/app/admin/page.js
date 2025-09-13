"use client";
import { useEffect, useState } from "react";
import API from "@/src/utils/api";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => setError("Ошибка при загрузке продуктов"));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Админ-панель</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{product.title}</h2>
            <p>{product.price} ₸</p>
          </div>
        ))}
      </div>
    </div>
  );
}
