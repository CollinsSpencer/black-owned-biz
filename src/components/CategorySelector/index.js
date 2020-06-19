import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Grid, Link } from '@material-ui/core';
import { categories } from '../../helpers/constants';
// TODO: Figure out how to better import CategoryButton
import { CategoryButton } from '../CategoryButton/index';

export const CategorySelector = ({ availableCategories }) => {
  const { url } = useRouteMatch();
  const categoriesList = availableCategories.map(name => categories[name]);

  return (
    <Grid container spacing={1}>
      {categoriesList.map(({ Icon, key, name }) => (
        <Grid item key={key}>
          <Link component={RouterLink} to={`${url}/${key}`}>
            {/* TODO: Replace SquareButton with CategoryButton */}
            {/* <SquareButton variant='contained' color='secondary'>
              <Box m={3} mb={1}>
                <Icon style={{ fontSize: 50 }} />
              </Box>
              <Typography variant='h6'>{name}</Typography>
            </SquareButton> */}

            <CategoryButton IconComponent={Icon} name={name} />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
