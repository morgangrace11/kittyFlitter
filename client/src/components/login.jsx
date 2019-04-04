import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { replaceUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      password: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  //get request point to /login
  handleClick() {
    axios
      .get('kitty-flitter.cc0jybez5blr.us-east-2.rds.amazonaws.com/login', {
        params: {
          username: this.props.username,
          password: this.state.password,
        }
      }).then((response) => {
        this.setState({
          loggedIn: true,
        });
      }).catch((err) => {
        console.log(err, 'post failed login')
        alert('username or password incorrect');
      });
  }

  handleUsername(e) {
    this.props.replaceUser(e.target.value);
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form action="/login" method="post">
          <div>
            <label>Username:</label>
            <input onChange={this.handleUsername} type="text" name="username" />
          </div>
          <div>
            <label>Password:</label>
            <input onChange={this.handlePassword} type="password" name="password" />
          </div>
          <Button onClick={this.handleClick} variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Submit</Button>
        </form>
        {this.state.loggedIn ? <Redirect to='/main' /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username } = state;
  return { username };
}

export default connect(mapStateToProps, { replaceUser })(Login);