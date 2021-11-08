import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD680tczLMzPTWEXg32HQeL1niA9xNmwgE',
  authDomain: 'appbladevone.firebaseapp.com',
  projectId: 'appbladevone',
  storageBucket: 'appbladevone.appspot.com',
  messagingSenderId: '48824998538',
  appId: '1:48824998538:web:8fdca9209cba62129aeb73',
  measurementId: 'G-CS8CGQEKYL',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db,
  googleAuthProvider,
  facebookAuthProvider,
  firebase,
};
