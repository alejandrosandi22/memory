// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDpxhHljVi-LZ57UM2GtighOrYNE1D-iqw",
  authDomain: "memory-eafa3.firebaseapp.com",
  projectId: "memory-eafa3",
  storageBucket: "memory-eafa3.appspot.com",
  messagingSenderId: "619899085616",
  appId: "1:619899085616:web:3d43cd941177d3a1711ef5"
};

firebase.initializeApp(firebaseConfig);

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
