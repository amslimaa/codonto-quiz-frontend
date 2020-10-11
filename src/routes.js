import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Quiz from './pages/Quiz';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}
