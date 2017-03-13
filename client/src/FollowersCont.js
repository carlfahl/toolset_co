import React from 'react';
import ResultsList from './ResultsList';
import $ from 'jquery';

var FollowersCont = React.createClass({
  getInitialState: function () {
    return (
      {
        followers: {users:[]},
        screenName: null,
      }
    )
  },
  getFollowersFromServer: function (method) {
    var self = this;
    if (this.state.screenName) {
      $.ajax({
        url: '/tweets/' + method + '/' + this.state.screenName,
        method: 'GET'
      }).done(function (data) {
        self.setState({followers: data});
        console.log(data);
      });
    }
  },
  addFollower: function (sname) {
    $.ajax({
      url: '/tweets/addFollower',
      method: 'POST',
      data: {sname: sname}
    }).done(function (data) {
      console.log(data);
    });
  },
  onChangeHandler: function (data) {
    this.setState({screenName: data});
    console.log(this.state.screenName);
  },
  render: function() {
    return (
      <div>
        <ResultsList followers={this.state.followers} onChangeHandler={this.onChangeHandler} onClickHandler={this.getFollowersFromServer} addFollower={this.addFollower} />
      </div>
    );
  }
});

export default FollowersCont;
