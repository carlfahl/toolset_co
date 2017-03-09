import React from 'react';
import { Form, FormControl, Button, Panel, Jumbotron} from 'react-bootstrap';
import './ResultsList.css';

var ResultsList = React.createClass({
  render: function() {
    var followers = this.props.followers.users.map(function (item) {
      return (
        <div key={item.id_str} className="myTwitCard" >
          <div className="box"><img src={item.profile_image_url_https} alt="" /></div>
          <div className="box"><h3>{item.name}</h3></div>
          <div className="box"><Button>Follow</Button></div>
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
        <Button bsStyle="success" onClick={() => this.props.onClickHandler()}>Get Followers</Button>
        {followers}
      </div>
    );
  }
});

export default ResultsList;
