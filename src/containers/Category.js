import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBusinessesInStateCityAndCategory } from '../helpers/db';

export const Category = () => {
  const { state, city, category } = useParams();
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await getBusinessesInStateCityAndCategory(
        state,
        city,
        category
      );
      setBusinesses([...results]);
    };

    fetchData();
  }, [state, city, category]);

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

  return (
    <div>
      <h2>State</h2>
      <div>{state}</div>
      <h2>City</h2>
      <div>{city}</div>
      <h2>Category</h2>
      <div>{category}</div>

      <hr />

      {BusinessesList}
    </div>
  );
};
