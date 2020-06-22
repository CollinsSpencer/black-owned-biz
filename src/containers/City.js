import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessesInStateAndCity } from '../helpers/db';
import { CategorySelector, DiscoveryPage } from '../components';
import { toDisplayName } from '../helpers/utils';

export const City = () => {
  const { state, city } = useParams();
  const [categories, setCategories] = useState([]);
  const { businesses, loading } = useBusinessesInStateAndCity(state, city);

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
