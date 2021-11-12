import Swal from 'sweetalert2';
import { firebase, googleAuthProvider, facebookAuthProvider, db } from '../../firabase/firebaseConfig';

import { types } from '../types/types';

export const loginUser = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName },
});

export const userSave = (data) => ({
  type: types.user,
  payload: data,
});

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(async ({ user }) => {
      const user_collection = await db.collection('users').doc(`${user.uid}`);
      user_collection.get().then(async (doc) => {
        const data_user = {
          uid: user.uid,
          name: user.displayName,
          data_init: new Date(),
        };
        if (doc.exists) {
          dispatch(loginUser(user.uid, user.displayName));
          dispatch(userSave(doc.data()));
        } else {
          await db.collection('users').doc(`${user.uid}`).set(data_user);
          dispatch(loginUser(user.uid, user.displayName));
          dispatch(userSave(data_user));
        }
      });
    });
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebookAuthProvider).then(async ({ user }) => {
      const user_collection = await db.collection('users').doc(`${user.uid}`);
      user_collection.get().then(async (doc) => {
        const data_user = {
          uid: user.uid,
          name: user.displayName,
          data_init: new Date(),
        };
        if (doc.exists) {
          dispatch(loginUser(user.uid, user.displayName));
          dispatch(userSave(doc.data()));
        } else {
          await db.collection('users').doc(`${user.uid}`).set(data_user);
          dispatch(loginUser(user.uid, user.displayName));
          dispatch(userSave(data_user));
        }
      });
    });
  };
};

export const startLoginEmailPassword = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(async ({ user }) => {
    const user_collection = await db.collection('users').doc(`${user.uid}`);
    user_collection.get().then(async (doc) => {
      const data_user = {
        uid: user.uid,
        name: user.displayName,
        data_init: new Date(),
      };
      if (doc.exists) {
        dispatch(loginUser(user.uid, user.displayName));
        dispatch(userSave(doc.data()));
      } else {
        await db.collection('users').doc(`${user.uid}`).set(data_user);
        dispatch(loginUser(user.uid, user.displayName));
        dispatch(userSave(data_user));
      }
    });
  });
};

export const starRegisterWithEmailPasswordName = (email, password, name, listContrie) => {
  return (dispatch) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
        await user.sendEmailVerification();

        await db.collection('users').doc(`${user.uid}`).set({
          uid: user.uid,
          name,
          email,
          listContrie,
        });

        Swal.fire('Revise su correo', `Estimado ${name}, le pedimos verificar su correo electrínico para verificar su cuenta. No olvides checar tú spam`, 'success');
        dispatch({
          type: types.redirectIndex,
          payload: true,
        });
      });

    } catch (err) {
      console.error(err);
    };
  };
};

export const resetPassword = (email) => {
  return (dispatch) => {
    try {
      firebase.auth().sendPasswordResetEmail(email).then((resp) => {
        console.log(resp);
        Swal.fire('Revise su correo', `Revise su correo: ${email}, le hemos mando la url para restablecer su contraseña. No olvides checar tú spam`, 'success');

        dispatch({
          type: types.redirectIndexToReset,
          payload: true,
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeRedirectIndex = () => {
  return (dispatch) => {
    dispatch({
      type: types.redirectIndex,
      payload: false,
    });
  };
};

export const removeRedirectIndexReset = () => {
  return (dispatch) => {
    dispatch({
      type: types.redirectIndexToReset,
      payload: false,
    });
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};
