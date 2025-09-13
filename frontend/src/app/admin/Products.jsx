"use client";
import { useEffect, useState } from "react";
import API from "@/src/utils/api";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products").then((res) => setProducts(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Удалить продукт?")) return;
    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert("Ошибка при удалении");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Продукты</h1>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id} className="flex justify-between border p-2">
            <span>{p.title}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDelete(p.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
