import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  authenticated,
  ...rest
}) => {
  let location = useLocation();

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
