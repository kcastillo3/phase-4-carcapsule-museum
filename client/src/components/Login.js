import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useHistory } from 'react-router-dom'; 

const Login = ({ onLogin }) => {
  const history = useHistory();
  const validate = values => {
    let errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          // Simulate a successful login after some validations or API call
          console.log('Login attempted with:', values);
          setTimeout(() => {
            // Assuming the login is successful
            console.log('Login successful:', values);
            setSubmitting(false);
            history.push('/login-success'); // Redirect to the login-success page
          }, 500); // Simulate an asynchronous operation delay
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
      <p>
        Don’t have a Login? <Link to="/signup">Sign Up!</Link>
      </p>
    </div>
  );
};

export default Login;

