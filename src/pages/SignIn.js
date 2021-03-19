import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Box, Typography } from '@material-ui/core';

import { uiConfig } from '../helpers/firebaseConfig';
import { Page } from '../components';
import { useAuth } from '../contexts';

const SignIn = () => {
  const { auth } = useAuth();

  return (
    <Page>
      <Box display="flex" justifyContent="center" mt={12} mb={3}>
        <Typography variant="h2">Sign In</Typography>
      </Box>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Page>
  );
};

export default SignIn;
