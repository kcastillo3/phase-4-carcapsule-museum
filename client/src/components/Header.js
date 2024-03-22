import React from 'react';
import Navbar from './Navbar'; 
import '../index.css'; // Import the CSS file for styling


// Updated Header to accept isLoggedIn and onLogout props
const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="header">
      <div className="container">
        <img src="https://res.cloudinary.com/doyp4tk82/image/upload/v1711080425/Untitled_design_yk475e.jpg" alt="Car Capsule Museum Logo" className="logo" />
        <div className="navbar-wrapper">
          <Navbar isLoggedIn={isLoggedIn} onLogout={onLogout} />
        </div>
      </div>
      {/* Main content area */}
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </header>
  );
};

export default Header;
