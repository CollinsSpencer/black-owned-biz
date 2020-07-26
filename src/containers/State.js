import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useBusinessesInState } from '../helpers/db';
import { Page } from '../components';

export const State = () => {
  const { state } = useParams();
  let { url } = useRouteMatch();
  const [cities, setCities] = useState([]);
  const { businesses, loading } = useBusinessesInState(state);

  useEffect(() => {
    if (!loading) {
      setCities([...new Set(businesses.map((r) => r.city_key))]);
    }
  }, [businesses, loading]);

  const CitiesList =
    cities.length > 0 ? (
      cities.map((city) => (
        <div>
          <Link to={`${url}/${city}`}>{city}</Link>
        </div>
      ))
    ) : loading ? (
      <div>Loading...</div>
    ) : (
      <div>
        No cities with black-owned businesses in this state have been added to
        the registry.
      </div>
    );

  return <Page>{CitiesList}</Page>;
};
