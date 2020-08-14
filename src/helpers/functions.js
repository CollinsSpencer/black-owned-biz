import { useCallback, useEffect, useState, useMemo } from 'react';
import { firebase } from '../services/firebase';
import {
  categoryToDisplayName,
  stateToDisplayName,
  toDisplayName,
  toKeyValue,
} from './utils';

const funcs = firebase.functions();
const timestamp = firebase.firestore.Timestamp;

export const useBusinesses = (state, city, category) => {
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        setLoading(true);

        const paylod = {};
        if (state) paylod.state = state;
        if (city) paylod.city = state;
        if (category) paylod.category = category;

        const getBusinesses = funcs.httpsCallable('getBusinesses');
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
  }, [state, city, category]);
  return { loading, businesses };
};

export const useAddBusiness = () => {
  const [loading, setLoading] = useState(false);
  const addBusiness = useCallback(async (business) => {
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

      const addBusinessFunc = funcs.httpsCallable('addBusiness');
      // TODO: Would like to not have to disable this
      business = ( // eslint-disable-line no-param-reassign
        await addBusinessFunc({
          business: payload,
        })
      ).data;

      setLoading(false);
    }
  }, []);
  return useMemo(() => ({ loading, addBusiness }), [loading, addBusiness]);
};
