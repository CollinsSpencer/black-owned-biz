import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Typography,
  Link,
  Breadcrumbs,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {
  stateToDisplayName,
  toDisplayName,
  categoryToDisplayName,
} from '../../helpers/utils';
import { ListItemLink } from './ListItemLink';

export const RouteBreadcrumbs = ({ state, city, category }) => {
  let StateBreadcrumb,
    CityBreadcrumb,
    CategoryBreadcrumb = null;
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
    <Breadcrumbs separator='&bull;' aria-label='breadcrumb'>
      {StateBreadcrumb}
      {CityBreadcrumb}
      {CategoryBreadcrumb}
    </Breadcrumbs>
  );
};

export const RouteBreadcrumbListItems = ({ state, city, category }) => {
  let StateListItem,
    CityListItem,
    CategoryListItem = null;
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