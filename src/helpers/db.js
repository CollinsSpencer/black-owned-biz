import { useCallback, useEffect, useState, useMemo } from 'react';
import { firebase } from '../services/firebase';
import { toKeyValue } from './utils';

const db = firebase.firestore();
if (window.location.hostname === 'localhost') {
  db.settings({
    host: 'localhost:8080',
    ssl: false,
  });
}
const timestamp = firebase.firestore.Timestamp;

export const useBusinessesInState = (state) => {
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state) {
        setLoading(true);
        await db
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() }))
            );
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [state]);
  return { loading, businesses };
};

export const useBusinessesInStateAndCity = (state, city) => {
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  console.log(state, city, toKeyValue(state), toKeyValue(city));

  useEffect(() => {
    const fetchData = async () => {
      if (state && city) {
        setLoading(true);
        await db
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .where('city_key', '==', toKeyValue(city))
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() }))
            );
            setLoading(false);
          });
      }
    };
    fetchData();
  }, [state, city]);
  return { loading, businesses };
};

export const useBusinessesInStateCityAndCategory = (state, city, category) => {
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (state && city) {
        setLoading(true);
        await db
          .collection('businesses')
          .where('state_key', '==', state.toLowerCase())
          .where('city_key', '==', toKeyValue(city))
          .where('category_key', '==', toKeyValue(category))
          .get()
          .then((snapshot) => {
            setBusinesses(
              snapshot.docs.map((x) => ({ id: x.id, ...x.data() }))
            );
            setLoading(false);
          });
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
        category_key: toKeyValue(business.category),
        city_key: toKeyValue(business.city),
        created: timestamp.now(),
        lastUpdated: timestamp.now(),
        state_key: toKeyValue(business.state),
        ...business,
      };
      await db
        .collection('businesses')
        .add(payload)
        .then(() => setLoading(false));
    }
  }, []);
  return useMemo(() => ({ loading, addBusiness }), [loading, addBusiness]);
};

export const useBulkUpdateCategory = () => {
  const [loading, setLoading] = useState(false);
  const bulkUpdateCategory = useCallback(
    (oldCategoryKey, newCategoryKey, newCategory) => {
      const sendData = async () => {
        if (oldCategoryKey && newCategoryKey && newCategory) {
          setLoading(true);
          // see https://firebase.google.com/docs/firestore/quotas#writes_and_transactions
          const writeBatchLimit = 500;
          var batch = db.batch();
          db.collection('businesses')
            .where('category_key', '==', toKeyValue(oldCategoryKey))
            .limit(writeBatchLimit)
            .get()
            .then((snapshot) => {
              snapshot.docs.forEach((doc) =>
                batch.update(doc.ref, {
                  category_key: toKeyValue(newCategoryKey),
                  category: newCategory,
                })
              );
              batch.commit().then(() => setLoading(false));
            });
        }
      };
      sendData();
    },
    []
  );
  return useMemo(() => ({ loading, bulkUpdateCategory }), [
    loading,
    bulkUpdateCategory,
  ]);
};
