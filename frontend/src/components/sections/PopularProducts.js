'use client';

import ProductCard from '../ui/ProductCard';
import Heading from '../ui/Heading';

const sampleProduct = {
  id: 1,
  image: '/images/products/greenApple.svg',
  name: 'Green Apple',
  price: '$14.99',
  oldPrice: '$29.99',
};

const PopularProducts = ({ cardSize = "5n" }) => {
  // Создаем массив из 10 продуктов с уникальными id
  const products = Array.from({ length: 10 }, (_, index) => ({
    ...sampleProduct,
    id: index + 1,
    name: `${sampleProduct.name} ${index + 1}`,
  }));

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Popular Products" 
          buttonText="View All"
          className="mb-8"
        />
        
        {/* Контейнер для карточек */}
        <div className="w-full min-h-[714px]">
          {/* Верхний ряд - 5 карточек */}
          <div className="flex flex-wrap">
            {products.slice(0, 5).map((product, index) => (
              <div 
                key={`top-${product.id}`} 
                className="w-full md:w-1/2 lg:w-1/5 flex justify-center"
              >
                {index === 0 ? (
                  // Первая карточка — со скидкой
                  <ProductCard 
                    product={product} 
                    size={cardSize} 
                    tags={['sale']} 
                    salePercent={50} 
                  />
                ) : (
                  <ProductCard product={product} size={cardSize} />
                )}
              </div>
            ))}
          </div>
          
          {/* Нижний ряд - 5 карточек */}
          <div className="flex flex-wrap mt-6">
            {products.slice(5, 10).map((product, index) => (
              <div 
                key={`bottom-${product.id}`} 
                className="w-full md:w-1/2 lg:w-1/5 flex justify-center"
              >
                {index === 3 ? (
                  // Девятая карточка — со скидкой
                  <ProductCard 
                    product={product} 
                    size={cardSize} 
                    tags={['sale']} 
                    salePercent={50} 
                  />
                ) : (
                  <ProductCard product={product} size={cardSize} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

