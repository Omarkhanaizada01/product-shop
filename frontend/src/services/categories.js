// categories.js
import API from "@/src/utils/api";

export const fetchCategories = async () => {
  const res = await API.get("/api/categories");
  return res.data;
};

export const fetchCategoryById = async (id) => {
  const res = await API.get(`/api/categories/${id}`);
  return res.data;
};