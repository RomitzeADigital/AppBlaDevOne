import Swal from 'sweetalert2';
import { firebase, googleAuthProvider, facebookAuthProvider, db } from '../../firabase/firebaseConfig';

import { types } from '../types/types';

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then((userCredencial) => {
      console.log(userCredencial);
    });
  };
};

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebookAuthProvider).then((userCredencial) => {
      console.log(userCredencial);
    });
  };
};

export const starRegisterWithEmailPasswordName = (email, password, name, listContrie) => {
  return (dispatch) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
        await user.sendEmailVerification();

        await db.collection('users').add({
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
