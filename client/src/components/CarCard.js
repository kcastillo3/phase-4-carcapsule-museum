import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../index.css';

const CarCard = ({ car }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="car-card">
      <img src={car.imageUrl} alt={car.make} />
      <h2>{car.year} {car.make} {car.model}</h2>
      <p>{car.description}</p>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default CarCard;
