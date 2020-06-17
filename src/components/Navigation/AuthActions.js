import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, ListItem, ListItemText } from '@material-ui/core';
import { useAuth } from '../../helpers/auth';
import { ListItemLink } from './ListItemLink';

export const AuthActionsButton = () => {
  const { signout, user } = useAuth();

  if (!!user) {
    return (
      <Button onClick={() => signout()} underline='none'>
        Sign-out
      </Button>
    );
  } else {
    return (
      <Button
        component={RouterLink}
        to={`/signin`}
        color='inherit'
        underline='none'
      >
        Sign in
      </Button>
    );
  }
};

export const AuthActionsListItem = () => {
  const { signout, user } = useAuth();

  if (!!user) {
    return (
      <ListItem button onClick={() => signout()}>
        <ListItemText primary='Sign out' />
      </ListItem>
    );
  } else {
    return <ListItemLink to='/signin' primary='Sign in' />;
  }
};
