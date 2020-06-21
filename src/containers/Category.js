import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessesInStateCityAndCategory } from '../helpers/db';
import { Page, BusinessInfoCard } from '../components';
import { Grid, Typography } from '@material-ui/core';

export const Category = () => {
  const { state, city, category } = useParams();
  const { businesses } = useBusinessesInStateCityAndCategory(
    state,
    city,
    category
  );
  const businessList = businesses.sort((a, b) => (a.name > b.name ? 1 : -1));;

  return (
    <Page>
      <Grid container spacing={8}>
        <Grid item><Typography variant='h2'>Explore Restaurants</Typography></Grid>
        {businessList.map(business => (
          <Grid item key={business.id}><BusinessInfoCard business={business} /></Grid>
        ))}
      </Grid>
    </Page>
  );
};
