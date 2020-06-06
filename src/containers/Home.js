import React from 'react';
import { useHistory } from 'react-router-dom';
import { UnitedStatesMap } from '../components';

export const Home = () => {
  const history = useHistory();

  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    history.push(`${state}`);
  };
  return (
    <div>
      <h2>Home</h2>
      <UnitedStatesMap onClick={mapHandler} />
    </div>
  );
};
