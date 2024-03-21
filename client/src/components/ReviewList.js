import React from 'react';

  const ReviewList = ({ reviews }) => {
  
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.name}</strong> - {review.email}<br />
            {review.review}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
