// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CarPage from './CarPage';
import Login from './Login';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
