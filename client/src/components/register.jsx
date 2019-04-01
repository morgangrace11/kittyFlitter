import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div>
        <form action="/register" method="post">
          <div>
            <label>Username:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" />
          </div>
          <Link to='/main'>
            <Button variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Submit</Button>
          </Link>
        </form>
      </div>
    )
  }
}

export default Register;