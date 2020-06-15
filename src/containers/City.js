import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBusinessesInStateAndCity } from '../helpers/db';
import { CategorySelector, Page } from '../components';
import { Box, Typography } from '@material-ui/core';

export const City = () => {
  const { state, city } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getBusinessesInStateAndCity(state, city);
      setCategories([...new Set(results.map((r) => r.category_key))]);
    };

    fetchData();
  }, [state, city]);

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
