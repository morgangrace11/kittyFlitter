import React from 'react';
import Axios from 'axios';
import Calendar from './calender.jsx';
import CalPopup from './calenderPopup.jsx';
import List from './list.js';
import EditPopup from './editPopup.jsx';
import ImageUpload from './imageUpload.jsx';
import { connect } from 'react-redux';
import { replaceList, calenderToggle, editToggle } from '../actions';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '',
      event: '',
      date: '',
      editId: '',
      today: new Date(),
    };

    this.handleCalSubmitClick = this.handleCalSubmitClick.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCalClick = this.handleCalClick.bind(this);
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


  //calendar functions

  handleCalClick(e) {
    this.props.calenderToggle();
    this.setState({
      date: `${e.target.id}/${e.target.innerHTML}/2019`,
    })
  }

  handleCalSubmitClick() {
    var data = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date,
      username: this.props.username,
    };
    this.props.calenderToggle();
    Axios.post('/api/event', data).then(() => {
      this.setState({
        time: '',
        event: '',
        toggle: false,
        date: '',
      });
      this.get();
    });
  }


  //edit functions


  handleEditClick(e) {
    this.props.editToggle();
    this.setState({
      editId: e.target.id,
    });
  }

  handleEditSubmit(e) {
    Axios
      .put('/api/edit', {
        id: this.state.editId,
        event: this.state.event,
        time: this.state.time,
        date: this.state.date,
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
    this.setState({
      event: e.target.value,
    });
  }

  handleTimeChange(e) {
    this.setState({
      time: e.target.value,
    });
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
              <Calendar today={this.state.today} handleCalClick={this.handleCalClick} />
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
  const { username, list, calToggle, eToggle } = state;
  return { username, list, calToggle, eToggle };
}

export default connect(mapStateToProps, { replaceList, calenderToggle, editToggle })(Main);
