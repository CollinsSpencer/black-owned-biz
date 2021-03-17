import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import 'firebase/functions';
import { useFirebase } from './firebaseContext';

export const FunctionsContext = createContext();
export const useFunctions = () => useContext(FunctionsContext);

export const FunctionsProvider = ({ children }) => {
  const firebase = useFirebase();

  const functions = firebase.functions();

  if (window.location.hostname === 'localhost') {
    functions.useFunctionsEmulator('http://localhost:5001');
  }

  return (
    <FunctionsContext.Provider value={{ functions }}>
      {children}
    </FunctionsContext.Provider>
  );
};
FunctionsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
