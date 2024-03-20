import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CarList from './CarList';


const CarPage = () => {
  return (
    <div>
      <h2>Car Page</h2>
      <Switch>
        <Route exact path="/car" component={CarList} />
        {/* You can add other routes for specific car details if needed */}
      </Switch>
    </div>
  );
}

export default CarPage;
