import Image from 'next/image';

export default function SectionHeading({ title = "All Categories", showIcon = true }) {
  return (
    <div className="flex justify-between items-center pb-5 w-[312px] h-[30px] mb-5">
      <h2 className="text-[#1A1A1A] font-poppins font-medium text-[20px] leading-[150%]">
        {title}
      </h2>

      {showIcon && (
        <div className="relative">
          <Image
            src="/images/icons/ChevronDown.png"
            alt="Dropdown"
            width={12}   // ✅ оставляем только width/height
            height={6}
            className="rotate-180" // ✅ Tailwind вместо inline-style
          />
        </div>
      )}
    </div>
  );
}
