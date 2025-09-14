
"use client";
import Image from 'next/image';

export default function SaleProducts() {
  const products = [
    { id: 1, name: "Red Capsicum", newPrice: "$20.99", oldPrice: "$32.00" },
    { id: 2, name: "Green Apple", newPrice: "$14.99", oldPrice: "$24.99" },
    { id: 3, name: "Organic Banana", newPrice: "$12.99", oldPrice: "$19.99" }
  ];

  return (
    <div className="w-[312px] pt-6">
      {/* Простой заголовок вместо SectionHeading */}
      <h2 className="text-[#1A1A1A] font-poppins font-medium text-[20px] leading-[150%] mb-5 ">
        Sale Products
      </h2>
      
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[312px] h-[112px] rounded-[6px] border border-[#E5E5E5] bg-white hover:border-[#00B207] hover:shadow-[0px_0px_12px_0px_#20B52652] transition-all duration-300 overflow-hidden"
          >
            <div className="flex h-full">
              {/* Изображение слева */}
              <div className="relative w-[112px] h-[112px] p-1 flex items-center justify-center">
  <Image
    src="/images/products/greenApple.svg"
    alt={product.name}
    fill
    sizes="112px"
    className="object-contain"
  />
</div>

              {/* Информация справа */}
              <div className="flex-1 p-3 flex flex-col justify-center">
                <p className="text-[#4D4D4D] font-poppins text-sm leading-[150%] mb-1">
                  {product.name}
                </p>

                <div className="flex items-center gap-1 mb-1">
                  <span className="text-[#1A1A1A] font-poppins font-medium text-base">
                    {product.newPrice}
                  </span>
                  <span className="text-[#999999] font-poppins text-base line-through">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Простой рейтинг вместо изображения */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}