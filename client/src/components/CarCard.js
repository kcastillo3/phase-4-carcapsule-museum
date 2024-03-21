import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList'; // Assuming you have this component

const CarCard = ({ car, reviews }) => {
  return (
    <div className="car-card">
      <h4>
        {car.make} {car.model}
      </h4>
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
      <a href={`/car/${car.id}`}>View Details</a>
      {/* Display the form for submitting a new review */}
      <ReviewForm carId={car.id} />
      {/* Assuming ReviewList takes an array of reviews for this car */}
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default CarCard;
