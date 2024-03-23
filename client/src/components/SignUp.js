import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const history = useHistory();

  const validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.username) {
      errors.username = 'Username is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <div className="signup-container">
      <h2>Create An Account</h2>
      <p className="already-registered">Already registered? <a href="/login">Log in here</a></p>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          fetch('http://localhost:5555/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: values.email,
              username: values.username,
              password: values.password,
            }),
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Signup failed');
            }
            return response.json();
          })
          .then(data => {
            console.log('User signed up:', data);
            onSignUp(); // This could be a function to update state indicating the user is now signed in
            setSubmitting(false);
            history.push('/login-success'); // Redirect to a success page or dashboard
          })
          .catch(error => {
            console.error('Error during signup:', error);
          });
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
              <label htmlFor="username">Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="signup-button">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;

