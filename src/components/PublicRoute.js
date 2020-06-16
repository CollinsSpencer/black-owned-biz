import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../helpers/auth';

export const PublicRoute = ({ component: Component, ...rest }) => {
  let location = useLocation();
  const { user } = useAuth();

  let { from } = location.state || { from: { pathname: '/' } };

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Component {...props} /> : <Redirect to={from} />
      }
    />
  );
};
