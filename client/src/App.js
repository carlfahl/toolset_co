import React from 'react';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';
import './App.css';
import FollowersCont from './FollowersCont';
import UnfollowCont from './UnfollowCont';
import MainComp from './MainComp';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={MainComp}>
            <IndexRoute component={FollowersCont} />
            <Route path="/follow" component={FollowersCont} />
            <Route path='/unfollow' component={UnfollowCont} />
          </Route>
        </Router>
      </div>
    );
  }
});

export default App;
