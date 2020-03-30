import firebase from 'firebase/app';
import 'firebase/auth';

// Use actual config values from registered firbase app
var config = {
  apiKey: 'AIzaSyACtuZvM8aAfN_Gl0C_ZozDrJDKBxWu9BM',
  authDomain: 'dropent-91e6e.firebaseapp.com',
  databaseURL: 'https://dropent-91e6e.firebaseio.com',
  projectId: 'dropent-91e6e',
  storageBucket: 'dropent-91e6e.appspot.com',
  messagingSenderId: '132065478982',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
