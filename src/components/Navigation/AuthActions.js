import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Box, Button, ListItem, ListItemText } from '@material-ui/core';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../helpers/auth';
// import { ListItemLink } from './ListItemLink';

export const AuthActionsButton = () => {
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
    return null;
    // <Box ml={2}>
    //   <Button color='inherit' startIcon={<AccountCircleIcon />}>
    //     <Link
    //       component={RouterLink}
    //       to={`/signin`}
    //       color='inherit'
    //       underline='none'
    //     >
    //       Sign in
    //     </Link>
    //   </Button>
    // </Box>
  }
};

export const AuthActionsListItem = () => {
  const { signout, user } = useAuth();
  const { url } = useRouteMatch();

  if (url === '/signin') {
    return null;
  }

  if (!!user) {
    return (
      <ListItem button onClick={() => signout()}>
        <ListItemText primary='Sign out' />
      </ListItem>
    );
  } else {
    return null;
    // return <ListItemLink to='/signin' primary='Sign in' />;
  }
};
