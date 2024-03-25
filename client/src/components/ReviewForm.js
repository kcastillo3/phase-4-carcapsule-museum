import React, { useState } from 'react';

const ReviewForm = ({ carId, userId, username, onReviewAdded }) => { // Accept onReviewAdded prop
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const reviewData = { user_id: userId, review }; // Adjusted to match backend expectation

    try {
      const response = await fetch(`http://localhost:5555/review_form/${carId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) throw new Error('Failed to submit review');

      const newReview = await response.json();
      setMessage('Review submitted successfully!');
      setReview('');
      
      // Calling the onReviewAdded function with the new review data
      onReviewAdded(newReview);
    } catch (error) {
      console.error('Error adding review:', error);
      setMessage('Failed to submit review.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div>Reviewing as: {username}</div>
      {message && <div className="review-message">{message}</div>}
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="review">Your Review:</label>
          <textarea id="review" name="review" placeholder="Your Review" value={review} onChange={(e) => setReview(e.target.value)} required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </>
  );
};

export default ReviewForm;

