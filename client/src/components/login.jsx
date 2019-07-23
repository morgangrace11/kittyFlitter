import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import { replaceUser } from '../actions';
import TextField from '@material-ui/core/TextField';

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

  handleClick() {
    axios
      .get('/login', {
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
      <div className="login">
        <form action="/login" method="post">
          <div>
            <TextField label="username" onChange={this.handleUsername} />
          </div>
          <div>
            <TextField type="password" label="password" onChange={this.handlePassword} />
          </div>
          <br />
          <Button onClick={this.handleClick} variant='outlined' style={{ width: '90px' }} size='large'>Submit</Button>
        </form>
        <br />
        {this.state.loggedIn ? <Redirect to='/main' /> : null}
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  const { username } = state;
  return { username };
}

export default connect(mapStateToProps, { replaceUser })(Login);
