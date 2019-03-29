import React from 'react';
import Axios from 'axios';
import Calendar from './calender.jsx';
import List from './list.jsx';
import CalPopup from './calenderPopup.jsx';
import EditPopup from './editPopup.jsx';
import Cats from './cats';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      time: '',
      event: '',
      toggle: false,
      date: '',
      editToggle: false,
      editId: '',
      today: new Date(),
    };

    this.handleCalSubmitClick = this.handleCalSubmitClick.bind(this);
    this.handleCalExit = this.handleCalExit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleCalClick = this.handleCalClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditExit = this.handleEditExit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    Axios
      .get('/api/event')
      .then((response) => {
        this.setState({
          list: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleCalClick(e) {
    this.setState({
      toggle: !this.state.toggle,
      date: `${e.target.id}/${e.target.innerHTML}/2019`,
    });
  }

  handleCalSubmitClick() {
    var data = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date,
    };
    this.setState({
      toggle: !this.state.toggle,
    });
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

  handleCalExit() {
    this.setState({
      toggle: false,
    });
  }

  handleEditClick(e) {
    this.setState({
      editToggle: !this.state.editToggle,
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
        this.handleEditExit();
        this.get();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleEditExit() {
    this.setState({
      editToggle: false,
    });
  }

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
            <Cats />
          </div>
          <div className="main">
            <div className="list" >
              <List
                data={this.state.list}
                handleEditClick={this.handleEditClick}
                handleDeleteClick={this.handleDeleteClick}
              />
            </div>
            <br />
            <div className="center">
              <Calendar today={this.state.today} handleCalClick={this.handleCalClick} />
            </div>
          </div>
          {this.state.toggle ? <CalPopup
            handleCalExit={this.handleCalExit}
            handleCalSubmitClick={this.handleCalSubmitClick}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} /> : null}
          {this.state.editToggle ? <EditPopup
            handleEditSubmit={this.handleEditSubmit}
            handleEditExit={this.handleEditExit}
            handleEditClick={this.handleEditClick}
            handleEventChange={this.handleEventChange}
            handleTimeChange={this.handleTimeChange} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
