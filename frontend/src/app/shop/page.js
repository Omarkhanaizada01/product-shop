import Breadcrumbs from "@/components/Breadcrumbs";
import CategoriesList from "@/components/CategoriesList";
import ProductsList from "@/components/ProductsList";

export default function ShopPage() {
  return (
    <div>
      <Breadcrumbs />
      <div className="container mx-auto px-4 mt-6 flex gap-8">
        <CategoriesList />
        <ProductsList />
      </div>
    </div>
  );
}
