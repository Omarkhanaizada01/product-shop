// src/utils/api.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
    ? process.env.NEXT_PUBLIC_API_URL + "/api" // 👈 добавили /api
    : "http://localhost:3001/api",
  withCredentials: true,
});

export default API;





