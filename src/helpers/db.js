import { db, timestamp } from '../services/firebase';

if (window.location.hostname === 'localhost') {
  db.settings({
    host: 'localhost:8080',
    ssl: false,
  });
}

const businesses = db.collection('businesses');

export const saveBusiness = async (business) => {
  // name, description, address, city, state, facebook, category
  const payload = {
    category_key: business.category.toLowerCase(),
    city_key: business.city.toLowerCase(),
    created: timestamp.now(),
    lastUpdated: timestamp.now(),
    state_key: business.state.toLowerCase(),
    ...business,
  };
  return await businesses.add(payload);
};

export const getBusinessesInState = async (state) => {
  return await businesses
    .where('state_key', '==', state.toLowerCase())
    .get()
    .then((snapshot) => snapshot.docs.map((x) => ({ id: x.id, ...x.data() })));
};

export const getBusinessesInStateAndCity = async (state, city) => {
  return await businesses
    .where('state_key', '==', state.toLowerCase())
    .where('city_key', '==', city.toLowerCase())
    .get()
    .then((snapshot) => snapshot.docs.map((x) => ({ id: x.id, ...x.data() })));
};

export const getBusinessesInStateCityAndCategory = async (
  state,
  city,
  category
) => {
  return await businesses
    .where('state_key', '==', state.toLowerCase())
    .where('city_key', '==', city.toLowerCase())
    .where('category_key', '==', category.toLowerCase())
    .get()
    .then((snapshot) => snapshot.docs.map((x) => ({ id: x.id, ...x.data() })));
};
