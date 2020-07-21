import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';

import { useBusinessesInState } from '../helpers/db';
import { Page } from '../components';

const State = () => {
  const { state } = useParams();
  const { url } = useRouteMatch();
  const [cities, setCities] = useState([]);
  const { businesses, loading } = useBusinessesInState(state);

  useEffect(() => {
    if (!loading) {
      setCities([...new Set(businesses.map((r) => r.city_key))]);
    }
  }, [businesses, loading]);

  let CitiesList =
    cities.length > 0 ? (
      cities.map((city) => (
        <div>
          <Link to={`${url}/${city}`}>{city}</Link>
        </div>
      ))
    ) : (
      <div>
        No cities with black-owned businesses in this state have been added to
        the registry.
      </div>
    );
  if (loading) CitiesList = <div>Loading...</div>;

  return <Page>{CitiesList}</Page>;
};

export default State;
