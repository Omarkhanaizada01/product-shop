// # Фильтр по рейтингу
'use client';
import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

const ratings = [
  { id: 1, stars: 5, label: '5.0', checked: false },
  { id: 2, stars: 4, label: '4.0 & up', checked: true }, // Второй checked
  { id: 3, stars: 3, label: '3.0 & up', checked: false },
  { id: 4, stars: 2, label: '2.0 & up', checked: false },
  { id: 5, stars: 1, label: '1.0 & up', checked: false }
];

export default function RatingFilter() {
  const [selectedRatings, setSelectedRatings] = useState([2]); // Второй выбран по умолчанию

  const handleRatingChange = (id) => {
    setSelectedRatings(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-[18px] h-[18px] relative">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 18 18"
              className="absolute top-0 left-0"
            >
              {/* Star outline */}
              <path
                d="M9 13.5L3.75 16.5L5.25 10.5L1.5 6.75L7.5 6L9 0L10.5 6L16.5 6.75L12.75 10.5L14.25 16.5L9 13.5Z"
                fill={star <= rating ? "#FF8A00" : "#CCCCCC"}
                stroke={star <= rating ? "#FF8A00" : "#CCCCCC"}
                strokeWidth="1"
              />
              {/* Inner star fill for active stars */}
              {star <= rating && (
                <path
                  d="M9 13.5L3.75 16.5L5.25 10.5L1.5 6.75L7.5 6L9 0L10.5 6L16.5 6.75L12.75 10.5L14.25 16.5L9 13.5Z"
                  fill="#FF8A00"
                />
              )}
            </svg>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[312px] opacity-100">
      {/* SectionHeading */}
      <SectionHeading title="Rating" />
      
      {/* Ratings List */}
      <div className="space-y-[8px] mt-4">
        {ratings.map((rating) => (
          <div 
            key={rating.id} 
            className="flex items-center gap-[8px] w-[143px] h-[41px] cursor-pointer group py-[10px]"
            onClick={() => handleRatingChange(rating.id)}
          >
            {/* Checkbox */}
            <div className="relative">
              <input
                type="checkbox"
                id={`rating-${rating.id}`}
                checked={selectedRatings.includes(rating.id)}
                onChange={() => handleRatingChange(rating.id)}
                className="absolute opacity-0 w-0 h-0"
              />
              
              {/* Custom Checkbox */}
              <div className={`
                w-[20px] h-[20px] rounded-[3px] border flex items-center justify-center transition-colors
                ${selectedRatings.includes(rating.id) 
                  ? 'bg-[#00B207] border-[#00B207]' // Checked
                  : 'group-hover:border-[#00B207] border-[#CCCCCC] bg-white' // Normal/Hover
                }
              `}>
                {selectedRatings.includes(rating.id) && (
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M13.3334 4L6.00008 11.3333L2.66675 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Rating Stars and Text */}
            <label 
              htmlFor={`rating-${rating.id}`}
              className="flex items-center gap-2 w-[115px] h-[21px] cursor-pointer"
            >
              {/* Stars */}
              <StarRating rating={rating.stars} />
              
              {/* Rating Text */}
              <span className="text-[#1A1A1A] font-poppins text-[14px] leading-[150%] whitespace-nowrap">
                {rating.label}
              </span>
            </label>
          </div>
        ))}
      </div>

      {/* Divider Line */}
      <div className="w-[312px] h-[0px] opacity-100 border-t border-[#E5E5E5] mt-4"></div>
    </div>
  );
}