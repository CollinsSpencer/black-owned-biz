import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBusinesses } from '../helpers/functions';
import { CategorySelector, DiscoveryPage } from '../components';
import { toDisplayName } from '../helpers/utils';

const City = () => {
  const { state, city } = useParams();
  const [categories, setCategories] = useState([]);
  const { businesses, loading } = useBusinesses(state, city, undefined);

  useEffect(() => {
    if (!loading) {
      setCategories([...new Set(businesses.map((r) => r.category_key))]);
    }
  }, [businesses, loading]);

  const title = `Explore ${toDisplayName(city)}`;
  const subtitle = 'Check out Black-owned businesses near you';
  return (
    <DiscoveryPage title={title} subtitle={subtitle}>
      <CategorySelector availableCategories={categories} />
    </DiscoveryPage>
  );
};

export default City;
