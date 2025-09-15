import Image from 'next/image';
import ArrowButton from './ui/ArrowButton';

export default function ShopBanner() {
  return (
    <div className="w-full lg:w-[312px] h-auto lg:h-[295px] rounded-[10px] overflow-hidden flex flex-col">
      <div className="w-full lg:w-[312px] h-auto lg:h-[84px] opacity-100 gap-1 lg:gap-[2px] pt-4 lg:pt-[20px] bg-[#F2F2F2] px-4 lg:px-0">
        <div className="w-full h-auto">
          <h3 className="text-[#1A1A1A] font-poppins font-semibold text-2xl md:text-[32px] leading-[120%] text-center">
            79% Discount
          </h3>
        </div>
        <div className="w-full h-auto">
          <p className="text-[#4D4D4D] font-poppins font-normal text-sm md:text-[16px] leading-[150%] text-center">
            on your first order
          </p>
        </div>
      </div>

      <div className="relative flex-1 w-full overflow-hidden aspect-square lg:aspect-auto">
        <div className="absolute top-0 left-0 right-0 bottom-0"> 
          <Image
            src="/images/banners/shopBanner.jpg"
            alt="Shop Banner"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
            priority
          />
        </div>
        
        <div className="absolute top-3 lg:top-[12px] left-1/2 transform -translate-x-1/2 z-10">
          <ArrowButton variant="text-only">
            Shop Now
          </ArrowButton>
        </div>
      </div>
    </div>
  );
}
