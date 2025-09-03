import Image from "next/image";

const FollowUs = () => {
  
  const instagramPosts = [
    { id: 1, name: "instagramPost 1.svg" },
    { id: 2, name: "instagramPost 2.jpg" },
    { id: 3, name: "instagramPost 3.svg" },
    { id: 4, name: "instagramPost 4.svg" },
    { id: 5, name: "instagramPost 5.svg" },
    { id: 6, name: "instagramPost 6.svg" },
  ];

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Заголовок */}
        <h2 
          className="w-full max-w-[378px] text-center mb-12 font-poppins font-semibold text-[32px] leading-[1.2] text-[#1A1A1A]"
        >
          Follow us on Instagram
        </h2>

        {/* Галерея постов */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 w-full">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="relative group cursor-pointer w-full max-w-[200px] aspect-square overflow-hidden"
            >
              {/* Пост Instagram */}
              <Image
                src={`/images/followUs/${post.name}`}
                alt={`Instagram Post ${post.id}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                style={{ objectFit: 'cover' }}
                className="transition-all duration-300 group-hover:scale-105"
              />

              {/* Эффект при наведении */}
              <div className="absolute inset-0 bg-[#2B572ECC] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  {/* Иконка Instagram */}
  <Image
    src="/images/icons/instagram.svg"
    alt="Instagram Icon"
    width={24.013}
    height={24.048}
    style={{ objectFit: 'contain' }}
    className="opacity-100"
  />
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
