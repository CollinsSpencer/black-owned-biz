import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Button, Link, Box } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../helpers/auth';

export const AuthActions = () => {
  const { signout, user } = useAuth();
  const { url } = useRouteMatch();

  if (url === '/signin') {
    return null;
  }

  if (!!user) {
    return (
      <Box ml={2}>
        <Button onClick={() => signout()} underline='none'>
          Sign-out
        </Button>
      </Box>
    );
  } else {
    return (
      <Box ml={2}>
        <Button color='inherit' startIcon={<AccountCircleIcon />}>
          <Link
            component={RouterLink}
            to={`/signin`}
            color='inherit'
            underline='none'
          >
            Sign in
          </Link>
        </Button>
      </Box>
    );
  }
};
