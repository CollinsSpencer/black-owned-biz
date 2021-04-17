import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';

import { firebaseConfig } from './firebaseConfig';
import AuthContext from './authContext';
import AnalyticsContext from './analyticsContext';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// adapted from https://usehooks.com/useAuth/
function useProvideAuth() {
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
  }, []);

  // Return the user object and auth methods
  return {
    isAuthLoading,
    signout,
    user,
  };
}

function useAnalytics() {
  const logEvent = (eventName) => {
    firebase.analytics().logEvent(eventName);
  };

  return { logEvent };
}

const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const AnalyticsProvider = ({ children }) => {
  const log = useAnalytics();
  return (
    <AnalyticsContext.Provider value={log}>
      {children}
    </AnalyticsContext.Provider>
  );
};
AnalyticsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { firebase, AuthProvider, AnalyticsProvider };
