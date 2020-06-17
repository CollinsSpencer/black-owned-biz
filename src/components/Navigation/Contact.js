import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ListItemLink } from './ListItemLink';

export const ContactButton = () => {
  return (
    <Button
      color='inherit'
      component={RouterLink}
      to={`/contact`}
      underline='none'
    >
      Contact
    </Button>
  );
};

export const ContactListItem = () => {
  return <ListItemLink to='/contact' primary='Contact' />;
};
