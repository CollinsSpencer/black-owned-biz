import React from 'react';

import { AuthContext } from '../src/contexts';

const options = {
  signedOut: null,
  signedIn: { username: 'Storybook User' },
};

export const fakeAuthDecorator = (Story, context) => {
  const { isAuthLoading, user } = context.globals;

  const signout = () => {
    alert('You signed out!');
  };

  const auth = {
    isAuthLoading,
    user: user === 'admin' ? options.signedIn : options.signedOut,
    signout,
  };
  return (
    <AuthContext.Provider value={auth}>
      <Story {...context} />
    </AuthContext.Provider>
  );
};
