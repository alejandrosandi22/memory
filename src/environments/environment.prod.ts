export const environment = {
  production: true
};

import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "3",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);
