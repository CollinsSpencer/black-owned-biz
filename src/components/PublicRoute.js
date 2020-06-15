import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuthenticated } from '../helpers/auth';

export const PublicRoute = ({ component: Component, ...rest }) => {
  let location = useLocation();
  const { authenticated } = useAuthenticated();

  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={from} />
        )
      }
    />
  );
};
