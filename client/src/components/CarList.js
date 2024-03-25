import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';
import '../index.css';

// Accept both userId and username as props
const CarList = ({ userId, username }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5555/cars_list');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="carList">
      {cars.map(car => (
        // Pass both userId and username to each CarCard
        <CarCard key={car.id} car={car} userId={userId} username={username} />
      ))}
    </div>
  );
};

export default CarList;
