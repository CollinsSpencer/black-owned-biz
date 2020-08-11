import React from 'react';

import CategorySelector from '.';
import { categories } from '../../helpers/constants';

export default { title: 'Components' };

export const CategorySelectorDemo = () => (
  <CategorySelector availableCategories={Object.keys(categories)} />
);
