import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';
import { useAuth } from '../helpers/auth';

export const AuthActions = () => {
  const { auth, user } = useAuth();

  if (!!user) {
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
