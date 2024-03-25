import React from 'react';
import CarList from './CarList';

function CarPage({ userId, username }) { // Accept both userId and username as props
  return (
    <div className="car-page-container">
      <CarList userId={userId} username={username} /> {/* Pass both userId and username to CarList */}
    </div>
  );
}

export default CarPage;
