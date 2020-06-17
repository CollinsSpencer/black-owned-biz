import React, { useState } from 'react';
import {
  Typography,
  Box,
  CircularProgress,
  Button,
  Grid,
  Select,
  InputLabel,
  TextField,
  MenuItem,
  Link,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link as RouterLink } from 'react-router-dom';
import { Page } from '../components';
import { categories, states } from '../helpers/constants';
import { useAddBusiness } from '../helpers/db';
import { toKeyValue } from '../helpers/utils';

export const AddListing = () => {
  const { addBusiness, loading } = useAddBusiness();
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState();
  const [website, setWebsite] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const saveBusiness = () => {
    const business = {
      address,
      category,
      city,
      description,
      email,
      facebook,
      name,
      phone,
      state: state.abbreviation,
      website,
    };
    addBusiness(business);
  };

  const handleSubmit = () => {
    saveBusiness();

    setSubmitted(true);
  };

  const resetForm = () => {
    setAddress('');
    setCategory('');
    setCity('');
    setDescription('');
    setEmail('');
    setFacebook('');
    setName('');
    setPhone('');
    setState(null);
    setWebsite('');
    setSubmitted(false);
  };

  const AddListingForm = () => (
    <>
      <Box mt={12} mb={6}>
        <Typography variant='h2'>Add a Listing</Typography>
        <Typography variant='subtitle1'>
          Share information about a black-owned business, service, or nonprofit.
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Business Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Description'
            onChange={(event) => setDescription(event.target.value)}
            value={description}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            helperText='e.g. "123 Sunny Lane" or "Food Truck"'
            label='Location (Address Preferred)'
            onChange={(event) => setAddress(event.target.value)}
            value={address}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='City'
            onChange={(event) => setCity(event.target.value)}
            value={city}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            autoHighlight
            id='state-combo-box'
            options={states}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => setState(newValue)}
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
                label='State'
                variant='outlined'
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Phone'
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Facebook URL'
            onChange={(event) => setFacebook(event.target.value)}
            value={facebook}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Website URL'
            onChange={(event) => setWebsite(event.target.value)}
            value={website}
            variant='outlined'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id='category-select'>Category</InputLabel>
          <Select
            fullWidth
            id='category-select'
            label='Category'
            labelId='category-select'
            onChange={(event) => setCategory(event.target.value)}
            value={category}
            variant='outlined'
          >
            {categories &&
              Object.values(categories).map((cat) => (
                <MenuItem value={cat.key} key={cat.key}>
                  {cat.name}
                </MenuItem>
              ))}
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            onClick={handleSubmit}
            variant='contained'
            color='primary'
            disabled={loading}
          >
            {loading && (
              <Box display='flex' mr={2}>
                <CircularProgress size='1.5rem' />
              </Box>
            )}
            Add Listing
          </Button>
        </Grid>
      </Grid>
    </>
  );

  const FormSubmittedDialog = () => {
    const newListingPath = `/${state.abbreviation}/${toKeyValue(
      city
    )}/${category}`;
    return (
      <>
        <Box mt={12}>
          <Typography variant='h2'>Thank you!</Typography>
          <Typography variant='subtitle1'>
            Your listing has been submitted and will be reviewed shortly.
          </Typography>
        </Box>
        <Box mt={6}>
          <Typography>
            After being approved, the listing will be available at{' '}
            <Link component={RouterLink} to={newListingPath}>
              {`${window.location.host}/${newListingPath}`}
            </Link>
            .
          </Typography>
        </Box>
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

  return (
    <Page>
      <Grid container justify='center'>
        <Grid item xs={12} md={8}>
          {submitted ? <FormSubmittedDialog /> : <AddListingForm />}
        </Grid>
      </Grid>
    </Page>
  );
};
