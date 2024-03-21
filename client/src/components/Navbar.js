import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/car">Car Page</Link></li>
        {isLoggedIn ? (
          // Navigate to UserAccount instead of direct logout
          <li><Link to="/user-account">Account</Link></li>
        ) : (
          // When not logged in, show Login and Sign Up options
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
