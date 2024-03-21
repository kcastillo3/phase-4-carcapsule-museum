import React from 'react';
import { useHistory } from 'react-router-dom';
import Logout from './Logout'; // Import Logout component

const UserAccount = () => {
  const history = useHistory();

  // Define the logout logic
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear the logged-in state
    history.push('/login'); // Navigate back to the login page
  };

  return (
    <div className="user-account-container">
      <h2>User Account</h2>
      {/* Pass handleLogout as onLogout to the Logout component */}
      <Logout onLogout={handleLogout} />
    </div>
  );
};

export default UserAccount;