
import Image from 'next/image';
import ArrowButton from './ui/ArrowButton';

export default function ShopBanner() {
  return (
    <div className="w-[312px] h-[295px] rounded-[10px] overflow-hidden flex flex-col">
      {/* Серый Info блок */}
      <div className="w-[312px] h-[84px] opacity-100 gap-[2px] pt-[20px] bg-[#F2F2F2]">
        <div className="w-full h-[38px]">
          <h3 className="text-[#1A1A1A] font-poppins font-semibold text-[32px] leading-[120%] text-center">
            79% Discount
          </h3>
        </div>
        <div className="w-full h-[24px]">
          <p className="text-[#4D4D4D] font-poppins font-normal text-[16px] leading-[150%] text-center">
            on your first order
          </p>
        </div>
      </div>

      {/* Изображение с обрезкой справа и снизу */}
      <div className="relative flex-1 w-full overflow-hidden">
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
        
        {/* Зеленая кнопка на 12px от верха изображения по центру */}
        <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 z-10">
          <ArrowButton variant="text-only">
                         Shop Now
                        </ArrowButton>
        </div>
      </div>
    </div>
  );
}
