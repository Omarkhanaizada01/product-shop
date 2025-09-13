// src/app/register/page.jsx
"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/AuthContext";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await register(name, email, password);
      if (user?.role === "ADMIN") router.push("/admin");
      else router.push("/");
    } catch (err) {
      setError(err?.response?.data?.error || err?.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl mb-4">Create Account</h1>
      {error && <div className="text-red-600 mb-3">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
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
          {loading ? "Создаём..." : "Create Account"}
        </button>
      </form>

      <p className="mt-4 text-sm">
        Already have an account? <Link href="/login" className="text-blue-600">Sign in</Link>
      </p>
    </div>
  );
}
