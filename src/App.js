import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './components';
import {
  AddBizForm,
  Admin,
  Category,
  City,
  Contact,
  // Home,
  SignIn,
  // State,
  VerifySubmittedBiz,
} from './containers';
import { useAuth } from './helpers/auth';
import { Box, CircularProgress, Typography } from '@material-ui/core';

function App() {
  const { isAuthLoading } = useAuth();

  return isAuthLoading ? (
    <Box display='flex' justifyContent='center' alignItems='center' m={12}>
      <Box mr={3}>
        <CircularProgress />
      </Box>
      <Typography variant='h2'>Loading...</Typography>
    </Box>
  ) : (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Redirect to={'/NE/Lincoln'} />}
        ></Route>
        <Route path='/add' component={AddBizForm}></Route>
        <PrivateRoute path='/admin' component={Admin}></PrivateRoute>
        <PrivateRoute
          path='/verify'
          component={VerifySubmittedBiz}
        ></PrivateRoute>
        <PublicRoute path='/signin' component={SignIn}></PublicRoute>
        <PublicRoute path='/contact' component={Contact}></PublicRoute>
        <Route path='/:state/:city/:category' component={Category}></Route>
        <Route path='/:state/:city' component={City}></Route>
        <Route
          path='/:state'
          component={() => <Redirect to={'/NE/Lincoln'} />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;
