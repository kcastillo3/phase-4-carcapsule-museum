import React, { useState, useEffect } from 'react';

const ReviewList = ({ reviews, onReply }) => {
  const handleReply = (reviewIndex, replyText) => {
    onReply(reviewIndex, replyText);
  };

  return (
    <div>
      <h3>Reviews</h3>
      {error && <p>Error: {error}</p>}
      <ul>
        {reviewList.map((review, index) => (
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

