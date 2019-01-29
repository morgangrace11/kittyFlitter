import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import Popup from './popup.jsx';
import EditPopup from './editPopup.jsx';
import DeletePopup from './deletePopup.jsx';
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
      id: '',
      editToggle: false,
      deleteToggle: false
    }

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditExit = this.handleEditExit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDeleteExit = this.handleDeleteExit.bind(this);
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

  handleClick(e) {
    this.setState({
      toggle: !this.state.toggle,
      date: `2/${e.target.innerHTML}/2019`
    })
  }

  handleEditClick() {
    this.setState({
      editToggle: !this.state.editToggle
    })


    Axios
      .put('/api/edit', {
        id: this.state.id,
        event: this.state.event,
        time: this.state.time,
        date: this.state.date
      })
      .then(response => {
        console.log('put worked');
        this.get();
      })
      .catch(err => {
        console.error('put did not work');
      })

  }

  handleSubmitClick(e) {

    this.setState({
      toggle: !this.state.toggle
    })

    var data = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date
    }

    Axios
      .post('/api/event', data).then(response => {
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

  handleDeleteClick() {
    this.setState({
      toggle: !this.state.deleteToggle
    })

    Axios
      .delete('/api/delete', {
        id: this.state.id
      })
      .then(res => {
        console.log('delete worked');
        this.get();
      }).catch(err => {
        console.error('delete did not work');
      })
  }

  handleExit() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  handleEditExit() {
    this.setState({
      editToggle: !this.state.editToggle
    })
  }

  handleDeleteExit() {
    this.setState({
      toggle: !this.state.deleteToggle
    })
  }

  handleEventChange(e) {
    this.setState({
      event: e.target.value
    })
  }

  handleTimeChange(e) {
    this.setState({
      time: e.target.value
    })
  }

  handleIdChange(e) {
    this.setState({
      id: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1 id="title">Kitty Flitter</h1>
        <main>
          <Calendar handleClick={this.handleClick} />
          <List data={this.state.list} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
          {this.state.toggle ? <Popup handleExit={this.handleExit} handleSubmitClick={this.handleSubmitClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
          {this.state.editToggle ? <EditPopup handleIdChange={this.handleIdChange} handleEditExit={this.handleEditExit} handleEditClick={this.handleEditClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
          {this.state.deleteToggle ? <DeletePopup handleIdChange={this.handleIdChange} handleDeleteExit={this.handleDeleteExit} handleDeleteClick={this.handleDeleteClick} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
