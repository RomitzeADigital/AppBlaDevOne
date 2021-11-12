import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import { IndexScreen } from '../components/main/IndexScreen';
import { RegisterScreeen } from '../components/Auth/RegisterScreeen';
import { ForgotPasswordScreen } from '../components/Auth/ForgotPasswordScreen';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={IndexScreen} exact />
        <Route path='/auth/register' component={RegisterScreeen} exact />
        <Route path='/auth/forgot-password' component={ForgotPasswordScreen} exact />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};
