"use client";

import { Suspense } from "react";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import ShopTopBar from "@/src/components/ShopTopBar";
import CategoriesList from "@/src/components/CategoriesList";
import PopularTags from "@/src/components/PopularTags";
import LatestNews from "@/src/components/sections/LatestNews";

function BlogContent() {
  return (
    <div className="w-full">
      {/* Хлебные крошки */}
      <Breadcrumbs currentPage="Blog" />

      {/* Отступ 32px */}
      <div className="container mx-auto px-4 mt-8 md:mt-[32px]">
        {/* ShopTopBar */}
        <ShopTopBar 
          onSortChange={() => {}} 
          resultsCount={3} 
          onFilterToggle={() => {}} 
        />

        {/* Основная сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Левая часть */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <CategoriesList />
            <PopularTags />
          </div>

          {/* Правая часть */}
          <div className="lg:col-span-9">
            <LatestNews />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
