import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../index.css';

const CarCard = ({ car, userId, username }) => {
  const [carDetails, setCarDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewRefreshTrigger, setReviewRefreshTrigger] = useState(0); 

  const handleReviewAdded = () => {
    setReviewRefreshTrigger(prev => prev + 1); 
  };

  const handleCardClick = async () => {
    try {
      const response = await fetch(`http://localhost:5555/cars_card/${car.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch car details');
      }
      const details = await response.json();
      setCarDetails(details);
      setIsModalOpen(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="car-card" onClick={handleCardClick}>
        <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
        <h2>{car.year} {car.make} {car.model}</h2>
        <p>{car.description}</p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={carDetails ? carDetails.imageUrl : car.imageUrl} alt={car.make} />
            <h2>{carDetails ? `${carDetails.year} ${carDetails.make} ${carDetails.model}` : `${car.year} ${car.make} ${car.model}`}</h2>
            <p>{carDetails ? carDetails.description : car.description}</p>
            <ReviewForm carId={car.id} userId={userId} username={username} onReviewAdded={handleReviewAdded} />
            <ReviewList carId={car.id} userId={userId} username={username} reviewRefreshTrigger={reviewRefreshTrigger} />
            <button className="close-modal" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
