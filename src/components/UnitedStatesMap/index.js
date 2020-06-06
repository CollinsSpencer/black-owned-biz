import React from 'react';
import USAMap from 'react-usa-map';
import './style.css';

export const UnitedStatesMap = ({ onClick }) => {
  return <USAMap onClick={onClick} />;
};
