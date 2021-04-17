import React from 'react';
import PropTypes from 'prop-types';

import { AnalyticsProvider } from './analyticsContext';
import { AuthProvider } from './authContext';
import { FirebaseProvider } from './firebaseContext';
import { FirestoreProvider } from './firestoreContext';
import { FunctionsProvider } from './functionsContext';

const AppContextProvider = ({ children }) => (
  <FirebaseProvider>
    <AnalyticsProvider>
      <AuthProvider>
        <FirestoreProvider>
          <FunctionsProvider>{children}</FunctionsProvider>
        </FirestoreProvider>
      </AuthProvider>
    </AnalyticsProvider>
  </FirebaseProvider>
);
AppContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppContextProvider;
export * from './analyticsContext';
export * from './authContext';
export * from './firebaseContext';
export * from './firestoreContext';
export * from './functionsContext';
