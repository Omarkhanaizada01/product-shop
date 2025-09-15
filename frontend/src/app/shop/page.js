"use client";

import { Suspense, useState, useEffect } from "react";
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
  const [sortBy, setSortBy] = useState("latest");
  const [resultsCount, setResultsCount] = useState(0);
  const [priceRange, setPriceRange] = useState(null);
  const [rating, setRating] = useState(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy, priceRange, rating]);

  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading breadcrumbs...</div>}>
        <Breadcrumbs />
      </Suspense>

      <div className="container mx-auto px-4 mt-6 flex flex-col gap-8">
        <ShopTopBar 
          onSortChange={setSortBy} 
          resultsCount={resultsCount} 
          onFilterToggle={toggleMobileFilters}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Мобильный фильтр (кнопка и модальное окно) */}
          {isMobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <button 
                    onClick={toggleMobileFilters}
                    className="text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex flex-col gap-6">
                  <Suspense fallback={<div>Loading categories...</div>}>
                    <CategoriesList />
                  </Suspense>
                  <Suspense fallback={<div>Loading price filter...</div>}>
                    <PriceFilter onChange={setPriceRange} />
                  </Suspense>
                  <Suspense fallback={<div>Loading rating filter...</div>}>
                    <RatingFilter onChange={setRating} />
                  </Suspense>
                  <Suspense fallback={<div>Loading tags...</div>}>
                    <PopularTags />
                  </Suspense>
                  <Suspense fallback={<div>Loading banner...</div>}>
                    <ShopBanner />
                  </Suspense>
                  <Suspense fallback={<div>Loading sales...</div>}>
                    <SaleProducts />
                  </Suspense>
                </div>
              </div>
            </div>
          )}

          {/* Десктопный сайдбар */}
          <div className="hidden lg:flex lg:w-1/4 flex-col gap-6">
            <Suspense fallback={<div>Loading categories...</div>}>
              <CategoriesList />
            </Suspense>
            <Suspense fallback={<div>Loading price filter...</div>}>
              <PriceFilter onChange={setPriceRange} />
            </Suspense>
            <Suspense fallback={<div>Loading rating filter...</div>}>
              <RatingFilter onChange={setRating} />
            </Suspense>
            <Suspense fallback={<div>Loading tags...</div>}>
              <PopularTags />
            </Suspense>
            <Suspense fallback={<div>Loading banner...</div>}>
              <ShopBanner />
            </Suspense>
            <Suspense fallback={<div>Loading sales...</div>}>
              <SaleProducts />
            </Suspense>
          </div>

          {/* Основной контент */}
          <div className="w-full lg:w-3/4">
            <Suspense fallback={<div>Loading products...</div>}>
              <ProductsList
                sortBy={sortBy}
                priceRange={priceRange}
                rating={rating}
                page={currentPage}
                pageSize={pageSize}
                onCountChange={setResultsCount}
              />
            </Suspense>

            <div className="mt-10 flex justify-center">
              <Suspense fallback={<div>Loading pagination...</div>}>
                <Pagination
                  currentPage={currentPage}
                  total={resultsCount}
                  pageSize={pageSize}
                  onPageChange={(p) => setCurrentPage(p)}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}