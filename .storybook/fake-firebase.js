import React, { useEffect, useState } from 'react';
import { AuthContext } from '../src/services/authContext';
import { select, boolean } from '@storybook/addon-knobs';

export const FakeAuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

// adapted from https://usehooks.com/useAuth/
function useProvideAuth() {
  const options = {
    SignedOut: null,
    SignedIn: { username: 'Storybook User' },
  };
  const user = select('User', options, options.SignedOut);
  let isAuthLoading = boolean('Is Auth Loading?', true);

  const signout = () => {
    alert('You signed out!');
  };

  // Return the user object and auth methods
  return {
    isAuthLoading,
    signout,
    user,
  };
}
