import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import FollowersCont from './FollowersCont';
import UnfollowCont from './UnfollowCont';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={FollowersCont} />
          <Route path='/unfollow' component={UnfollowCont} />
        </Router>
      </div>
    );
  }
});

export default App;
