import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Breadcrumbs,
  Typography,
  Link,
  Box,
} from '@material-ui/core';
import { AuthActions } from '../Auth';

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Heatwood',
    lineHeight: 2,
  },
}));

export const Navigation = ({ location = {} }) => {
  const classes = useStyles();
  const { state, city, category } = location;

  let StateBreadcrumb,
    CityBreadcrumb,
    CategoryBreadcrumb = null;
  if (state) {
    StateBreadcrumb = <Typography>{state}</Typography>;
  }
  if (city) {
    StateBreadcrumb = (
      <Link component={RouterLink} to={`/${state}`}>
        {StateBreadcrumb}
      </Link>
    );
    CityBreadcrumb = <Typography>{city}</Typography>;
  }
  if (category) {
    CityBreadcrumb = (
      <Link component={RouterLink} to={`/${state}/${city}`}>
        {CityBreadcrumb}
      </Link>
    );
    CategoryBreadcrumb = <Typography>{category}</Typography>;
  }

  return (
    <AppBar color='transparent'>
      <Toolbar>
        <Breadcrumbs>
          <Link component={RouterLink} to='/'>
            <Typography variant='h5' className={classes.title} noWrap>
              BlackOwned.in
            </Typography>
          </Link>
          {StateBreadcrumb}
          {CityBreadcrumb}
          {CategoryBreadcrumb}
        </Breadcrumbs>
        <Box flexGrow={1}></Box>
        <AuthActions />
      </Toolbar>
    </AppBar>
  );
};
