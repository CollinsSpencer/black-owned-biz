import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Box, Typography } from '@material-ui/core';

import { uiConfig } from '../helpers/firebaseConfig';
import { Page } from '../components';
import { useAuth } from '../contexts';

const SignIn = () => {
  const { auth } = useAuth();

  return (
    <Page title="Sign In">
      <Box display="flex" justifyContent="center" my={12}>
        <Typography variant="h2">Sign In</Typography>
      </Box>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Page>
  );
};

export default SignIn;
