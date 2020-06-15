import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthenticated } from '../helpers/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuthenticated();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
