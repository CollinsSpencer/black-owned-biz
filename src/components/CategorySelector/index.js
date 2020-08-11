import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import CategoryButton from '../CategoryButton';
import { categories } from '../../helpers/constants';

const CategorySelector = ({ availableCategories }) => {
  const categoriesList = (availableCategories ?? [])
    .sort()
    .map((name) => categories[name]);

  return (
    <Grid container spacing={1}>
      {categoriesList.map(({ Icon, imagePath, key, name }) => (
        <Grid item key={key} xs={12} sm={6} md={4}>
          <CategoryButton
            code={key}
            IconComponent={Icon}
            imagePath={imagePath}
            name={name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

CategorySelector.propTypes = {
  availableCategories: PropTypes.arrayOf(PropTypes.string),
};
CategorySelector.defaultProps = {
  availableCategories: [],
};

export default CategorySelector;
