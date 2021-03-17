import firebase from 'firebase/app';

// Configure FirebaseUI.
// Documentation: https://github.com/firebase/firebaseui-web#configuration
export const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: () => {
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
