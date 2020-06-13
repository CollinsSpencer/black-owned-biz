import firebase from 'firebase/app';

// from .env.local file with the following format
/*
REACT_APP_API_KEY=XXXXxxxx
REACT_APP_AUTH_DOMAIN=xxxxXXXX.firebaseapp.com
REACT_APP_DATABASE_URL=https://xxxXXXX.firebaseio.com
REACT_APP_PROJECT_ID=xxxxXXXX
REACT_APP_STORAGE_BUCKET=xxxxXXXX.appspot.com
REACT_APP_MESSAGING_SENDER_ID=xxxxXXXX
REACT_APP_ADD_ID=X:XXXXxxxx:web:XXXXxxxx
REACT_APP_MEASUREMENT_ID=X-XXXXxxxx
*/
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ADD_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Configure FirebaseUI.
// Documentation: https://github.com/firebase/firebaseui-web#configuration
export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      return false;
    },
  },
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect will be handled elsewhere.
  // If callbacks.signInSuccessWithAuthResult is changed to return true, then redirect to /.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};
