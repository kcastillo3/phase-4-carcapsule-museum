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
          // Assumes validation against the backend and successful account creation
          console.log('User signed up:', values);
          onSignUp(); // This would handle the backend signup and also log the user in
          setSubmitting(false);
          history.push('/login-success'); // Direct users to the success message page -- this will change once we have backend set up
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

