import React, { useState } from 'react';

const ReviewForm = ({ carId, userId }) => {
  const [name, setName] = useState(''); // Define state for name
  const [email, setEmail] = useState(''); // Define state for email
  const [review, setReview] = useState(''); // Correctly defined state for review

  console.log("Current userId:", userId); // Debug: Ensuring userId is available

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const reviewData = { user_id: userId, review };

    console.log("Submitting review with data:", reviewData); // Debug: Checking the data being sent

    fetch(`http://localhost:5555/review_form/${carId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Review added:', data);
      setName(''); // Reset the name state
      setEmail(''); // Reset the email state
      setReview(''); // Reset the review state
    })
    .catch((error) => {
      console.error('Error adding review:', error);
    });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="review">Your Review:</label>
        <textarea id="review" placeholder="Your Review" value={review} onChange={(e) => setReview(e.target.value)} required />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
