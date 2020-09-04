import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Quiz from './pages/Quiz';
import Logon from './pages/Logon';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </BrowserRouter>
  );
}
