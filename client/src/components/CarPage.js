import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CarList from './CarList';
import CarDetailPage from './CarDetailPage';

const CarPage = () => {
  return (
    <div>
      <h2>Car Page</h2>
      <Switch>
        <Route exact path="/car" component={CarList} />
        <Route path="/car/:id" component={CarDetailPage} />
      </Switch>
    </div>
  );
}

export default CarPage;
