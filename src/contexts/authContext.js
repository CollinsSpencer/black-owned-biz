import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import 'firebase/auth';
import { useFirebase } from './firebaseContext';

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const firebase = useFirebase();

  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
      } else {
        setUser(false);
      }
      setIsAuthLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [firebase]);

  const auth = {
    isAuthLoading,
    signout,
    user,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
