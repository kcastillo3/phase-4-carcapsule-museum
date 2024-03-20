import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom'; 

const SignUp = ({ onSignUp }) => {
  const navigate = useHistory(); // Initialize the navigate function
  const validate = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
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
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          // Here we'll simulate the sign-up process
          setTimeout(() => {
            console.log('User signed up:', values);
            onSignUp(values); // Assuming onSignUp is a prop function that handles the sign-up logic
            setSubmitting(false);
            navigate.push('/login-success'); // Use history.push to navigate
          }, 500); // Simulate a server response delay
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
            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
SignUp.defaultProps = {
  onSignUp: () => console.warn('onSignUp not provided!'),
};

export default SignUp;
