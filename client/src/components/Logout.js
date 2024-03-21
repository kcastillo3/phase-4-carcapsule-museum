import React from 'react';

const Logout = ({ onLogout }) => {
  return (
    <div className="logout-container">
      <h2>Want to Logout?</h2>
      <button onClick={onLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Logout;