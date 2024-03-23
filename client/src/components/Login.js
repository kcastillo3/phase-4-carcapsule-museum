import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
  const history = useHistory();

  const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required'; // Assuming this is actually the email field - we gotta check/go over this for clarity
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <video autoPlay muted loop className="login-video">
        <source src="https://res.cloudinary.com/doyp4tk82/video/upload/v1711157406/car-gif_uoe0bk.mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://localhost:5555/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.username, // Assuming the username field is used for email - we gotta check/go over this again
              password: values.password,
            }),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Login failed');
            }
            return response.json();
          })
          .then(data => {
            console.log('Login successful:', data);
            onLogin(true); // Update the login state
            history.push('/login-success'); // Redirect to the "Successful Login" page
          })
          .catch(error => {
            console.error('Error during login:', error);
            alert('Failed to login. Please check your credentials.');
          })
          .finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="input-group">
              <label htmlFor="username">Username (Email):</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="login-button">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
