import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, uiConfig } from '../helpers/auth';
import { Page } from '../components';

export const SignIn = () => {
  return (
    <Page>
      <h2>Sign In to Add a Listing or Verify Black-Owned Businesses</h2>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Page>
  );
};
