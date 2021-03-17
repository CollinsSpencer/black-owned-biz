import { useCallback, useEffect, useState, useMemo } from 'react';

import { useFirestore } from '../contexts';
import {
  categoryToDisplayName,
  stateToDisplayName,
  toDisplayName,
  toKeyValue,
} from './utils';

export const useBusinessesInState = (state) => {
  const { firestore } = useFirestore();
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        setLoading(true);
        await firestore
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() })),
            );
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [firestore, state]);
  return { loading, businesses };
};

export const useBusinessesInStateAndCity = (state, city) => {
  const { firestore } = useFirestore();
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (state && city) {
        setLoading(true);
        await firestore
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .where('city_key', '==', toKeyValue(city))
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() })),
            );
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [firestore, state, city]);
  return { loading, businesses };
};

export const useBusinessesInStateCityAndCategory = (state, city, category) => {
  const { firestore } = useFirestore();
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state && city) {
        setLoading(true);
        await firestore
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .where('city_key', '==', toKeyValue(city))
          .where('category_key', '==', toKeyValue(category))
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() })),
            );
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [firestore, state, city, category]);
  return { loading, businesses };
};

export const useAddBusiness = () => {
  const { firestore, timestamp } = useFirestore();
  const [loading, setLoading] = useState(false);
  const addBusiness = useCallback(
    async (business) => {
      if (business) {
        setLoading(true);
        // name, description, address, city, state, phone, email, facebook, website, category
        const payload = {
          category_key: toKeyValue(business.category),
          category: categoryToDisplayName(business.category),
          city_key: toKeyValue(business.city),
          city: toDisplayName(business.city),
          created: timestamp.now(),
          lastUpdated: timestamp.now(),
          state_key: business.state.toLowerCase(),
          state: stateToDisplayName(business.state),

          ...business,
        };
        await firestore
          .collection('businesses')
          .add(payload)
          .then(() => setLoading(false));
      }
    },
    [firestore, timestamp],
  );
  return useMemo(() => ({ loading, addBusiness }), [loading, addBusiness]);
};

export const useBulkUpdateCategory = () => {
  const { firestore } = useFirestore();
  const [loading, setLoading] = useState(false);
  const bulkUpdateCategory = useCallback(
    (oldCategoryKey, newCategoryKey, newCategory) => {
      const sendData = async () => {
        if (oldCategoryKey && newCategoryKey && newCategory) {
          setLoading(true);
          // see https://firebase.google.com/docs/firestore/quotas#writes_and_transactions
          const writeBatchLimit = 500;
          const batch = firestore.batch();
          firestore
            .collection('businesses')
            .where('category_key', '==', toKeyValue(oldCategoryKey))
            .limit(writeBatchLimit)
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) =>
                batch.update(doc.ref, {
                  category_key: toKeyValue(newCategoryKey),
                  category: newCategory,
                }),
              );
              batch.commit().then(() => setLoading(false));
            });
        }
      };
      sendData();
    },
    [firestore],
  );
  return useMemo(() => ({ loading, bulkUpdateCategory }), [
    loading,
    bulkUpdateCategory,
  ]);
};
