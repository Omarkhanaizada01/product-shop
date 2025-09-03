import Image from "next/image";
import Hero from '@/components/sections/Hero';
import FeaturesSection from "@/components/sections/FeaturesSection";
import PopularCategories from "@/components/sections/PopularCategories";
import PopularProducts from "@/components/sections/PopularProducts";
import BannerSection from "@/components/sections/BannerSection";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PopularCategories />
      <PopularProducts />
      <BannerSection />

    </>
  );
}
