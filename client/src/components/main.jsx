import React from 'react';
import Axios from 'axios';
import Calendar from './calender.jsx';
import CalPopup from './calenderPopup.jsx';
import List from './list.js';
import EditPopup from './editPopup.jsx';
import ImageUpload from './imageUpload.jsx';
import { connect } from 'react-redux';
import { replaceList, replaceEvent, replaceTime } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    Axios
      .get('/api/event', {
        params: {
          username: this.props.username
        }
      })
      .then((response) => {
        this.props.replaceList(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleEventChange(e) {
    this.props.replaceEvent(e.target.value);
  }

  handleTimeChange(e) {
    this.props.replaceTime(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>Kitty Flitter</h1>
          <img src="cat.png" width="42" height="42" />
        </div>
        <div className="container">
          <div className="center">
            <ImageUpload />
          </div>
          <div className="main">
            <div className="list" >
              <List
                get={this.get}
              />
            </div>
            <br />
            <div className="center">
              <Calendar />
            </div>
          </div>
          <CalPopup
            get={this.get}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} />
          <EditPopup
            get={this.get}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { username, list, event, time } = state;
  return { username, list, event, time };
}

export default connect(mapStateToProps, { replaceList, replaceEvent, replaceTime })(Main);
