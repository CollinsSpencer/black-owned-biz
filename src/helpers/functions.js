import { useCallback, useEffect, useState, useMemo } from 'react';
import { useFirestore, useFunctions } from '../contexts';
import {
  categoryToDisplayName,
  stateToDisplayName,
  toDisplayName,
  toKeyValue,
} from './utils';

export const useBusinesses = (state, city, category) => {
  const { functions } = useFunctions();
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        setLoading(true);

        const payload = {};
        if (state) payload.state = state;
        if (city) payload.city = state;
        if (category) payload.category = category;

        const getBusinesses = functions.httpsCallable('getBusinesses');
        const businessesList = (
          await getBusinesses({
            state,
            city,
            category,
          })
        ).data;

        setBusinesses(businessesList);
        setLoading(false);
      }
    };
    fetchData();
  }, [functions, state, city, category]);
  return { loading, businesses };
};

export const useAddBusiness = () => {
  const { functions } = useFunctions();
  const { timestamp } = useFirestore();
  const [loading, setLoading] = useState(false);
  const addBusiness = useCallback(
    async (business) => {
      if (business) {
        setLoading(true);
        // name, description, address, city, state, phone, email, facebook, website, category
        const payload = {
          category: categoryToDisplayName(business.category),
          category_key: toKeyValue(business.category),
          city: toDisplayName(business.city),
          city_key: toKeyValue(business.city),
          created: timestamp.now(),
          lastUpdated: timestamp.now(),
          state: stateToDisplayName(business.state),
          state_key: business.state.toLowerCase(),

          ...business,
        };

        const addBusinessFunc = functions.httpsCallable('addBusiness');
        // TODO: Would like to not have to disable this
        // eslint-disable-next-line no-param-reassign
        business = (
          await addBusinessFunc({
            business: payload,
          })
        ).data;

        setLoading(false);
      }
    },
    [functions, timestamp],
  );
  return useMemo(() => ({ loading, addBusiness }), [loading, addBusiness]);
};
