import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase, db } from '../firabase/firebaseConfig';
// routes auth
import { AuthRouter } from './AuthRouter';
// routes user
import { UserLoginRouter } from './UserLoginRouter';
// route public validation
import { PublicRoute } from './PublicRoute';
// route private validation
import { PrivateRoute } from './PrivateRoute';
// actions
import { loginUser, userSave } from '../redux/actions/authActions';

export const AppRouter = () => {

  // use state
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  // dispatch
  const dispatch = useDispatch();
  // use effect
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(loginUser(user.uid, user.displayName));
        const user_collection = await db.collection('users').doc(`${user.uid}`);
        user_collection.get().then((doc) => {
          if (doc.exists) {
            dispatch(userSave(doc.data()));
          }
        });
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <h1>Espere .....</h1>
    );
  }
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute
            exact
            path='/home'
            component={UserLoginRouter}
            isAuthenticate={isLoggedIn}
          />
          <PublicRoute
            path='/'
            component={AuthRouter}
            isAuthenticate={isLoggedIn}
          />
          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
