import React, { useState, useEffect } from 'react';

const ReviewList = ({ reviews, onReply }) => {
  const [reviewList, setReviewList] = useState(reviews);
  const [error, setError] = useState(null);

  useEffect(() => {
    setReviewList(reviews);
  }, [reviews]);

  const updateReview = async (id, updatedReview) => {
    try {
      const response = await fetch(`/review_list/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedReview)
      });
      if (!response.ok) {
        throw new Error('Failed to update review');
      }
      // Update review list optimistically
      setReviewList(prevReviews =>
        prevReviews.map(review =>
          review.id === id ? { ...review, ...updatedReview } : review
        )
      );
    } catch (error) {
      setError('Failed to update review');
      console.error(error);
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await fetch(`/review_list/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete review');
      }
      // Update review list optimistically
      setReviewList(prevReviews =>
        prevReviews.filter(review => review.id !== id)
      );
    } catch (error) {
      setError('Failed to delete review');
      console.error(error);
    }
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
            <button onClick={() => updateReview(review.id, { /* Updated review data */ })}>
              Update
            </button>
            <button onClick={() => deleteReview(review.id)}>
              Delete
            </button>
            {/* Adding reply functionality */}
            <button onClick={() => onReply(index, 'Reply text here')}>
              Reply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
