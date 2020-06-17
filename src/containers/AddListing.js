import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  AddListingForm,
  AddListingFormSubmittedDialog,
  Page,
} from '../components';
import { useAddBusiness } from '../helpers/db';

const businessInitialState = {
  address: '',
  category: null,
  city: '',
  description: '',
  email: '',
  facebook: '',
  name: '',
  phone: '',
  state: null,
  website: '',
};

export const AddListing = () => {
  const { addBusiness, loading } = useAddBusiness();
  const [business, setBusiness] = useState(businessInitialState);
  const [submitted, setSubmitted] = useState(false);

  const saveBusiness = () => {
    const businessInfo = {
      ...business,
      state: business.state.abbreviation,
      category: business.category.key,
    };
    addBusiness(businessInfo);
  };

  const handleSubmit = () => {
    saveBusiness();
    setSubmitted(true);
  };

  const resetForm = () => {
    setBusiness(businessInitialState);
    setSubmitted(false);
  };

  const handleChange = (key) => (event) =>
    setBusiness({ ...business, [key]: event.target.value.trim() });
  const handleAutocompleteChange = (key) => (event, newValue) =>
    setBusiness({ ...business, [key]: newValue });

  return (
    <Page>
      <Grid container justify='center'>
        <Grid item xs={12} md={8}>
          {submitted ? (
            <AddListingFormSubmittedDialog
              resetForm={resetForm}
              {...business}
            />
          ) : (
            <AddListingForm
              handleChange={handleChange}
              handleAutocompleteChange={handleAutocompleteChange}
              handleSubmit={handleSubmit}
              loading={loading}
              {...business}
            />
          )}
        </Grid>
      </Grid>
    </Page>
  );
};
