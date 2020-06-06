import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Home, State, City, Category } from './containers';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/:state/:city/:category'>
            <Category />
          </Route>
          <Route path='/:state/:city'>
            <City />
          </Route>
          <Route path='/:state'>
            <State />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
