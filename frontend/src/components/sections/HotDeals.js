'use client';

import Heading from '../ui/Heading';
import BigProductCard from '../ui/BigProductCard';
import ProductCard5n from '../ui/ProductCard';

const HotDeals = () => {
  const bigProduct = {
    id: 1,
    image: '/images/products/green apple.svg',
    title: 'Green Apple',
    price: 14.99,
    originalPrice: 29.99,
    rating: 4,
    hoverVariant: 'green',
  };

  const products = [
    {
      id: 2,
      image: '/images/products/orange.svg',
      title: 'Fresh Orange',
      price: 18.99,
      originalPrice: 24.99,
      rating: 5,
      hoverVariant: 'gray',
    },
    {
      id: 3,
      image: '/images/products/banana.svg',
      title: 'Banana',
      price: 12.99,
      originalPrice: 15.99,
      rating: 3,
      hoverVariant: 'yellow',
    },
    {
      id: 4,
      image: '/images/products/strawberry.svg',
      title: 'Strawberry',
      price: 22.99,
      originalPrice: 29.99,
      rating: 5,
      hoverVariant: 'red',
    },
    {
      id: 5,
      image: '/images/products/grape.svg',
      title: 'Grape',
      price: 16.99,
      originalPrice: 19.99,
      rating: 4,
      hoverVariant: 'purple',
    },
    {
      id: 6,
      image: '/images/products/watermelon.svg',
      title: 'Watermelon',
      price: 24.99,
      originalPrice: 32.99,
      rating: 4,
      hoverVariant: 'green',
    },
    {
      id: 7,
      image: '/images/products/kiwi.svg',
      title: 'Kiwi',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4,
      hoverVariant: 'green',
    },
  ];

  const bottomProducts = [
    {
      id: 8,
      image: '/images/products/pear.svg',
      title: 'Pear',
      price: 15.99,
      originalPrice: 18.99,
      rating: 3,
      hoverVariant: 'green',
    },
    {
      id: 9,
      image: '/images/products/peach.svg',
      title: 'Peach',
      price: 17.99,
      originalPrice: 21.99,
      rating: 4,
      hoverVariant: 'orange',
    },
    {
      id: 10,
      image: '/images/products/mango.svg',
      title: 'Mango',
      price: 23.99,
      originalPrice: 28.99,
      rating: 5,
      hoverVariant: 'yellow',
    },
    {
      id: 11,
      image: '/images/products/pineapple.svg',
      title: 'Pineapple',
      price: 26.99,
      originalPrice: 32.99,
      rating: 4,
      hoverVariant: 'yellow',
    },
    {
      id: 12,
      image: '/images/products/cherry.svg',
      title: 'Cherry',
      price: 20.99,
      originalPrice: 25.99,
      rating: 5,
      hoverVariant: 'red',
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Заголовок */}
      <Heading
        title="Hot Deals"
        subtitle="Don't miss out on these limited time offers"
        buttonText="View All"
        className="mb-6 sm:mb-10"
      />

      {/* Верхний блок */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-10">
        {/* Большая карточка */}
        <div className="lg:w-[520px] xl:w-[560px] flex-shrink-0">
          <BigProductCard {...bigProduct} />
        </div>

        {/* Сетка карточек справа */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard5n key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Нижний блок */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {bottomProducts.map((product) => (
          <ProductCard5n key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default HotDeals;
