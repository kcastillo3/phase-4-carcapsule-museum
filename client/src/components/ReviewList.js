import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h4>Reviews:</h4>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
