import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';
import { auth, useAuthenticated } from '../helpers/auth';

export const AuthActions = () => {
  const { authenticated } = useAuthenticated();

  if (authenticated) {
    return (
      <Button onClick={() => auth.signOut()} underline='none'>
        Sign-out
      </Button>
    );
  } else {
    return (
      <Button color='inherit'>
        <Link
          component={RouterLink}
          to={`/signin`}
          color='inherit'
          underline='none'
        >
          Sign in
        </Link>
      </Button>
    );
  }
};
