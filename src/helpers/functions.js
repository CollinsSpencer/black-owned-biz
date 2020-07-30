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

                var paylod = {}
                if (state) paylod.state = state;
                if (city) paylod.city = state;
                if (category) paylod.category = category;

                var getBusinesses = funcs.httpsCallable('getBusinesses');
                var businessesList = (await getBusinesses({
                    state: state,
                    city: city,
                    category: category
                })
                ).data

                console.log(businessesList);

                setBusinesses(businessesList);
                setLoading(false)
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
            // await db
            //     .collection('businesses')
            //     .add(payload)
            //     .then(() => setLoading(false));
        }
    }, []);
    return useMemo(() => ({ loading, addBusiness }), [loading, addBusiness]);
};
