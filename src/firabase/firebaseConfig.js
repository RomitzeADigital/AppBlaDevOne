import firebase from 'firabase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD680tczLMzPTWEXg32HQeL1niA9xNmwgE",
  authDomain: "appbladevone.firebaseapp.com",
  projectId: "appbladevone",
  storageBucket: "appbladevone.appspot.com",
  messagingSenderId: "48824998538",
  appId: "1:48824998538:web:8fdca9209cba62129aeb73",
  measurementId: "G-CS8CGQEKYL"
};

firebase.initializeAPP(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}