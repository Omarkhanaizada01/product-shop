"use client";
import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Выберите файл!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post("http://localhost:3001/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUrl(res.data.url); // например: "/uploads/1694041234567-green.png"
    } catch (err) {
      console.error("Ошибка загрузки:", err);
      alert("Ошибка загрузки файла");
    }
  };

  return (
    <div className="p-4 border rounded-md w-[300px]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border p-2"
        />
        <button type="submit" className="bg-green-600 text-white p-2 rounded">
          Загрузить
        </button>
      </form>

      {url && (
        <div className="mt-3">
          <p className="text-sm text-gray-700">Файл загружен:</p>
          <img
            src={`http://localhost:3001${url}`}
            alt="Uploaded"
            className="w-40 mt-2 border"
          />
          <p className="mt-2 text-xs text-gray-500 break-all">
            Полный путь: <br />
            <code>{`http://localhost:3001${url}`}</code>
          </p>
        </div>
      )}
    </div>
  );
}
