import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  return (
    <div>
      <h4>{car.make} {car.model}</h4>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;
