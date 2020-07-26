import React from 'react';
import { Grid } from '@material-ui/core';
import { categories } from '../../helpers/constants';
import { CategoryButton } from '../CategoryButton';

export const CategorySelector = ({ availableCategories }) => {
  const categoriesList = (availableCategories ?? []).sort().map(name => categories[name]);

  return (
    <Grid container spacing={1}>
      {categoriesList.map(({ Icon, name, imagePath, key }) => (
        <Grid item key={key} xs={12} sm={6} md={4}>
          <CategoryButton IconComponent={Icon} name={name} imagePath={imagePath} code={key} />
        </Grid>
      ))}
    </Grid>
  );
};
