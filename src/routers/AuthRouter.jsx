import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/Auth/LoginScreen';
import { RegisterScreeen } from '../components/Auth/RegisterScreeen';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path='/auth/login' component={LoginScreen} exact />
        <Route path='/auth/register' component={RegisterScreeen} exact />
        <Redirect to='/auth/login' />
      </Switch>
    </div>
  );
};
