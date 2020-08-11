/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Box, Button, Link } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const AddListingButton = (props) => {
  const { url } = useRouteMatch();

  if (url === '/add') {
    return null;
  }

  return (
    <Box {...props} clone>
      <Button
        color="primary"
        endIcon={<ChevronRightIcon />}
        variant="contained"
        width={1}
      >
        <Link component={RouterLink} to="/add" color="inherit" underline="none">
          Add Listing
        </Link>
      </Button>
    </Box>
  );
};

export default AddListingButton;
