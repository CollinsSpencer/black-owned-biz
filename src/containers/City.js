import React, { useEffect, useState } from 'react';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { getBusinessesInStateAndCity } from '../helpers/db';

export const City = () => {
  const { state, city } = useParams();
  let { url } = useRouteMatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getBusinessesInStateAndCity(state, city);
      setCategories([...new Set(results.map((r) => r.category))]);
    };

    fetchData();
  }, [state, city]);

  const CategoriesList = categories.map((category) => (
    <div>
      <Link to={`${url}/${category}`}>{category}</Link>
    </div>
  ));

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>
      <h2>City</h2>
      <div>{city}</div>

      <hr />

      {CategoriesList}
    </div>
  );
};
