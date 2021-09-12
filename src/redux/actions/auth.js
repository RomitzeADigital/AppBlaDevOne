import { firebase, googleAuthProvider } from '../../firabase/firebaseConfig';

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then((userCredencial) => {
      console.log(userCredencial);
    });
  };
};
