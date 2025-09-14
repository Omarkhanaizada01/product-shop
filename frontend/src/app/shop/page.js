"use client";

import { Suspense } from "react";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import CategoriesList from "@/src/components/CategoriesList";
import ProductsList from "@/src/components/ProductsList";
import ShopTopBar from "@/src/components/ShopTopBar";
import PriceFilter from "@/src/components/PriceFilter";
import RatingFilter from "@/src/components/RatingFilter";
import PopularTags from "@/src/components/PopularTags";
import ShopBanner from "@/src/components/ShopBanner";
import SaleProducts from "@/src/components/SaleProducts";
import Pagination from "@/src/components/Pagination";

export default function ShopPage() {
  return (
    <div>
      <Suspense fallback={<div>Loading breadcrumbs...</div>}>
        <Breadcrumbs />
      </Suspense>

      <div className="container mx-auto px-4 mt-6 flex flex-col gap-8">
        {/* Форма загрузки изображений */}
        <ShopTopBar />
        
        <div className="flex gap-8">
          {/* Левая колонка - фильтры */}
          <div className="w-1/4 flex flex-col gap-6">
            <Suspense fallback={<div>Loading categories...</div>}>
              <CategoriesList />
            </Suspense>
            
            {/* PriceFilter под категориями */}
            <Suspense fallback={<div>Loading price filter...</div>}>
              <PriceFilter />
            </Suspense>

            {/* RatingFilter */}
            <Suspense fallback={<div>Loading price filter...</div>}>
              <RatingFilter />
            </Suspense>
              {/* PopularTags */}
            <Suspense fallback={<div>Loading price filter...</div>}>
              <PopularTags />
            </Suspense>
            {/* ShopBanner */}
            <Suspense fallback={<div>Loading price filter...</div>}>
              <ShopBanner />
            </Suspense>
            {/* Sale Products */}
            <Suspense fallback={<div>Loading price filter...</div>}>
              <SaleProducts />
            </Suspense>
          </div>

          {/* Правая колонка - товары */}
          <div className="w-3/4">
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductsList />
            </Suspense>
            {/* Pagination */}
            <div className="mt-10 flex justify-center">
            <Suspense fallback={<div>Loading products...</div>}>
              <Pagination />
            </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
