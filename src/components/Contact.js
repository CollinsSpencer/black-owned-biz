import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@material-ui/core';

export const Contact = () => {
  return (
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
  );
};
