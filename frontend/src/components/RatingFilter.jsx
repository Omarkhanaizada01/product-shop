'use client';
import { useState } from 'react';
import SectionHeading from './ui/SectionHeading';

const ratings = [
  { id: 1, stars: 5, label: '5.0', checked: false },
  { id: 2, stars: 4, label: '4.0 & up', checked: true },
  { id: 3, stars: 3, label: '3.0 & up', checked: false },
  { id: 4, stars: 2, label: '2.0 & up', checked: false },
  { id: 5, stars: 1, label: '1.0 & up', checked: false }
];

export default function RatingFilter() {
  const [selectedRatings, setSelectedRatings] = useState([2]);

  const handleRatingChange = (id) => {
    setSelectedRatings(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] relative">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 18 18"
              className="absolute top-0 left-0"
            >
              <path
                d="M9 13.5L3.75 16.5L5.25 10.5L1.5 6.75L7.5 6L9 0L10.5 6L16.5 6.75L12.75 10.5L14.25 16.5L9 13.5Z"
                fill={star <= rating ? "#FF8A00" : "#CCCCCC"}
                stroke={star <= rating ? "#FF8A00" : "#CCCCCC"}
                strokeWidth="1"
              />
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
    <div className="w-full lg:w-[312px] opacity-100">
      <SectionHeading title="Rating" />
      
      <div className="space-y-2 md:space-y-[8px] mt-4">
        {ratings.map((rating) => (
          <div 
            key={rating.id} 
            className="flex items-center gap-2 md:gap-[8px] w-full md:w-[143px] h-auto md:h-[41px] cursor-pointer group py-2 md:py-[10px]"
            onClick={() => handleRatingChange(rating.id)}
          >
            <div className="relative">
              <input
                type="checkbox"
                id={`rating-${rating.id}`}
                checked={selectedRatings.includes(rating.id)}
                onChange={() => handleRatingChange(rating.id)}
                className="absolute opacity-0 w-0 h-0"
              />
              
              <div className={`
                w-4 h-4 md:w-5 md:h-5 rounded-[3px] border flex items-center justify-center transition-colors
                ${selectedRatings.includes(rating.id) 
                  ? 'bg-[#00B207] border-[#00B207]'
                  : 'group-hover:border-[#00B207] border-[#CCCCCC] bg-white'
                }
              `}>
                {selectedRatings.includes(rating.id) && (
                  <svg 
                    width="12" 
                    height="12" 
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

            <label 
              htmlFor={`rating-${rating.id}`}
              className="flex items-center gap-2 w-full md:w-[115px] h-auto md:h-[21px] cursor-pointer"
            >
              <StarRating rating={rating.stars} />
              
              <span className="text-[#1A1A1A] font-poppins text-xs md:text-[14px] leading-[150%] whitespace-nowrap">
                {rating.label}
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-[312px] h-[0px] opacity-100 border-t border-[#E5E5E5] mt-4"></div>
    </div>
  );
}