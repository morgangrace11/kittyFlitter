import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Login = () => (
  <div>
    <Link to='/main'>
      <Button variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Submit</Button>
    </Link>
  </div>
)

export default Login;
