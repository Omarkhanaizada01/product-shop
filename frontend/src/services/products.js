// frontend/src/services/products.js
import API from "@/src/utils/api";

export const fetchProducts = async (params = {}) => {
  // Предполагается, что API.baseURL уже содержит /api
  // Поэтому обращаемся к /products
  const res = await API.get("/products", { params });
  return res.data; // { products, total }
};

export const uploadImage = async (formData) => {
  const res = await API.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
