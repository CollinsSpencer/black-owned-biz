import React from 'react';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { categories } from '../../helpers/consts';
import { SquareButton } from '../SquareButton';

export const CategorySelector = () => {
  let { url } = useRouteMatch();

  return (
    <Grid container spacing={1}>
      {Object.values(categories).map(({ Icon, key, name }) => (
        <Grid item>
          <Link component={RouterLink} to={`${url}/${key}`}>
            <SquareButton variant='contained'>
              <Box m={3} mb={1}>
                <Icon style={{ fontSize: 50 }} />
              </Box>
              <Typography variant='h6'>{name}</Typography>
            </SquareButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
