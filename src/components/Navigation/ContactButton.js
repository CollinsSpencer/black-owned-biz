import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Button, Link, Box } from '@material-ui/core';

export const ContactButton = () => {
  const { url } = useRouteMatch();

  if (url === '/contact') {
    return null;
  }

  return (
    <Box ml={2}>
      <Button color='inherit'>
        <Link
          component={RouterLink}
          to={`/contact`}
          color='inherit'
          underline='none'
        >
          Contact
        </Link>
      </Button>
    </Box>
  );
};
