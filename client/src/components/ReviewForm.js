import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, review });
    setName('');
    setEmail('');
    setReview('');
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
