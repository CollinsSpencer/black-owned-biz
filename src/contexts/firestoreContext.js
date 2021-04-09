import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import 'firebase/firestore';
import { useFirebase } from './firebaseContext';

export const FirestoreContext = createContext();
export const useFirestore = () => useContext(FirestoreContext);

export const FirestoreProvider = ({ children }) => {
  const firebase = useFirebase();

  const firestore = firebase.firestore();

  if (window.location.hostname === 'localhost') {
    firestore.settings({
      host: 'localhost:8080',
      ssl: false,
    });
  }

  const value = {
    firestore,
    timestamp: firebase.firestore.Timestamp,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
};
FirestoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
