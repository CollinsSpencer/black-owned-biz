import { useContext } from 'react';
import { AnalyticsContext } from '../services/analyticsContext';

export const useAnalytics = () => {
  return useContext(AnalyticsContext);
};
