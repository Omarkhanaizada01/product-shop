import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Админ Панель</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/admin/products" className="text-blue-600 underline">
            Управление продуктами
          </Link>
        </li>
        <li>
          <Link href="/admin/categories" className="text-blue-600 underline">
            Управление категориями
          </Link>
        </li>
      </ul>
    </div>
  );
}
