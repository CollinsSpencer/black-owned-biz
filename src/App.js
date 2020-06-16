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
  Category,
  City,
  Contact,
  // Home,
  SignIn,
  // State,
  VerifySubmittedBiz,
} from './containers';
import { useAuthenticated } from './helpers/auth';

function App() {
  const { loading } = useAuthenticated();

  return loading === true ? (
    <div className='App'>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={() => <Redirect to={'/NE/Lincoln'} />}
          ></Route>
          <Route path='/add' component={AddBizForm}></Route>
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
    </div>
  );
}

export default App;
