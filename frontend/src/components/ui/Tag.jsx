// src/components/ui/Tag/Tag.jsx
'use client';

const Tag = ({ type = 'sale', value = '' }) => {
  // Стили для каждого типа тега (цвета, размеры, скругления)
  const tagConfig = {
    sale: {
      bgColor: 'bg-red-500', // Красный для Sale
      text: 'Sale',
      width: 'w-[47px]', // Фиксированная ширина
    },
    new: {
      bgColor: 'bg-[#FF8A00]', // Оранжевый для New
      text: 'New',
      width: 'w-[47px]',
    },
    best: {
      bgColor: 'bg-[#2388FF]', // Синий для Best Sale
      text: 'Best Sale',
      width: 'w-[80px]',
    },
    out: {
      bgColor: 'bg-[#1A1A1A]', // Черный для Out of stock
      text: 'Out of stock',
      width: 'w-[101px]',
    },
  };

  const { bgColor, text, width } = tagConfig[type] || tagConfig.sale;

  return (
    <div
      className={`${bgColor} ${width} h-[27px] rounded-[4px] px-[8px] py-[3px] flex items-center justify-center text-white text-xs font-medium`}
    >
      {value ? `${text} ${value}` : text}
    </div>
  );
};

export default Tag;

// // Карточка только со скидкой
// <SaleCard tags={['sale']} salePercent={50} />

// // Карточка "Новинка + Скидка"
// <SaleCard tags={['new', 'sale']} salePercent={30} />

// // Карточка "Хит продаж"
// <SaleCard tags={['best']} />

// // Товар отсутствует
// <SaleCard tags={['out']} />
