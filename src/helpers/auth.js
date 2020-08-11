import { useContext } from 'react';

import AuthContext from '../services/authContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
