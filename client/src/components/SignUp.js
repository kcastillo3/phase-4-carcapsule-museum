import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const history = useHistory();

  // When the form is submitted, I'll send the form values to the backend
  const handleSubmit = async (values, actions) => {
    try {
      // I'm using a POST request to send the form data to the backend's signup endpoint
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // If signup is successful, I might redirect to the login page for the user to log in with their new credentials
        history.push('/login');
      } else {
        // If the backend responds with an error, I'll handle it here
        console.error('Signup failed.');
      }
    } catch (error) {
      // If there's a network or other error, I'll catch and handle it here
      console.error('There was an error during signup', error);
    } finally {
      // I'm ensuring the form is no longer in the submitting state
      actions.setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="username">Username:</label>
            <Field id="username" name="username" placeholder="Choose a username" />

            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" type="password" placeholder="Create a password" />

            <button type="submit" disabled={isSubmitting}>Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
