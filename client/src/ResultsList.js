import React from 'react';
import { Form, FormControl, Button, Panel, Jumbotron} from 'react-bootstrap';
import './ResultsList.css';

var ResultsList = React.createClass({
  render: function() {
    var followers = this.props.followers.users.map(function (item) {
      return (
        <div className='panel panel-default' key={item.id_str}>
          <div className='panel-body myTwitCard'>
            <div className='box'><img src={item.profile_image_url_https} alt="" /></div>
            <div className='box'><h3>{item.name}</h3></div>
            <div className='box'><Button bsStyle="primary">Follow</Button></div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Jumbotron>
          <h1>Add Followers</h1>
        </Jumbotron>
        <Form>
          <FormControl type="text" placeholder="screen name" onChange={(event) => this.props.onChangeHandler(event.target.value)} />
        </Form>
        <Button bsStyle="success" onClick={() => this.props.onClickHandler('followers')}>Get Followers</Button>
        <Button bsStyle="success" onClick={() => this.props.onClickHandler('following')}>Get Following</Button>
        {followers}
      </div>
    );
  }
});

export default ResultsList;
