export const environment = {
  production: true
};

import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCIq-2Rxtx1yyPtJFk5KCjtfyRIUaNitJQ",
  authDomain: "memory-4c69e.firebaseapp.com",
  projectId: "memory-4c69e",
  storageBucket: "memory-4c69e.appspot.com",
  messagingSenderId: "509042859782",
  appId: "1:509042859782:web:6a3555f02d5ff04c240887"

};

firebase.initializeApp(firebaseConfig);
