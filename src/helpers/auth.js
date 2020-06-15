import { useEffect, useState } from 'react';
import { auth, uiConfig } from '../services/firebase';

const useAuthenticated = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
    auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user);
      setLoading(false);
    })
  );

  return { authenticated, loading };
};

export { auth, uiConfig, useAuthenticated };
