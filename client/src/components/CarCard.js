import React, { useState } from 'react'
import ReviewForm from './ReviewForm'

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h4>
        {car.make} {car.model}
      </h4>
      <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
      <a href={`/car/${car.id}`}>View Details</a>
    </div>
  )
}

export default CarCard
