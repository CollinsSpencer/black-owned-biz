import React, { forwardRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Adapted from: https://material-ui.com/guides/composition/#react-router
export const ListItemLink = ({ icon, primary, to }) => {
  const renderLink = useMemo(
    () =>
      forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
    [to]
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};
