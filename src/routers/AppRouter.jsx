import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { IndexScreen } from '../components/main/IndexScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={AuthRouter} />
          <Route path='/' exact component={IndexScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
