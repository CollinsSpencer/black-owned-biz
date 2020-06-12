import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { getBusinessesInState } from '../helpers/db';

export const State = () => {
  const { state } = useParams();
  let { url } = useRouteMatch();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getBusinessesInState(state);
      setCities([...new Set(results.map((r) => r.city))]);
      setLoading(false);
    };

    fetchData();
  }, [state]);

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

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>

      <hr />

      {CitiesList}
    </div>
  );
};
