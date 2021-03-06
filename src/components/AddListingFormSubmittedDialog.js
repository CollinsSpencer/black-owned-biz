import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link, Button } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { toKeyValue } from '../helpers/utils';

const AddListingFormSubmittedDialog = ({
  category,
  city,
  name,
  resetForm,
  state,
}) => {
  const newListingPath =
    state && city && category
      ? `/${state.abbreviation}/${toKeyValue(city)}/${category.key}`
      : null;
  return (
    <>
      <Box mt={12}>
        <Typography variant="h2">Thank you!</Typography>
        <Typography variant="subtitle1">
          Your listing {name ? `for ${name.trim()} ` : ''}has been submitted and
          will be reviewed shortly.
        </Typography>
      </Box>
      {newListingPath && (
        <Box mt={6}>
          <Typography>
            After being approved, the listing will be available at{' '}
            <Link component={RouterLink} to={newListingPath}>
              {`${window.location.host}${newListingPath}`}
            </Link>
            .
          </Typography>
        </Box>
      )}
      <Box mt={6}>
        <Typography>
          <Button onClick={() => resetForm()} startIcon={<ChevronLeftIcon />}>
            Add another listing
          </Button>
        </Typography>
      </Box>
    </>
  );
};

AddListingFormSubmittedDialog.propTypes = {
  category: PropTypes.shape({
    key: PropTypes.string,
  }).isRequired,
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resetForm: PropTypes.func.isRequired,
  state: PropTypes.shape({
    abbreviation: PropTypes.string,
  }).isRequired,
};

export default AddListingFormSubmittedDialog;
