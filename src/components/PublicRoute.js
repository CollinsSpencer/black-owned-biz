/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, useLocation } from 'react-router-dom';

import { useAuth } from '../contexts';

const PublicRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const { user } = useAuth();

  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Component {...props} /> : <Redirect to={from} />
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;
