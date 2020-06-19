import React from 'react';
import { Grid } from '@material-ui/core';
import { categories } from '../../helpers/constants';
// TODO: Figure out how to better import CategoryButton
import { CategoryButton } from '../CategoryButton/index';

export const CategorySelector = ({ availableCategories }) => {
  const categoriesList = availableCategories.sort().map(name => categories[name]);

  return (
    <Grid container spacing={1}>
      {categoriesList.map(({ Icon, name, imagePath, key }) => (
        <Grid item key={key}>
          <CategoryButton IconComponent={Icon} name={name} imagePath={imagePath} code={key} />
        </Grid>
      ))}
    </Grid>
  );
};
