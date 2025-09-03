'use client';

import Image from 'next/image';
import ArrowButton from '../ui/ArrowButton';
import Heading from '../ui/Heading';

const LatestNews = () => {
  const blogPosts = [
    {
      id: 1,
      image: '/images/news/news 1.svg',
      date: '28',
      month: 'October',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Food' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Curabitur porttitor orci eget neque accumsan venenatis.'
    },
    {
      id: 2,
      image: '/images/news/news 2.svg',
      date: '15',
      month: 'November',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Recipes' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper.'
    },
    {
      id: 3,
      image: '/images/news/news 3.svg',
      date: '03',
      month: 'December',
      tags: [
        { icon: '/images/icons/food tag.svg', text: 'Healthy' },
        { icon: '/images/icons/user tag.svg', text: 'By Admin' },
        { icon: '/images/icons/comments tag.svg', text: '65 Comments' }
      ],
      title: 'Maecenas blandit risus elementum mauris malesuada.'
    }
  ];

  return (
    <section className="bg-white relative pt-16 sm:pt-20 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading 
          title="Latest News" 
          buttonText="View All"
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg overflow-hidden transition-transform hover:shadow-xl hover:-translate-y-1"
              style={{ boxShadow: '0px 20px 50px rgba(0,0,0,0.08)' }}
            >
              {/* Изображение */}
              <div className="relative w-full h-[240px] sm:h-[280px] md:h-[324px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Дата */}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-white rounded flex flex-col items-center justify-center shadow-md">
                  <span className="font-bold text-xl text-[#1A1A1A]">{post.date}</span>
                  <span className="text-xs text-[#4D4D4D]">{post.month}</span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6 flex flex-col gap-4">
                {/* Теги */}
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <div key={`${tag.text}-${index}`} className="flex items-center gap-1">
                      <Image 
  src={tag.icon} 
  alt={tag.text} 
  width={14} 
  height={14} 
  style={{ width: '14px', height: '14px' }} 
  priority
/>
                      <span className="text-sm text-[#4D4D4D] font-normal">{tag.text}</span>
                    </div>
                  ))}
                </div>

                {/* Заголовок */}
                <h3 className="text-lg font-medium text-[#1A1A1A] leading-snug">{post.title}</h3>

                {/* Кнопка */}
                <ArrowButton 
                  variant="text-only"
                  className="w-[108px] h-[19px] gap-[12px]"
                  iconClassName="text-[12px] font-medium"
                >
                  Read More
                </ArrowButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
