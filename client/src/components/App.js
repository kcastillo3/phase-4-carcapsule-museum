import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import CarPage from './CarPage';
import Login from './Login';
import SignUp from './SignUp';
import SuccessfulLogin from './SuccessfulLogin';
import UserAccount from './UserAccount';

const App = () => {
  // Logged in if userId or username is stored in localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userId') || localStorage.getItem('username') ? true : false); 
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    // Syncing isLoggedIn state with localStorage
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  }, [isLoggedIn]);

  const handleLogin = (userIdParam, usernameParam) => {
    setIsLoggedIn(true);
    setUserId(userIdParam);
    setUsername(usernameParam);
    localStorage.setItem('userId', userIdParam);
    localStorage.setItem('username', usernameParam);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    setUsername('');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('isLoggedIn'); 
  };

  const handleSignUp = (userIdParam, usernameParam) => {
    setIsLoggedIn(true);
    setUserId(userIdParam);
    setUsername(usernameParam);
    localStorage.setItem('userId', userIdParam);
    localStorage.setItem('username', usernameParam);
  };

  return (
    <Router>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/car" render={(props) => <CarPage {...props} userId={userId} username={username} />} />
          <Route path="/login" render={(props) => isLoggedIn ? <Redirect to="/" /> : <Login {...props} onLogin={handleLogin} />} />
          <Route path="/signup" render={(props) => isLoggedIn ? <Redirect to="/" /> : <SignUp {...props} onSignUp={handleSignUp} />} />
          <Route path="/login-success" render={(props) => isLoggedIn ? <SuccessfulLogin {...props} /> : <Redirect to="/login" />} />
          <Route path="/user-account" render={(props) => <UserAccount {...props} isLoggedIn={isLoggedIn} onLogout={handleLogout} userId={userId} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

