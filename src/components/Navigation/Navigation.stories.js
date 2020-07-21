import React from 'react';
import Navigation from '.';

export default { title: 'Components/Navigation' };

export const Default = () => <Navigation />;
export const State = () => <Navigation state="NE" />;
export const StateAndCity = () => <Navigation state="NE" city="Lincoln" />;
export const StateCityAndCategory = () => (
  <Navigation state="NE" city="Lincoln" category="food_and_drink" />
);
