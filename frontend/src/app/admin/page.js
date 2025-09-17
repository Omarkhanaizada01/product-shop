"use client";

import AdminProducts from "./Products";
import AdminDashboard from "./Dashboard";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-8">
      {/* Заголовок */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 drop-shadow-md">
          Панель администратора
        </h1>
        <p className="text-gray-600 mt-2">Управляйте магазином легко и удобно</p>
      </header>

      {/* Основная часть */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Блок продуктов */}
        <section className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Управление продуктами
          </h2>
          <AdminProducts />
        </section>

        {/* Блок навигации админки */}
        <section className="bg-white rounded-2xl shadow-lg p-6 border border-green-100 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-600 mb-4">
            Навигация
          </h2>
          <AdminDashboard />
        </section>
      </main>
    </div>
  );
}
