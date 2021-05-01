import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useFunctions } from '../contexts';
import { categoryToDisplayName, cityToDisplayName, stateToDisplayName } from '../helpers/utils';

export const useGetBusinesses = () => {
  const { functions } = useFunctions();
  const { stateParam, cityParam, categoryParam } = useParams();
  const [city, setCity] = useState(
    cityParam
      ? {
          key: cityParam.toLowerCase(),
          display: cityToDisplayName(cityParam),
        }
      : null,
  );

  // eslint-disable-next-line no-unused-vars
  const getBusinesses = async (stateKey) => {
    const { data } = await functions.httpsCallable('getBusinesses')({
      state: stateKey?.toLowerCase(),
    });
    return data;
  };

  const query = useQuery(['state', stateParam?.toLowerCase()], () => getBusinesses(stateParam), {
    enabled: !!stateParam,
    refetchOnMount: false,
  });

  const state = stateParam
    ? {
        key: stateParam.toLowerCase(),
        display: stateToDisplayName(stateParam),
      }
    : null;

  useEffect(() => {
    if (cityParam)
      setCity({
        key: cityParam.toLowerCase(),
        display: cityToDisplayName(cityParam, query.data),
      });
  }, [cityParam, query.data]);

  const category = categoryParam
    ? {
        key: categoryParam.toLowerCase(),
        display: categoryToDisplayName(categoryParam),
      }
    : null;

  return {
    ...query,
    state,
    city,
    category,
  };
};
