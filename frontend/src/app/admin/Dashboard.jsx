import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-emerald-700 mb-8">
        🌿 Админ Панель
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Управление продуктами */}
        <Link
          href="/admin/products"
          className="block p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:bg-emerald-50 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-emerald-700">
            🛒 Управление продуктами
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Добавляй, редактируй и удаляй товары в магазине.
          </p>
        </Link>

        {/* Управление категориями */}
        <Link
          href="/admin/categories"
          className="block p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:bg-emerald-50 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-emerald-700">
            📂 Управление категориями
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Организуй товары по категориям для удобства клиентов.
          </p>
        </Link>

        {/* Управление пользователями */}
        <Link
          href="/admin/users"
          className="block p-6 rounded-2xl shadow-md bg-white border border-emerald-100 hover:bg-emerald-50 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-emerald-700">
            👥 Управление пользователями
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Просматривай и управляй аккаунтами пользователей.
          </p>
        </Link>
      </div>
    </div>
  );
}

