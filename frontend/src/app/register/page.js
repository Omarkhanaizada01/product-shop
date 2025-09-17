"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/AuthContext";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Заполните имя";
    else if (formData.name.length < 3) newErrors.name = "Слишком короткое имя";

    if (!formData.email) newErrors.email = "Заполните email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Некорректный email";

    if (!formData.nickname) newErrors.nickname = "Введите никнейм";
    else if (formData.nickname.length < 5) newErrors.nickname = "Никнейм слишком короткий";

    if (!formData.password) newErrors.password = "Введите пароль";
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}/.test(formData.password))
      newErrors.password = "Пароль недостаточно надёжный";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Пароли не совпадают";

    if (!formData.acceptTerms) newErrors.acceptTerms = "Необходимо согласие";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    setLoading(true);
    try {
      const user = await register(formData.name, formData.email, formData.password);
      if (user?.role === "ADMIN") router.push("/admin");
      else router.push("/");
    } catch (err) {
      setErrors({ submit: err?.response?.data?.message || "Ошибка регистрации" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Регистрация</h1>

        {errors.submit && (
          <div className="bg-red-100 text-red-700 p-3 rounded border border-red-200">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Имя</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Никнейм</label>
            <input
              type="text"
              value={formData.nickname}
              onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              placeholder="Ваш никнейм"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.nickname ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.nickname && <p className="text-red-500 text-sm mt-1">{errors.nickname}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Пароль</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="••••••••"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Подтверждение пароля</label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              placeholder="••••••••"
              className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
            />
            <label className="ml-2 text-gray-700 text-sm">
              Я принимаю условия <Link href="#" className="text-green-600 underline">пользовательского соглашения</Link>
            </label>
          </div>
          {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded text-white font-semibold transition-colors ${
              loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Регистрация..." : "Зарегистрироваться"}
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Уже есть аккаунт?{" "}
          <Link href="/login" className="text-green-600 font-medium hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
