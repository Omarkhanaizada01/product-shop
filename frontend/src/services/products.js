// products.js
import API from "@/src/utils/api";

export const fetchProducts = async (params = {}) => {
  const res = await API.get("/api/products", { params });
  return res.data;
};

export const uploadImage = async (formData) => {
  const res = await API.post("/api/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};