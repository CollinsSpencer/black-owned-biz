import { useCallback, useState, useMemo } from 'react';

import { useFirestore } from '../contexts';
import { toKeyValue } from './utils';

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
