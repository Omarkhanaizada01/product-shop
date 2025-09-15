// categories.js
import API from "@/src/utils/api";

export const fetchCategories = async () => {
  const res = await API.get("/categories");
  return res.data;
};

export const fetchCategoryById = async (id) => {
  const res = await API.get(`/categories/${id}`);
  return res.data;
};