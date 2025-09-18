"use client";
import { useState } from "react";
import API from "@/src/utils/api";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users/login", { email, password });
      router.push("/admin/dashboard"); // после логина
    } catch (err) {
      alert(err.response?.data?.message || "Ошибка входа");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Admin Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border p-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Войти
      </button>
    </form>
  );
}
