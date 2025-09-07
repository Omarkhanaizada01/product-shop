// src/components/sections/Hero.js
"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowButton from "../ui/ArrowButton";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Hero Banner */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-[10px] overflow-hidden">
          {/* Image Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 to-black/0" />
          
          {/* Hero Image */}
          <Image
            src="/images/banners/leftHeroBanner.jpg"
            alt="Organic Food"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            className="object-cover"
            style={{
              borderRadius: '10px',
              objectPosition: '15% 70%',
            }}
            priority
          />
          
          {/* Hero Content */}
          <div className="relative z-20 px-4 sm:px-8 lg:p-12 text-white flex h-full items-center">
            {/* Green Accent Line */}
            <div className="hidden sm:block h-[50px] sm:h-[65px] w-[2px] bg-[#84D187] mr-2 sm:mr-4 mt-10 sm:mt-16" />
  
            <div className="max-w-[596px]">
              {/* Main Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold leading-snug sm:leading-[120%] mb-4 text-white font-poppins">
                Fresh & Healthy<br />Organic Food
              </h2>
              
              {/* Sale Badge */}
              <div className="flex items-center gap-2 sm:gap-[10px] mb-4 sm:ml-4">
                <span className="text-base sm:text-lg md:text-[20px] leading-[150%] text-white font-poppins font-medium">
                  Sale up to
                </span>
                <div className="bg-[#FF8A00] rounded-[5px] px-3 py-1 sm:px-[12px] sm:py-[4px] flex items-center justify-center">
                  <span className="text-white text-sm sm:text-[18px] font-medium">30% OFF</span>
                </div>
              </div>
              
              {/* Subtitle */}
              <p className="text-xs sm:text-sm md:text-[14px] leading-[150%] text-white/80 font-poppins w-[180px] sm:w-[215px] mb-4 sm:mb-6 sm:ml-4">
                Free shipping on all your order.
              </p>
              
              {/* CTA Button */}
              <ArrowButton variant="white">
                Shop now
              </ArrowButton>
            </div>
          </div>
        </div>

        {/* Right Side Banners */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          {/* First Right Banner */}
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:w-[423px] lg:h-[288px] rounded-[10px] overflow-hidden">
            <Image
              src="/images/banners/rightHeroBanner1.jpg"
              alt="New Arrivals"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 423px"
              className="object-cover transform -scale-x-100"
            />
            
            <div className="absolute inset-0 z-10" />
            
            <div className="absolute z-20 top-4 sm:top-[32px] left-4 sm:left-[32px] flex flex-col gap-1 sm:gap-[8px] w-[140px] sm:w-[156px]">
              <h4 className="text-xs sm:text-[14px] text-black">SUMMER SALE</h4>
              <p className="text-black font-bold text-xl sm:text-[32px]">75% OFF</p>
              <p className="text-[#666666] text-[11px] sm:text-[13px] whitespace-nowrap">Only Fruit & Vegetable</p>
              
              <div className="mt-1 sm:mt-2">
                <ArrowButton 
                  variant="text-only"
                  className="w-[100px] sm:w-[108px] h-[18px] sm:h-[19px] gap-[8px] sm:gap-[12px]"
                  iconClassName="text-[10px] sm:text-[12px] font-medium"
                >
                  Shop Now
                </ArrowButton>
              </div>
            </div>
          </div>
          
          {/* Second Right Banner */}
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[250px] lg:w-[423px] lg:h-[288px] rounded-[10px] overflow-hidden">
            <Image
              src="/images/banners/rightHeroBanner2.jpg"
              alt="Limited Edition"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 423px"
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-[#002603CC] z-10" />
            
            <div className="relative z-20 p-4 sm:p-6 h-full flex flex-col justify-center text-white text-center">
              <p className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">BEST DEAL</p>
              <h4 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">Special Products</h4>
              <p className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-4">Deal of the Month</p>
              <ArrowButton variant="text-only">
                Shop Now
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
