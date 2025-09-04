import API from "@/src/utils/api";

export const fetchProducts = async (params = {}) => {
  // params: { categoryId }
  const res = await API.get("/products", { params });
  return res.data;
};

export const uploadImage = async (formData) => {
  const res = await API.post("/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data; // { url: 'http://localhost:3001/uploads/...' }
};
