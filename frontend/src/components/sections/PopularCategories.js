// src/components/sections/PopularCategories.js
"use client";

import Image from 'next/image';
import Heading from '../ui/Heading';

const PopularCategories = () => {
  
  const categories = [
    { 
      id: 1, 
      name: "Fresh Fruit", 
      image: "/images/categories/fruits category.svg" 
    },
    { 
      id: 2, 
      name: "Fresh Vegetables", 
      image: "/images/categories/vegetables category.svg" 
    },
    { 
      id: 3, 
      name: "Meat & Fish", 
      image: "/images/categories/meat category.svg" 
    },
    { 
      id: 4, 
      name: "Snacks", 
      image: "/images/categories/snacks category.svg" 
    },
    { 
      id: 5, 
      name: "Beverages", 
      image: "/images/categories/beverages category.svg" 
    },
    { 
      id: 6, 
      name: "Beauty & Health", 
      image: "/images/categories/beauty category.svg" 
    },
    { 
      id: 7, 
      name: "Bread & Bakery", 
      image: "/images/categories/bread category.svg" 
    },
    { 
      id: 8, 
      name: "Baking Needs", 
      image: "/images/categories/baking category.svg" 
    },
    { 
      id: 9, 
      name: "Cooking", 
      image: "/images/categories/cooking category.svg" 
    },
    { 
      id: 10, 
      name: "Diabetic Food", 
      image: "/images/categories/diabetic category.svg" 
    },
    { 
      id: 11, 
      name: "Dish Detergents", 
      image: "/images/categories/dish category.svg" 
    },
    { 
      id: 12, 
      name: "Oil", 
      image: "/images/categories/oil category.svg" 
    },
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Popular Categories" 
          buttonText="View All"
          className="mb-8"
        />
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="w-full max-w-[200px] h-[213px] flex flex-col items-center pt-4 pb-6 gap-4 bg-white border border-[#E5E5E5] rounded-[5px] hover:border-green-500 transition-colors cursor-pointer mx-auto"
            >
              {/* Изображение категории */}
              <div className="w-[190px] h-[130px] overflow-hidden flex items-center justify-center">
                <Image 
                  src={category.image} 
                  alt={category.name}
                  width={190}
                  height={130}
                  style={{ width: '190px', height: 'auto' }}
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-center font-medium text-[#1A1A1A] text-sm px-2">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;