import React from 'react';
import { Container } from '@material-ui/core';

import { useGetBusinesses } from '../api';
import { BadRoutePage, CategorySelector, DiscoveryPage, Loading } from '../components';

const City = () => {
  const { data: businesses, isLoading, state, city } = useGetBusinesses();

  const categories = [
    ...new Set(businesses?.filter((b) => b.city_key.includes(city.key)).map((b) => b.category_key)),
  ].filter((c) => !!c);

  const heading = `Explore ${city.display}`;
  const subtitle = 'Check out Black-owned businesses near you';
  return categories.length > 0 ? (
    <DiscoveryPage heading={heading} subtitle={subtitle} title={`Black-Owned In ${city.display}, ${state.display}`}>
      <Container maxWidth="md">
        {isLoading ? <Loading /> : <CategorySelector availableCategories={categories} />}
      </Container>
    </DiscoveryPage>
  ) : (
    <BadRoutePage
      heading={<>No city named &ldquo;{city.display}&rdquo; found here.</>}
      subtitle={
        <>
          There might just not be any listings in the city.
          <br />
          <br />
          Think there should be?
          <br />
          You can add a listing to help someone else find a Black-owned organization.
        </>
      }
    />
  );
};

export default City;
