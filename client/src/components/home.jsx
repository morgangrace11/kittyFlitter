import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => (
  <div>
    <div className="homeTitle">
      <h1>Kitty Flitter</h1>
      <img src="cat.png" width="100" height="100" />
    </div>
    <br />
    <Link to='/login'>
      <Button variant='outlined' style={{ width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Login</Button>
    </Link>
    <Link to='/register'>
      <Button variant='outlined' style={{ width: '90px', color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Register</Button>
    </Link>
  </div>
);

export default Home;
