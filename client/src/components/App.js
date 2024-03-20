// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Adjusted
import Home from './Home'; // Adjusted
import CarPage from './CarPage'; // Adjusted
import Login from './Login'; // Adjusted
import SignUp from './SignUp'
import SuccessfulLogin from './SuccessfulLogin';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header component */}
        <Header />
        {/* Routes */}
        <Switch>
          {/* Home route */}
          <Route exact path="/" component={Home} />
          {/* Car Page route */}
          <Route path="/car" component={CarPage} />
          {/* Login route */}
          <Route path="/login" component={Login} />
          {/* SignUp route */}
          <Route path="/signup" component={SignUp} />
          {/* SuccessfulMessage Route */}
          <Route path="/login-success" component={SuccessfulLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
