// Login.js
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory, Link } from 'react-router-dom';
import SignUp from './SignUp';
import UserAccount from './UserAccount';
import Logout from './Logout';

const Login = () => {
  const [isAuth, setIsAuth] = useState(false); // Authentication state
  const history = useHistory();

  // If the user is authenticated, show the UserAccount component
  if (isAuth) {
    return <UserAccount />;
  }

  // Function to handle form submission for login
  const handleLoginSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Simulating successful login
        setIsAuth(true); // Update the state to reflect that the user is logged in
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
    setSubmitting(false); // Reset the submitting state
  };

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleLoginSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="username" placeholder="Username" />
            <Field name="password" type="password" placeholder="Password" />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p>
        Don't have an account? 
        <Link to="/signup">Sign Up</Link> {/* Link to the signup route */}
      </p>
      {/* The Logout button is shown when the user is logged in, which is handled within the UserAccount component */}
    </div>
  );
};

export default Login;
