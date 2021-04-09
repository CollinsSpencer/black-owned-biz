import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs, Link, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import ListItemLink from './ListItemLink';

const RouteBreadcrumbs = ({ state, city, category }) => {
  let StateBreadcrumb;
  let CityBreadcrumb;
  let CategoryBreadcrumb = null;

  if (state) {
    StateBreadcrumb = <Typography>{state.display}</Typography>;
  }

  if (city) {
    StateBreadcrumb = (
      <Link component={RouterLink} to={`/${state.key}`}>
        {StateBreadcrumb}
      </Link>
    );
    CityBreadcrumb = <Typography>{city.display}</Typography>;
  }

  if (category) {
    CityBreadcrumb = (
      <Link component={RouterLink} to={`/${state.key}/${city.key}`}>
        {CityBreadcrumb}
      </Link>
    );
    CategoryBreadcrumb = <Typography>{category.display}</Typography>;
  }

  return (
    <Breadcrumbs separator="&bull;" aria-label="breadcrumb">
      {StateBreadcrumb}
      {CityBreadcrumb}
      {CategoryBreadcrumb}
    </Breadcrumbs>
  );
};

RouteBreadcrumbs.propTypes = {
  state: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
  city: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
  category: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
};
RouteBreadcrumbs.defaultProps = {
  state: null,
  city: null,
  category: null,
};

const RouteBreadcrumbListItems = ({ state, city, category }) => {
  let StateListItem;
  let CityListItem;
  let CategoryListItem = null;
  if (state && !city) {
    StateListItem = (
      <ListItem>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={state.display} />
      </ListItem>
    );
  } else if (state && city && !category) {
    StateListItem = <ListItemLink to={`/${state.key}`} primary={state.display} />;
    CityListItem = (
      <ListItem>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={city.display} />
      </ListItem>
    );
  } else if (state && city && category) {
    StateListItem = <ListItemLink to={`/${state.key}`} primary={state.display} />;
    CityListItem = <ListItemLink to={`/${state.key}/${city.key}`} primary={city.display} />;
    CategoryListItem = (
      <ListItem>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={category.display} />
      </ListItem>
    );
  }

  return (
    <>
      {StateListItem}
      {CityListItem}
      {CategoryListItem}
    </>
  );
};

RouteBreadcrumbListItems.propTypes = {
  state: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
  city: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
  category: PropTypes.shape({ key: PropTypes.string, display: PropTypes.string }),
};
RouteBreadcrumbListItems.defaultProps = {
  state: null,
  city: null,
  category: null,
};

export { RouteBreadcrumbs, RouteBreadcrumbListItems };
