// src/app/login/page.jsx
"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await login(email, password);
      if (user?.role === "ADMIN") router.push("/admin");
      else router.push("/");
    } catch (err) {
      setError(err?.response?.data?.message || "Ошибка входа");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Sign In</h1>
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" disabled={loading} className="w-full bg-green-600 text-white p-2 rounded">
          {loading ? "Вход..." : "Sign In"}
        </button>
      </form>

      <p className="mt-4 text-sm">
        No account? <Link href="/register" className="text-blue-600">Create one</Link>
      </p>
    </div>
  );
}
