import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Adapted from: https://material-ui.com/guides/composition/#react-router
const ListItemLink = ({ icon, primary, to }) => {
  const renderLink = useMemo(
    () =>
      // eslint-disable-next-line react/jsx-props-no-spreading
      forwardRef((linkProps, ref) => <Link ref={ref} to={to} {...linkProps} />),
    [to],
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
};

ListItemLink.propTypes = {
  icon: PropTypes.string,
  primary: PropTypes.string,
  to: PropTypes.string,
};
ListItemLink.defaultProps = {
  icon: null,
  primary: '',
  to: '',
};

export default ListItemLink;
