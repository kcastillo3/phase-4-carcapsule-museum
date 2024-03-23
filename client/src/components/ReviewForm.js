import React, { useState } from 'react';

const ReviewForm = ({ carId, userId }) => { // Included carId and userId as a prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepared the review data to be sent in the POST request
    const reviewData = { user_id: userId, name, email, review  }; // You might need to adjust this structure based on backend expectations

    // Perform the POST request to our Flask backend
    fetch(`http://localhost:5555/review_form/${carId}`, { // Include carId in the URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok');
    })
    .then(data => {
      console.log('Review added:', data);
      setName('');
      setEmail('');
      setReview('');
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
