// src/app/about/page.tsx
"use client";
import Image from "next/image";
import Breadcrumbs from "@/src/components/Breadcrumbs";
import FeaturesSection from "@/src/components/sections/FeaturesSection";
import ClientTestimonials from "@/src/components/sections/ClientTestimonials";
import CompanyLogo from "@/src/components/sections/CompanyLogo";

export default function AboutPage() {
  return (
    <>
      {/* Хлебные крошки */}
      <Breadcrumbs currentPage="About" />

      {/* Секция About Us */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          {/* Текстовый блок */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-poppins font-semibold text-[#1A1A1A] leading-[120%] mb-4 sm:mb-6">
              100% Trusted Organic Food Store
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-poppins text-[#666666] leading-[150%]">
              Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, 
              cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet 
              vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare 
              commodo ante, at commodo felis congue vitae.
            </p>
          </div>

          {/* Изображение */}
          <div className="lg:w-1/2 order-1 lg:order-2 w-full">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[492px] rounded-lg overflow-hidden">
              <Image
                src="/images/aboutUs/about1.jpg"
                alt="Organic Food Store"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция About Me */}
      <section className="relative w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
            {/* Левая часть с изображениями - только для десктопа */}
            <div className="lg:w-1/2 relative hidden lg:block">
              <div className="relative w-full h-[400px] lg:h-[585px] xl:h-[685px]">
                {/* Фоновое изображение */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/aboutUs/bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                </div>
                
                {/* Основное изображение */}
                <div className="absolute left-8 xl:left-[145px] top-0 w-[70%] xl:w-[745px] h-full">
                  <Image
                    src="/images/aboutUs/about2.png"
                    alt="About Us"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>

            {/* Мобильная версия изображения */}
            <div className="lg:hidden w-full mb-8">
              <div className="relative w-full h-[300px] sm:h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/images/aboutUs/about2.png"
                  alt="About Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Правая часть с текстом */}
            <div className="lg:w-1/2 lg:pl-6 xl:pl-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-poppins font-semibold text-[#1A1A1A] leading-[120%] mb-4 sm:mb-6">
                About Our Store
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-poppins text-[#666666] leading-[150%] mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-poppins text-[#666666] leading-[150%] mb-8 sm:mb-10">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>

              {/* Features Section */}
              <div className="mt-8 sm:mt-10 lg:mt-12">
                <FeaturesSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <ClientTestimonials />
      </div>

      {/* Company Logo */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <CompanyLogo />
      </div>
    </>
  );
}