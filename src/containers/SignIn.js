import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Box, Typography } from '@material-ui/core';

import { firebase } from '../services/firebase';
import { uiConfig } from '../services/firebaseConfig';
import { Page } from '../components';

const SignIn = () => {
  return (
    <Page>
      <Box display="flex" justifyContent="center" mt={12} mb={3}>
        <Typography variant="h2">Sign In</Typography>
      </Box>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Page>
  );
};

export default SignIn;
