import React from 'react';
import { useParams } from 'react-router-dom';
import { useBusinessesInStateCityAndCategory } from '../helpers/db';
import { Page } from '../components';

export const Category = () => {
  const { state, city, category } = useParams();
  const { businesses } = useBusinessesInStateCityAndCategory(
    state,
    city,
    category
  );

  const BusinessesList = businesses.map((business) => (
    <div>
      <h4>{business.name}</h4>
      <p>{business.description}</p>
      <div>{business.address}</div>
      <div>{business.phone}</div>
      <div>{business.email}</div>
      <a href={business.website}>{business.website}</a>
      <a href={business.facebook}>Facebook</a>
    </div>
  ));

  return <Page>{BusinessesList}</Page>;
};
