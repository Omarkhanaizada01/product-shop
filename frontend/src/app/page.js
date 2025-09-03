import Image from "next/image";
import Hero from '@/components/sections/Hero';
import FeaturesSection from "@/components/sections/FeaturesSection";
import PopularCategories from "@/components/sections/PopularCategories";
import PopularProducts from "@/components/sections/PopularProducts";
import BannerSection from "@/components/sections/BannerSection";
import HotDeals from "@/components/sections/HotDeals";
import DiscountBannerSection from "@/components/sections/DiscountBannerSection";
import FeaturedProductsSection from "@/components/sections/FeaturedProductsSection";
import LatestNews from "@/components/sections/LatestNews";
import ClientTestimonials from "@/components/sections/ClientTestimonials";
import CompanyLogo from "@/components/sections/CompanyLogo";
import FollowUs from "@/components/sections/FollowUs";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PopularCategories />
      <PopularProducts />
      <BannerSection />
      <HotDeals />
      <DiscountBannerSection />
      <FeaturedProductsSection />
      <LatestNews />
      <ClientTestimonials />
      <CompanyLogo />
      <FollowUs />

    </>
  );
}
