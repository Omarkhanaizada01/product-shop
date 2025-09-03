'use client';

import Image from "next/image";
import HeadingWithArrows from "../ui/HeadingWithArrows";

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      role: "Customer",
      avatar: "/images/clientsAvatar/avatar 1.svg",
    },
    {
      id: 2,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Jane Smith",
      role: "Client",
      avatar: "/images/clientsAvatar/avatar 2.svg",
    },
    {
      id: 3,
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "John Doe",
      role: "Buyer",
      avatar: "/images/clientsAvatar/avatar 3.svg",
    },
  ];

  return (
    <section className="py-16 bg-[#F2F2F2] mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeadingWithArrows />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ text, name, role, avatar }) => {
  return (
    <div className="w-full max-w-md md:max-w-sm lg:max-w-[424px] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
      
      {/* Quote icon */}
      <div className="w-8 h-8 relative mb-4">
  <Image 
    src="/images/icons/quote vector.png" 
    alt="Quote" 
    fill
    sizes="32px"   
    style={{ objectFit: 'contain' }}
    className="opacity-30"
    priority
  />
</div>
      
      {/* Testimonial text */}
      <p className="text-[#4D4D4D] text-sm sm:text-base font-normal font-poppins leading-relaxed">
        {text}
      </p>
      
      {/* Client info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-14 h-14 relative flex-shrink-0">
            <Image 
              src={avatar} 
              alt={name} 
              fill
              style={{ objectFit: 'cover', borderRadius: '9999px' }}
              priority
            />
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[#1A1A1A] text-base sm:text-lg font-medium font-poppins leading-tight">
              {name}
            </h4>
            <p className="text-[#1A1A1A] text-sm sm:text-base font-normal font-poppins leading-tight">
              {role}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="relative w-[104px] h-5">
          <Image
            src="/images/icons/rating.svg"
            alt="Rating"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;



