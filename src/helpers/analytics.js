import { useContext } from 'react';

import AnalyticsContext from '../services/analyticsContext';

const useAnalytics = () => {
  return useContext(AnalyticsContext);
};

export default useAnalytics;
