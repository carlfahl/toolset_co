import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import FollowersCont from './FollowersCont';

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
