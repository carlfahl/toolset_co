import React from 'react';
import Auth0Lock from 'auth0-lock';
import { Nav, NavItem } from 'react-bootstrap';

var MainComp = React.createClass({
  componentWillMount: function () {
    this.lock = new Auth0Lock('GiPnz58cNt9qVdyowetQRF0C55cj8ul7', 'carlfahl.auth0.com');
  },
  showLock: function () {
    this.lock.show();
  },
  getIdToken: function () {

  },
  render: function() {
    return (
      <div>
        {this.showLock()}
        {this.props.children}
      </div>
    );
  }
});

export default MainComp;
