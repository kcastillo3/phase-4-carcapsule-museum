import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CarPage from "./CarPage";
import LoginPage from "./LoginPage";

function App() {
return (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cars" component={CarPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </Router>
);
}

export default App;
