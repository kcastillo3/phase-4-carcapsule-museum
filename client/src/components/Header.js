// Header.js

import React from 'react';
import Navbar from './Navbar'; 

// Updated Header to accept isLoggedIn and onLogout props
const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header>
      <div className="container">
        <img src="/path/to/logo.png" alt="Car Capsule Museum Logo" className="logo" />
        {/* Pass isLoggedIn and onLogout to NavBar */}
        <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
      </div>
    </header>
  );
};

export default Header;
