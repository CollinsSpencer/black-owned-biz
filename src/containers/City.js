import React from 'react';
import { useParams } from 'react-router-dom';

export const City = () => {
  const { state, city } = useParams();

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>
      <h2>City</h2>
      <div>{city}</div>
    </div>
  );
};
