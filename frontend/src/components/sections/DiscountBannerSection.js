'use client';
import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton';

const DiscountBannerSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative w-full h-[358px] sm:h-[400px] md:h-[450px] rounded-[10px] overflow-hidden">
        {/* Баннерная картинка */}
        <Image
          src="/images/banners/discountBanner.jpg"
          alt="Summer Sale 37% Off"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1320px"
          className="object-cover"
          priority
        />

        {/* Контент */}
        <div
          className="
            absolute z-20 flex flex-col gap-4 
            max-w-[441px] 
            text-center sm:text-left
            left-1/2 -translate-x-1/2 bottom-6
            sm:top-[60px] sm:right-[51px] sm:left-auto sm:translate-x-0 sm:bottom-auto
          "
        >
          <h4 className="text-white uppercase font-poppins font-medium text-[14px] sm:text-[16px] leading-[100%] tracking-[2%]">
            SUMMER SALE
          </h4>

          <div className="flex justify-center sm:justify-start items-baseline">
            <span className="text-[#FFA500] font-poppins font-semibold text-[40px] sm:text-[56px] leading-[120%]">
              37%
            </span>
            <span className="text-white font-poppins font-semibold text-[40px] sm:text-[56px] leading-[120%] ml-2">
              OFF
            </span>
          </div>

          <p className="text-white/80 font-poppins font-normal text-[14px] sm:text-[16px] leading-[120%]">
            Free on all your order, Free Shipping and 30 days
            <br className="hidden sm:block" />
            money-back guarantee
          </p>

          <div className="mt-2 flex justify-center sm:justify-start">
            <ArrowButton
              variant="green"
              className="w-[108px] h-[19px] gap-[12px]"
              iconClassName="text-[12px] font-medium"
            >
              Shop Now
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannerSection;
