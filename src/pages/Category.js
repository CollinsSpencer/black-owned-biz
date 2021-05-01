import React from 'react';
import { Container, Grid } from '@material-ui/core';

import { useGetBusinesses } from '../api';
import { BadRoutePage, BusinessInfoCard, DiscoveryPage, Loading } from '../components';
import { categories } from '../helpers/constants';

const Category = () => {
  const { data: businesses, isLoading, state, city, category } = useGetBusinesses();

  const businessList = businesses
    ?.filter((b) => b.city_key.includes(city.key))
    .filter((b) => b.category_key === category.key)
    .sort((a, b) => (a.name < b.name ? -1 : 1));

  return categories[category.key] ? (
    <DiscoveryPage
      heading={categories[category.key].name}
      subtitle={categories[category.key].description}
      title={`Black-Owned ${categories[category.key].name} In ${city.display}, ${state.display}`}
    >
      <Container maxWidth="md">
        {isLoading ? (
          <Loading />
        ) : (
          <Grid container spacing={8}>
            {businessList.map((business) => (
              <Grid item key={business.id} xs={12} md={6}>
                <BusinessInfoCard business={business} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </DiscoveryPage>
  ) : (
    <BadRoutePage
      title={
        <>
          Category <code>{category.display}</code> not found
        </>
      }
    />
  );
};

export default Category;
