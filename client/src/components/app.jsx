import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import CalPopup from './calenderPopup.jsx';
import EditPopup from './editPopup.jsx';
import DeletePopup from './deletePopup.jsx';
import Cats from './cats';
import Axios from 'axios';

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
      editId: ''
    }

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
      .then(response => {
        this.setState({
          list: response.data
        })
        console.log(response.data)
      })
      .catch(err => {
        console.error('something wrong with get');
      })
  }

  handleCalClick(e) {
    this.setState({
      toggle: !this.state.toggle,
      date: `2/${e.target.innerHTML}/2019`
    })
  }

  handleCalSubmitClick(e) {

    this.setState({
      toggle: !this.state.toggle
    })

    var data = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date
    }

    Axios.post('/api/event', data).then(response => {
      console.log('post worked!')
      this.setState({
        time: '',
        event: '',
        toggle: false,
        date: ''
      })
      this.get();
    })
  }

  handleCalExit() {
    this.setState({
      toggle: false
    })
  }

  handleEditClick(e) {
    this.setState({
      editToggle: !this.state.editToggle,
      editId: e.target.id
    })
  }

  handleEditSubmit(e) {
    Axios
      .put('/api/edit', {
        id: this.state.editId,
        event: this.state.event,
        time: this.state.time,
        date: this.state.date
      })
      .then(response => {
        console.log('put worked');
        this.handleEditExit();
        this.get();
      })
      .catch(err => {
        console.error('put did not work');
      })
  }

  handleEditExit() {
    this.setState({
      editToggle: false
    })
  }

  handleDeleteClick(e) {
    Axios
      .delete('/api/delete', {
        data: {
          id: e.target.id
        }
      })
      .then(res => {
        console.log('delete worked');
        this.get();
      }).catch(err => {
        console.error('delete did not work');
      })
  }

  handleEventChange(e) {
    this.setState({
      event: e.target.value
    })
    console.log(this.state.event)
  }

  handleTimeChange(e) {
    this.setState({
      time: e.target.value
    })
    console.log(this.state.time)
  }
  render() {
    return (
      <div className="App">
        <h1 className="title">Kitty Flitter</h1>
        <div className="center">
          <Cats />
        </div>
        <main>
          <Calendar handleCalClick={this.handleCalClick} />
          <div className="list" >
            <List data={this.state.list} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
          </div>
          {this.state.toggle ? <CalPopup handleCalExit={this.handleCalExit} handleCalSubmitClick={this.handleCalSubmitClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
          {this.state.editToggle ? <EditPopup handleEditSubmit={this.handleEditSubmit} handleEditExit={this.handleEditExit} handleEditClick={this.handleEditClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
