import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AnalyticsProvider } from './analyticsContext';
import { AuthProvider } from './authContext';
import { FirebaseProvider } from './firebaseContext';
import { FirestoreProvider } from './firestoreContext';
import { FunctionsProvider } from './functionsContext';

const queryClient = new QueryClient();

const AppContextProvider = ({ children }) => (
  <FirebaseProvider>
    <AnalyticsProvider>
      <AuthProvider>
        <FirestoreProvider>
          <FunctionsProvider>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </FunctionsProvider>
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
