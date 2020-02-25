import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import ReactForm from './components/react-form/ReactForm';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ProductPage} />
      <Route path="/checkout" component={CheckoutPage} />
      <Route path="/form" component={ReactForm} />
    </Switch>
  );
}
