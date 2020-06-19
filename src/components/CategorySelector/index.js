import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';
import { categories } from '../../helpers/constants';
// TODO: Figure out how to better import CategoryButton
import { CategoryButton } from '../CategoryButton/index';

export const CategorySelector = ({ availableCategories }) => {
  const { url } = useRouteMatch();
  const categoriesList = availableCategories.sort().map(name => categories[name]);

  return (
    <Grid container spacing={1}>
      {categoriesList.map(({ Icon, key, name, imagePath }) => (
        <Grid item key={key}>
          <Link component={RouterLink} to={`${url}/${key}`}>
            <CategoryButton IconComponent={Icon} name={name} imagePath={imagePath} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
