import React from 'react';
import { UnitedStatesMap } from './index';

export default { title: 'Components' };

export const UnitedStatesMapDemo = () => {
  const mapHandler = (event) => {
    const state = event.target.dataset.name;
    alert(state);
  };
  return <UnitedStatesMap onClick={mapHandler} />;
};
