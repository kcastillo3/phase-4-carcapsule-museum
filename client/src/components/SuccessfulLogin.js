import React from 'react';
import { useHistory } from 'react-router-dom';

const SuccessfulLogin = () => {
  const history = useHistory(); // Renamed for clarity

  const handleRedirect = () => {
    history.push('/car'); // Corrected to use history.push and ensure the path matches your route configuration
  };

  return (
    <div className="successful-login-container">
      <h2>Login Successful!</h2>
      <p>Check Out our Cars and Leave a Review!</p>
      <button onClick={handleRedirect}>View Cars</button>
    </div>
  );
};

export default SuccessfulLogin;