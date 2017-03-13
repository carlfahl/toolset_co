import React from 'react';
import UnfollowList from './UnfollowList';
import $ from 'jquery';

var UnfollowCont = React.createClass({
  getInitialState: function () {
    return (
      {
        followers: {users:[]},
        screenName: null,
      }
    )
  },
  componentWillMount: function () {
    this.getFollowersFromServer();
  },
  getFollowersFromServer: function () {
    var self = this;
    $.ajax({
      url: '/tweets/following/',
      method: 'GET'
    }).done(function (data) {
      self.setState({followers: data});
      console.log(data);
    });
  },
  removeFollower: function (sname) {
    $.ajax({
      url: '/tweets/removeFollower',
      method: 'POST',
      data: {sname: sname}
    }).done(function (data) {
      console.log(data);
    });
  },
  render: function() {
    return (
      <div>
        <UnfollowList followers={this.state.followers} removeFollower={this.removeFollower} />
      </div>
    );
  }
});

export default UnfollowCont;
