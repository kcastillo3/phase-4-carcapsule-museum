import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory, Redirect } from 'react-router-dom';

const Login = ({ onLogin, isLoggedIn }) => {
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
          console.log('Login attempted with:', values);
          onLogin();
          setSubmitting(false);
          history.push('/login-success');
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
