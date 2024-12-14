import React from 'react';

interface RatingStarsProps {
  rating: number; // The rating value, e.g., 4.5
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const totalStars = 5; // Total number of stars
  const filledStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 >= 0.5 ? 1 : 0; // Half star
  const emptyStars = totalStars - filledStars - halfStar; // Remaining stars

  return (
    <ul>
      <li>
        {/* Render filled stars */}
        {Array.from({ length: filledStars }, (_, index) => (
          <i key={`filled-${index}`} className="fas fa-star"></i>
        ))}

        {/* Render half star if applicable */}
        {halfStar === 1 && <i className="fas fa-star-half-alt"></i>}

        {/* Render empty stars */}
        {Array.from({ length: emptyStars }, (_, index) => (
          <i key={`empty-${index}`} className="far fa-star"></i>
        ))}
      </li>
    </ul>
  );
};

export default RatingStars;
