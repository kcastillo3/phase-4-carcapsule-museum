// UserAccount.js
import React from 'react';
import Logout from './Logout';
import { useHistory } from 'react-router-dom';

const UserAccount = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here, e.g., clearing the authentication token
    history.push('/login'); // Redirect to login after logout
  };

  return (
    <div>
      <h2>User Account</h2>
      <p>Welcome, [username]! You are logged in.</p>
      {/* Use the Logout component and pass the logout handler */}
      <Logout onLogout={handleLogout} />
    </div>
  );
};

export default UserAccount;

