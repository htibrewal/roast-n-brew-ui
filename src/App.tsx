import React from 'react';
import './App.scss';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/login';
import { Redirect, Route, Switch } from 'react-router-dom';
import SetupProfile from './components/setup-profile/setup-profile';
import PrivateRoutes from './routers/PrivateRoutes';
import PublicRoutes from './routers/PublicRoutes';

function App() {
  return (
    <Switch>
      <PrivateRoutes path="/dashboard" component={Dashboard} />

      <PrivateRoutes path="/setup-account" component={SetupProfile} />

      <PublicRoutes exact path="/login" component={Login} />

      {/*<PublicRoutes path="/google-login" component={GoogleLoginProgress} />*/}

      <Route render={() => <Redirect to='/dashboard' />} />
    </Switch>
  );
}

export default App;
