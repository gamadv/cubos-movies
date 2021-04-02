import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchHome from './pages/SearchHome';
import MovieDetail from './pages/MovieDetail';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/"  component={SearchHome} />
    <Route path="/movie/:id" component={MovieDetail} />
  </BrowserRouter>
);

export default Routes;
