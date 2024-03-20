// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header'; // Adjusted
import Home from './Home'; // Adjusted
import CarPage from './CarPage'; // Adjusted
import Login from './Login'; // Adjusted

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
