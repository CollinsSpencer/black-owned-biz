import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinesses } from '../helpers/functions';
import { DiscoveryPage, BusinessInfoCard } from '../components';
import { Grid } from '@material-ui/core';

import { BusinessInfoCard, DiscoveryPage } from '../components';
import { categories } from '../helpers/constants';
import { useBusinessesInStateCityAndCategory } from '../helpers/db';

export const Category = () => {
  const { state, city, category } = useParams();
  const { businesses } = useBusinesses(
    state,
    city,
    category,
  );
  const businessList = businesses.sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <DiscoveryPage
      title={categories[category].name}
      subtitle={categories[category].description}
    >
      <Grid container spacing={8}>
        {businessList.map((business) => (
          <Grid item key={business.id} xs={12} md={6}>
            <BusinessInfoCard business={business} />
          </Grid>
        ))}
      </Grid>
    </DiscoveryPage>
  );
};

export default Category;
