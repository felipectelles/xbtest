import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductPage} />
      <Route path="/checkout" component={CheckoutPage} />
    </Switch>
  );
}
