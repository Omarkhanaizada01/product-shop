'use client';

import Banner from "../ui/Banner";

const BannerSection = () => {
  const banners = [
    {
      id: 1,
      imageSrc: '/images/banners/Banner 1.svg',
      topText: 'Best Deals',
      mainTitle: 'Sale of the Month',
      buttonText: 'Shop now',
      timer: {
        days: 2,
        hours: 10,
        mins: 30,
        secs: 45,
      },
    },
    {
      id: 2,
      imageSrc: '/images/banners/Banner 2.svg',
      topText: '85% Fat free',
      mainTitle: 'Low-Fat Meat',
      price: 'Started at $79.99',
    },
    {
      id: 3,
      imageSrc: '/images/banners/Banner 3.svg',
      topText: 'Summer Sale',
      mainTitle: '100% Fresh Fruit',
      discount: 64,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners.map((banner) => (
          <Banner
            key={banner.id}
            imageSrc={banner.imageSrc}
            topText={banner.topText}
            mainTitle={banner.mainTitle}
            buttonText={banner.buttonText}
            timer={banner.timer}
            price={banner.price}
            discount={banner.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;

