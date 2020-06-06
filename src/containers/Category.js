import React from 'react';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const { state, city, category } = useParams();

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>
      <h2>City</h2>
      <div>{city}</div>
      <h2>Category</h2>
      <div>{category}</div>
    </div>
  );
};
