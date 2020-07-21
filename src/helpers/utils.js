import { categories, states } from './constants';

export const toKeyValue = (phrase) => {
  return phrase
    .split(' ')
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
    .join('_');
};

export const toDisplayName = (key) => {
  return key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const stateToDisplayName = (stateAbbreviation) => {
  const abbreviation = stateAbbreviation ? stateAbbreviation.toUpperCase() : '';
  const state = states.find((s) => s.abbreviation === abbreviation);
  return state ? state.name : abbreviation;
};

export const categoryToDisplayName = (key) => {
  const category = categories[key];
  return category ? category.name : toDisplayName(key);
};
