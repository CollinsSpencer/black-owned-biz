import React from 'react';
import { useParams } from 'react-router-dom';

export const State = () => {
  const { state } = useParams();

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>
    </div>
  );
};
