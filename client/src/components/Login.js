import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
  const history = useHistory();

  const validate = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
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
        initialValues={{ email: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://localhost:5555/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.email,
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
            // Assuming our login was successful, and we implemented the onLogin function
            // correctly in our App component or where it's being passed as props
            onLogin(data.user_id, data.username); // Update application state with user info
            history.push('/login-success'); // Redirect to the SuccessfulLogin component
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
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
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
