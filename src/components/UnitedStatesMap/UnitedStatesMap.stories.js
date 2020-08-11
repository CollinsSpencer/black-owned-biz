import React from 'react';
import UnitedStatesMap from '.';

export default { title: 'Components' };

export const UnitedStatesMapDemo = () => {
  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    // eslint-disable-next-line no-alert
    alert(state);
  };
  return <UnitedStatesMap onClick={mapHandler} />;
};
