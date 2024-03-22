import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('/cars_list');
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCarDetails = async (carId) => {
    try {
      const response = await fetch(`/cars_list/${carId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch car details');
      }
      const data = await response.json();
      console.log('Car details:', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="carList">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} fetchCarDetails={fetchCarDetails} />
      ))}
    </div>
  );
};

export default CarList;
