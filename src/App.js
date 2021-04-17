import React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@material-ui/core';

import { PrivateRoute, PublicRoute } from './components';
import {
  AddListing,
  // Admin,
  Category,
  City,
  Contact,
  // Home,
  SignIn,
  // State,
  VerifySubmittedBiz,
} from './pages';
import { useAuth } from './contexts';

const App = () => {
  const { isAuthLoading } = useAuth();

  return isAuthLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center" m={12}>
      <Box mr={3}>
        <CircularProgress />
      </Box>
      <Typography variant="h2">Loading...</Typography>
    </Box>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/ne/lincoln" />} />
        <Route path="/add" component={AddListing} />
        {/* <PrivateRoute path='/admin' component={Admin}></PrivateRoute> */}
        <PrivateRoute path="/verify" component={VerifySubmittedBiz} />
        <PublicRoute path="/signin" component={SignIn} />
        <Route path="/contact" component={Contact} />
        <Route path="/:state/:city/:category" component={Category} />
        <Route path="/:state/:city" component={City} />
        <Route path="/:state" component={() => <Redirect to="/ne/lincoln" />} />
      </Switch>
    </Router>
  );
};

export default App;
