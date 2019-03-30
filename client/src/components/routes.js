import React from 'react';
import { Switch, Route } from 'react-router';
import Login from './login.jsx';
import Home from './home.jsx';
import Main from './main.jsx';

const Routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/main" component={Main} />
    <Route path="/" component={Home} />
  </Switch>
)

export default Routes;
