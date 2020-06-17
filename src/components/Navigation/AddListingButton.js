import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Button, Link, Box } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const AddListingButton = (props) => {
  const { url } = useRouteMatch();

  if (url === '/add') {
    return null;
  }

  return (
    <Box {...props} clone>
      <Button
        variant='contained'
        color='primary'
        endIcon={<ChevronRightIcon />}
        width={1}
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
