'use client';

import ProductCard from '../ui/ProductCard';
import Heading from '../ui/Heading';

const sampleProduct = {
  product: {
    name: 'Green Apple',
    price: '$14.99',
    oldPrice: '$29.99',
    image: '/images/products/greenApple.svg',
  },
  tags: [],
  salePercent: 50,
  showWishlist: true,
  showQuickView: true,
  withHoverBorder: false,
};

const FeaturedProductsSection = () => {
  const products = Array(5).fill({ ...sampleProduct });

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Featured Products" buttonText="View All" className="mb-8" />

        {/* Адаптивная сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              size="5n"
              product={product.product}
              tags={index === 0 ? ['sale'] : []} // первая карточка - Sale
              salePercent={50}
              showWishlist={true}
              showQuickView={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
