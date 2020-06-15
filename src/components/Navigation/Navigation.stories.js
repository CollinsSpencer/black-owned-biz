import React from 'react';
import { Navigation } from './index';

export default { title: 'Components/Navigation' };

export const Default = () => <Navigation location={{}} />;
export const State = () => <Navigation location={{ state: 'NE' }} />;
export const StateAndCity = () => (
  <Navigation location={{ state: 'NE', city: 'Lincoln' }} />
);
export const StateCityAndCategory = () => (
  <Navigation
    location={{ state: 'NE', city: 'Lincoln', category: 'Food and Drink' }}
  />
);
