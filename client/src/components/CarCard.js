import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../index.css';

const CarCard = ({ car }) => {
  const [carDetails, setCarDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = async () => {
    try {
      const response = await fetch(`http://localhost:5555/cars_card/${car.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch car details');
      }
      const details = await response.json();
      setCarDetails(details); // Update the state with fetched car details
      setIsModalOpen(true); // Open the modal to show car details
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
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
            {/* Use fetched carDetails for displaying detailed information */}
            <img src={carDetails ? carDetails.imageUrl : car.imageUrl} alt={car.make} />
            <h2>{carDetails ? `${carDetails.year} ${carDetails.make} ${carDetails.model}` : `${car.year} ${car.make} ${car.model}`}</h2>
            <p>{carDetails ? carDetails.description : car.description}</p>
            <ReviewForm carId={car.id} /> {/* Pass carId to ReviewForm */}
            <ReviewList carId={car.id} /> {/* Pass carId to ReviewList */}
            <button className="close-modal" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
