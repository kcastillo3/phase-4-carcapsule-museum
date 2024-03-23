import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';
import '../index.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch the list of cars from the backend
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5555/cars_list');
        if (!response.ok) {
          // If the response is not ok, throw an error
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data); // Update the state with the fetched cars
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars(); // Call the fetch function
  }, []); // The empty dependency array means this effect runs once on mount

  return (
    <div className="carList">
      {cars.map(car => (
        // For each car, render a CarCard component
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
