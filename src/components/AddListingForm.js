/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { categories, states } from '../helpers/constants';

const AddListingForm = ({
  address,
  category,
  city,
  description,
  email,
  facebook,
  handleAutocompleteChange,
  handleChange,
  handleSubmit,
  loading,
  name,
  phone,
  state,
  website,
}) => (
  <>
    <Box mt={12} mb={6}>
      <Typography variant="h2">Add a Listing</Typography>
      <Typography variant="subtitle1">
        Share information about a Black-owned business, service, or nonprofit.
      </Typography>
    </Box>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Business Name"
          name="name"
          onChange={handleChange('name')}
          value={name}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Description"
          onChange={handleChange('description')}
          value={description}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          helperText='e.g. "123 Sunny Lane" or "Food Truck"'
          label="Location (Address Preferred)"
          onChange={handleChange('address')}
          value={address}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="City"
          onChange={handleChange('city')}
          value={city}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          autoHighlight
          id="state-combo-box"
          options={states}
          getOptionLabel={(option) => option.name}
          onChange={handleAutocompleteChange('state')}
          value={state}
          renderOption={(option) => (
            <>
              <Box mr={2}>
                <code>{option.abbreviation}</code>
              </Box>
              {option.label} {option.name}
            </>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              label="State"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Phone"
          onChange={handleChange('phone')}
          value={phone}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Email"
          onChange={handleChange('email')}
          value={email}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Facebook URL"
          onChange={handleChange('facebook')}
          value={facebook}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Website URL"
          onChange={handleChange('website')}
          value={website}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Autocomplete
          autoHighlight
          getOptionLabel={(option) => option.name}
          id="category-combo-box"
          onChange={handleAutocompleteChange('category')}
          options={Object.values(categories)}
          value={category}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Category"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          color="primary"
          disabled={loading}
          onClick={handleSubmit}
          variant="contained"
        >
          {loading && (
            <Box display="flex" mr={2}>
              <CircularProgress size="1.5rem" />
            </Box>
          )}
          Add Listing
        </Button>
      </Grid>
    </Grid>
  </>
);

AddListingForm.propTypes = {
  address: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  handleAutocompleteChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default AddListingForm;
