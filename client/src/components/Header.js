// Header.js

import React from 'react';
import Navbar from './Navbar'; 
import '../index.css'; // Import the CSS file for styling


// Updated Header to accept isLoggedIn and onLogout props
const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="container">
        <img src="https://res.cloudinary.com/doyp4tk82/image/upload/v1711064951/Purple_Badge_Car_Wash_Logo_uphfrk.jpg" alt="Car Capsule Museum Logo" className="logo" />
        <div className="navbar-wrapper">
          <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
