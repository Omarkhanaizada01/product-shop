"use client";

import { Suspense } from "react";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import CategoriesList from "@/src/components/CategoriesList";
import ProductsList from "@/src/components/ProductsList";
import UploadForm from "@/src/components/UploadForm";

export default function ShopPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading breadcrumbs...</div>}>
        <Breadcrumbs />
      </Suspense>

      <div className="container mx-auto px-4 mt-6 flex flex-col gap-8">
        {/* Форма загрузки изображений */}
        <UploadForm />

        <div className="flex gap-8">
          <Suspense fallback={<div>Loading categories...</div>}>
            <CategoriesList />
          </Suspense>

          <Suspense fallback={<div>Loading products...</div>}>
            <ProductsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
