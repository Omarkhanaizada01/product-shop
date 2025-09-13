// src/context/AuthContext.js
"use client";
import { createContext, useState, useEffect } from "react";
import API from "../utils/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  // Получить текущего пользователя (если есть cookie)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/api/users/me");
        setUser(res.data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Логин: постим /api/users/login, затем запрашиваем /api/users/me и сохраняем user
  const login = async (email, password) => {
    await API.post("/api/users/login", { email, password }); // включает cookie
    const res = await API.get("/api/users/me");
    setUser(res.data);
    return res.data;
  };

  // Регистрация: создаём пользователя, затем логинимся автоматически
  const register = async (name, email, password) => {
    await API.post("/api/users", { name, email, password });
    // автоматически логинимся
    return await login(email, password);
  };

  const logout = async () => {
    try {
      await API.post("/api/users/logout");
    } catch (e) {}
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
