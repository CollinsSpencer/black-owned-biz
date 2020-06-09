import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
      <div>
        <Link to={`/add`}>Add a listing</Link>
      </div>
      <div>
        <Link to={`/signin`}>Sign in</Link>
      </div>
      <UnitedStatesMap onClick={mapHandler} />
    </div>
  );
};
