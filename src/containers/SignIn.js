import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../helpers/auth';

export const SignIn = () => {
  return (
    <div>
      <h2>Sign In to Add a Listing or Verify Black-Owned Businesses</h2>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};
