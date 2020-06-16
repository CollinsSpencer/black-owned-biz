import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { useBusinessesInStateAndCity } from '../helpers/db';
import { CategorySelector, Page } from '../components';

export const City = () => {
  const { state, city } = useParams();
  const [categories, setCategories] = useState([]);
  const { businesses, loading } = useBusinessesInStateAndCity(state, city);

  useEffect(() => {
    if (!loading) {
      setCategories([...new Set(businesses.map((r) => r.category_key))]);
    }
  }, [businesses, loading]);

  return (
    <Page>
      <Box my={12}>
        <Typography variant='h2' style={{ fontWeight: 'bold' }}>
          Discover
        </Typography>
        <Typography variant='h3'>
          Black-Owned Businesses in {city}, {state}
        </Typography>
      </Box>
      <CategorySelector availableCategories={categories} />
    </Page>
  );
};
