import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Payment from '../pages/Checkout/Payment';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Payment} />
  </Switch>
)

export default Routes;