import React from 'react';
import { Form, FormControl, Button, Panel, Jumbotron} from 'react-bootstrap';
import './ResultsList.css';

var UnfollowList = React.createClass({
  render: function() {
    var self = this;
    var followers = this.props.followers.users.map(function (item) {
      return (
        <div className='panel panel-default' key={item.id_str}>
          <div className='panel-body myTwitCard'>
            <div className='box'><img src={item.profile_image_url_https} alt="" /></div>
            <div className='box'><h3>{item.name}</h3></div>
            <div className='box'><Button bsStyle="primary" onClick={() => self.props.removeFollower(item.screen_name)} >Unfollow</Button></div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Jumbotron>
          <h1>Remove Followers</h1>
        </Jumbotron>
        {followers}
      </div>
    );
  }
});

export default UnfollowList;
