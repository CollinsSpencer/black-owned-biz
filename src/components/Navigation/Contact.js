import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import { ListItemLink } from './ListItemLink';

export const ContactButton = () => {
  const { url } = useRouteMatch();

  if (url === '/contact') {
    return null;
  }

  return (
    <Box ml={2}>
      <Button
        color='inherit'
        component={RouterLink}
        to={`/contact`}
        underline='none'
      >
        Contact
      </Button>
    </Box>
  );
};

export const ContactListItem = () => {
  const { url } = useRouteMatch();

  if (url === '/contact') {
    return null;
  }

  return <ListItemLink to='/contact' primary='Contact' />;
};
