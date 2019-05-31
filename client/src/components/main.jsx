import React from 'react';
import Axios from 'axios';
import Calendar from './calender.jsx';
import CalPopup from './calenderPopup.jsx';
import List from './list.js';
import EditPopup from './editPopup.jsx';
import ImageUpload from './imageUpload.jsx';
import { connect } from 'react-redux';
import { replaceList, calenderToggle, editToggle, replaceDate, replaceEvent, replaceTime, editId } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.get = this.get.bind(this);
  }

  //get functions

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

  //edit functions


  handleEditClick(e) {
    this.props.editToggle();
    this.props.editId(e.target.id);
  }

  handleEditSubmit(e) {
    Axios
      .put('/api/edit', {
        id: this.props.id,
        event: this.props.event,
        time: this.props.time,
        date: this.props.date,
      })
      .then(() => {
        this.props.editToggle();
        this.get();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //delete functions

  handleDeleteClick(e) {
    Axios
      .delete('/api/delete', {
        data: {
          id: e.target.id,
        }
      })
      .then(() => {
        this.get();
      }).catch(err => {
        console.error(err);
      });
  }


  //event functions

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
                handleEditClick={this.handleEditClick}
                handleDeleteClick={this.handleDeleteClick}
              />
            </div>
            <br />
            <div className="center">
              <Calendar handleCalClick={this.handleCalClick} />
            </div>
          </div>
          {this.props.calToggle ? <CalPopup
            handleCalExit={this.props.calenderToggle}
            handleCalSubmitClick={this.handleCalSubmitClick}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} /> : null}
          {this.props.eToggle ? <EditPopup
            handleEditSubmit={this.handleEditSubmit}
            handleEditExit={this.props.editToggle}
            handleEditClick={this.handleEditClick}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} /> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { username, list, calToggle, eToggle, date, event, time, id } = state;
  return { username, list, calToggle, eToggle, date, event, time, id };
}

export default connect(mapStateToProps, { replaceList, calenderToggle, editToggle, replaceDate, replaceEvent, replaceTime, editId })(Main);
