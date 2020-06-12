import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  AddBizForm,
  Category,
  City,
  Home,
  SignIn,
  State,
  VerifySubmittedBiz,
} from './containers';
import { auth } from './services/firebase';

import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() =>
    auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user);
      setLoading(false);
    })
  );

  return loading === true ? (
    <div className='App'>
      <h2>Loading...</h2>
    </div>
  ) : (
    <div className='App'>
      {authenticated && (
        <div>
          <button onClick={() => auth.signOut()}>Sign-out</button>
        </div>
      )}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/add' component={AddBizForm}></Route>
          <PrivateRoute
            path='/verify'
            authenticated={authenticated}
            component={VerifySubmittedBiz}
          ></PrivateRoute>
          <PublicRoute
            path='/signin'
            authenticated={authenticated}
            component={SignIn}
          ></PublicRoute>
          <Route path='/:state/:city/:category' component={Category}></Route>
          <Route path='/:state/:city' component={City}></Route>
          <Route path='/:state' component={State}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
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

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};
