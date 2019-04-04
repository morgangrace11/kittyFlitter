import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { replaceUser } from '../actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      registered: '',
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleClick() {
    axios
      .post('/register', {
        username: this.props.username,
        password: this.state.password,
      })
      .then((res) => {
        this.setState({
          registered: true,
        });
        console.log(res, 'register post worked');
      }).catch((err) => {
        console.error(err, 'register post failed');
        alert('username in use');
      });
  }

  handleUserName(e) {
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
        <form action="/register" method="post">
          <div>
            <label>Username:</label>
            <input onChange={this.handleUserName} type="text" name="username" />
          </div>
          <div>
            <label>Password:</label>
            <input onChange={this.handlePassword} type="password" name="password" />
          </div>
          <Button onClick={this.handleClick} variant='outlined' style={{ color: 'rgb(233, 183, 54)', borderColor: 'rgb(233, 183, 54)', }} size='large'>Submit</Button>
        </form>
        {this.state.registered === true ? <Redirect to='/main' /> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { username } = state;
  return { username };
}

export default connect(mapStateToProps, { replaceUser })(Register);