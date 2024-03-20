import React from 'react';
import CarCard from './CarCard';

const CarList = () => {
  // Assume cars data is fetched from backend
  const cars = [
    { id: 1, make: 'Toyota', model: 'Corolla' },
    { id: 2, make: 'Honda', model: 'Accord' },
    // Add more cars as needed
  ];

  return (
    <div>
      <h3>Car List</h3>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
