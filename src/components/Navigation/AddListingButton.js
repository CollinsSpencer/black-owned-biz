import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Button, Link, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const AddListingButton = () => {
  const { url } = useRouteMatch();

  if (url === '/add') {
    return null;
  }

  return (
    <Box ml={3}>
      <Button
        variant='contained'
        color='primary'
        endIcon={<ChevronRightIcon />}
      >
        <Link
          component={RouterLink}
          to={`/add`}
          color='inherit'
          underline='none'
        >
          Add Listing
        </Link>
      </Button>
    </Box>
  );
};
