import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();

  const handleLogout = async () => {
    // I'm informing the backend that the user wants to log out
    try {
      const response = await fetch('/logout', { method: 'POST' });

      // If the backend confirms that the session has ended
      if (response.ok) {
        // I will redirect to the login page
        history.push('/login');
      } else {
        // If something went wrong, I'll log an error message
        console.error('Logout failed.');
      }
    } catch (error) {
      // I'll log any network errors too
      console.error('There was an error logging out', error);
    }
  };

  // This button triggers the handleLogout function when clicked
  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
