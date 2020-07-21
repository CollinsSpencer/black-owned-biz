import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumbs,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import {
  categoryToDisplayName,
  stateToDisplayName,
  toDisplayName,
} from '../../helpers/utils';
import ListItemLink from './ListItemLink';

const RouteBreadcrumbs = ({ state, city, category }) => {
  let StateBreadcrumb;
  let CityBreadcrumb;
  let CategoryBreadcrumb = null;
  if (state) {
    StateBreadcrumb = <Typography>{stateToDisplayName(state)}</Typography>;
  }
  if (city) {
    StateBreadcrumb = (
      <Link component={RouterLink} to={`/${state}`}>
        {StateBreadcrumb}
      </Link>
    );
    CityBreadcrumb = <Typography>{toDisplayName(city)}</Typography>;
  }
  if (category) {
    CityBreadcrumb = (
      <Link component={RouterLink} to={`/${state}/${city}`}>
        {CityBreadcrumb}
      </Link>
    );
    CategoryBreadcrumb = (
      <Typography>{categoryToDisplayName(category)}</Typography>
    );
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
  category: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
};
RouteBreadcrumbs.defaultProps = {
  category: null,
  city: null,
  state: null,
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
        <ListItemText primary={stateToDisplayName(state)} />
      </ListItem>
    );
  } else if (state && city && !category) {
    StateListItem = (
      <ListItemLink to={`/${state}`} primary={stateToDisplayName(state)} />
    );
    CityListItem = (
      <ListItem>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={toDisplayName(city)} />
      </ListItem>
    );
  } else if (state && city && category) {
    StateListItem = (
      <ListItemLink to={`/${state}`} primary={stateToDisplayName(state)} />
    );
    CityListItem = (
      <ListItemLink to={`/${state}/${city}`} primary={toDisplayName(city)} />
    );
    CategoryListItem = (
      <ListItem>
        <ListItemIcon>
          <ArrowRightAltIcon />
        </ListItemIcon>
        <ListItemText primary={categoryToDisplayName(category)} />
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
  state: PropTypes.string,
  city: PropTypes.string,
  category: PropTypes.string,
};
RouteBreadcrumbListItems.defaultProps = {
  state: null,
  city: null,
  category: null,
};

export { RouteBreadcrumbs, RouteBreadcrumbListItems };
