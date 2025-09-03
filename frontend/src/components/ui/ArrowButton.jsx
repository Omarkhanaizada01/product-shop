// src/components/ui/buttons/ArrowButton.jsx
"use client";

export default function ArrowButton({
  children = "Shop now",
  variant = "white", // 'white' | 'green' | 'inverted' | 'text-only'
  className = "",
  iconClassName = "",
  showIcon = true, // Новый пропс для управления видимостью иконки
  ...props
}) {
  const variants = {
    white: {
      button: "bg-white hover:bg-gray-100 text-[#00B207]",
      icon: "text-[#00B207]"
    },
    green: {
      button: "bg-green hover:bg-[#00B207]/90 text-white",
      icon: "text-white"
    },
    inverted: {
      button: "bg-transparent border border-[#00B207] text-[#00B207] hover:bg-[#00B207]/10",
      icon: "text-[#00B207]"
    },
    "text-only": {
      button: "bg-transparent text-[#00B207] hover:text-[#00B207]/80",
      icon: "text-[#00B207]"
    }
  };

  const currentVariant = variants[variant] || variants.white;

  return (
    <button
      className={`
        ${variant === "text-only" ? "w-auto h-auto" : "w-[191px] h-[51px] rounded-[53px]"}
        flex items-center justify-center group
        transition-colors duration-200
        ${currentVariant.button}
        ${className}
      `}
      {...props}
    >
      <div className="flex items-center gap-2 font-poppins font-semibold text-[16px] leading-[120%]">
        {children}
        {showIcon && (
          <svg 
            width="15" 
            height="12"
            alt="icon" 
            viewBox="0 0 15 12" 
            fill="none" 
            className={`
              group-hover:translate-x-1 transition-transform 
              ${currentVariant.icon}
              ${iconClassName}
              ${variant === "text-only" ? "ml-1" : "ml-2"}
            `}
          >
            <path 
              d="M1 6H13M13 6L8 1M13 6L8 11" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </button>
  );
}
