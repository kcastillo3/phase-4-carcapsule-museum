import React from 'react';

const ReviewList = ({ reviews }) => {
  // Check if reviews is defined and is an array before mapping
  if (!Array.isArray(reviews)) {
    // Return some placeholder or nothing if reviews are not available
    return <div>No reviews available.</div>;
  }

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
