import { categories, states } from './constants';

export const toKeyValue = (phrase) => phrase.replace(/\s/g, '_').toLowerCase();

export const toDisplayName = (key) =>
  key
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

export const stateToDisplayName = (stateAbbreviation) => {
  const abbreviation = stateAbbreviation ? stateAbbreviation.toUpperCase() : '';
  const state = states.find((s) => s.abbreviation === abbreviation);
  return state ? state.name : abbreviation;
};

export const cityToDisplayName = (cityKey, businesses = []) => {
  const cities = businesses.map((b) => b.city);
  if (cities.some((c) => toKeyValue(c) === cityKey)) return cities.find((c) => toKeyValue(c) === cityKey);
  return toDisplayName(cityKey);
};

export const categoryToDisplayName = (key) => {
  const category = categories[key];
  return category ? category.name : toDisplayName(key);
};

export const stateAbbreviation = (key) => {
  const abbreviation = key ? key.toUpperCase() : '';
  return states.some((s) => s.abbreviation === abbreviation) ? abbreviation : null;
};
