import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CarPage from './CarPage';
import Login from './Login';
import SignUp from './SignUp';
import SuccessfulLogin from './SuccessfulLogin';
import UserAccount from './UserAccount'; // Made sure to import UserAccount

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function now only sets the loggedIn state to true
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // This function now only sets the loggedIn state to false
  const handleLogout = () => {
    // This function should update the state and cause a re-render
    setIsLoggedIn(false);
  };

  // This function now only sets the loggedIn state to true
  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/car" component={CarPage} />
          <Route path="/login" render={(props) => isLoggedIn ? <Redirect to="/" /> : <Login {...props} onLogin={handleLogin} />} />
          <Route path="/signup" render={(props) => isLoggedIn ? <Redirect to="/" /> : <SignUp {...props} onSignUp={handleSignUp} />} />
          <Route path="/login-success" render={(props) => isLoggedIn ? <SuccessfulLogin {...props} /> : <Redirect to="/login" />} />
          <Route path="/user-account" render={(props) => ( <UserAccount {...props} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
)} />          {/* Ensured there's a route for UserAccount */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
