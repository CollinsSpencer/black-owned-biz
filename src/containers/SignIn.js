import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { uiConfig } from '../services/firebaseConfig';
import { Page } from '../components';

export const SignIn = () => {
  return (
    <Page>
      <h2>Sign In to Add a Listing or Verify Black-Owned Businesses</h2>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Page>
  );
};
