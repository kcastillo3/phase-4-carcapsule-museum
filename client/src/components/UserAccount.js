import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserAccount = ({ isLoggedIn, onLogout }) => {
  const history = useHistory();

  useEffect(() => {
    // Redirect to the login page if not logged in
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [isLoggedIn, history]);

  // Handle logout action
  const handleLogoutClick = () => {
    onLogout();
  };

  return (
    <div className="user-account-container">
      <h2>User Account</h2>
      {/* This button calls the function that changes isLoggedIn state */}
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default UserAccount;