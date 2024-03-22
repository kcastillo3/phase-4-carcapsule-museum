import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
  const history = useHistory();

  const handleSignUp = async (values) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
      history.push('/login'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleLogin = async (values) => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
      history.push('/dashboard'); // Redirect to dashboard after successful login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };


  const validate = values => {
    let errors = {};
    // Basic validation logic
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  // If the user is already logged in, redirect them to the home page or dashboard
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log('Login attempted with:', values);
          // Here, we would typically validate the credentials against our backend
          // For now, we'll assume the credentials are valid and proceed to log in
          handleLogin(values); // Call handleLogin function with form values
          setSubmitting(false);
          history.push('/login-success'); // Navigate to a success page or dashboard
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik> 
      {/* Render SignUp component separately */}
      <SignUp onSignUp={handleSignUp} />
    </div>
  );
};

export default Login;