"use client";
import { useEffect, useState } from "react";
import API from "@/src/utils/api";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    categoryId: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Загрузка продуктов
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products);
    } catch (err) {
      console.error("Ошибка при загрузке продуктов", err);
    }
  };

  // Удаление
  const handleDelete = async (id) => {
    if (!confirm("Удалить продукт?")) return;
    try {
      await API.delete(`/products/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      alert("Ошибка при удалении");
    }
  };

  // Сохранение (создание/редактирование)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/products/${editingId}`, form);
      } else {
        await API.post("/products", form);
      }
      setForm({ title: "", price: "", description: "", image: "", categoryId: "" });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      alert("Ошибка при сохранении продукта");
    }
  };

  // Начать редактирование
  const handleEdit = (product) => {
    setForm({
      title: product.title || product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      categoryId: product.categoryId,
    });
    setEditingId(product.id);
  };

  return (
    <div className="space-y-8">
      {/* Заголовок */}
      <h1 className="text-3xl font-bold text-green-700">Управление продуктами</h1>

      {/* Форма добавления/редактирования */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md border border-green-100 space-y-4"
      >
        <h2 className="text-xl font-semibold text-green-600">
          {editingId ? "Редактировать продукт" : "Добавить продукт"}
        </h2>

        <input
          type="text"
          placeholder="Название"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="number"
          placeholder="Цена"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <textarea
          placeholder="Описание"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          type="text"
          placeholder="URL изображения"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />

        <input
          type="number"
          placeholder="ID категории"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={form.categoryId}
          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          {editingId ? "Сохранить изменения" : "Добавить продукт"}
        </button>
      </form>

      {/* Список продуктов */}
      <ul className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <li
            key={p.id}
            className="flex flex-col justify-between bg-white rounded-2xl shadow-md border border-green-100 p-4 hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-lg font-semibold text-green-700">
                {p.title || p.name}
              </h3>
              <p className="text-gray-600">{p.price} ₸</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 bg-yellow-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-yellow-600 transition"
                onClick={() => handleEdit(p)}
              >
                Редактировать
              </button>
              <button
                className="flex-1 bg-red-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                onClick={() => handleDelete(p.id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
