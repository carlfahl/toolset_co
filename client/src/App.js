import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import FollowersCont from './FollowersCont';
import FollowingCont from './FollowingCont';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <FollowersCont />
      </div>
    );
  }
});

export default App;
