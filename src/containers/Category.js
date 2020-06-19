import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessesInStateCityAndCategory } from '../helpers/db';
import { Page, BusinessInfoCard } from '../components';
import { Box } from '@material-ui/core';

export const Category = () => {
  const { state, city, category } = useParams();
  const { businesses } = useBusinessesInStateCityAndCategory(
    state,
    city,
    category
  );

  const BusinessesList = businesses.map((business) => (
    <Box m={4}>
      <BusinessInfoCard business={business} />
    </Box>
  ));

  return <Page>{BusinessesList}</Page>;
};
