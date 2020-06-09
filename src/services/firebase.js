import firebase from 'firebase';
import { firebaseConfig, uiConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const timestamp = firebase.firestore.Timestamp;
export { uiConfig };
