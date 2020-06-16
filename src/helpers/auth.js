import { useContext } from 'react';
import { AuthContext } from '../services/firebase';

export const useAuth = () => {
  return useContext(AuthContext);
};
