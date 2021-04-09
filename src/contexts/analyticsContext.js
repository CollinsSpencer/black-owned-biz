import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import 'firebase/analytics';
import { useFirebase } from './firebaseContext';

export const AnalyticsContext = createContext();
export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }) => {
  const firebase = useFirebase();

  firebase.analytics();

  const logEvent = (eventName) => {
    firebase.analytics().logEvent(eventName);
  };

  const log = { logEvent };
  return (
    <AnalyticsContext.Provider value={log}>
      {children}
    </AnalyticsContext.Provider>
  );
};
AnalyticsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
