import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
  const history = useHistory();
  
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
          onLogin(); // Call the onLogin function passed as a prop
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
    </div>
  );
};

export default Login;

