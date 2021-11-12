import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomeUserScreen } from '../components/user/HomeUserScreen';

export const UserLoginRouter = () => {
  return (
    <div>
      <Switch>
        <Route path='/home' component={HomeUserScreen} exact />
        <Redirect to='/home' />
      </Switch>
    </div>
  );
};
