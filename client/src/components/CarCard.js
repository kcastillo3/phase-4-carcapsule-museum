import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../index.css';

const CarCard = ({ car }) => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmit = (review) => {
    setReviews([...reviews, { ...review, replies: [] }]);
  };

  const handleReply = (reviewIndex, replyText) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews];
      updatedReviews[reviewIndex].replies.push(replyText);
      return updatedReviews;
    });
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="car-card" onClick={handleCardClick}>
        <img src={car.imageUrl} alt={car.make} />
        <h2>{car.year} {car.make} {car.model}</h2>
        <p>{car.description}</p>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={car.imageUrl} alt={car.make} />
            <h2>{car.year} {car.make} {car.model}</h2>
            <p>{car.description}</p>
            <ReviewForm onSubmit={handleReviewSubmit} />
            <ReviewList reviews={reviews} onReply={handleReply} />
            <button className="close-modal" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarCard;
