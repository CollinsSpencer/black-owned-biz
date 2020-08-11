import React from 'react';
import PropTypes from 'prop-types';
import USAMap from 'react-usa-map';

import './style.css';

const UnitedStatesMap = ({ onClick }) => {
  return <USAMap onClick={onClick} />;
};

UnitedStatesMap.propTypes = {
  onClick: PropTypes.func,
};
UnitedStatesMap.defaultProps = {
  onClick: () => {},
};

export default UnitedStatesMap;
