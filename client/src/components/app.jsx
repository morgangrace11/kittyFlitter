import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import Popup from './popup.jsx';
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
    }

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleEditExit = this.handleEditExit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
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

  handleEditClick(e) {
    console.log(e.target.id)

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

  handleExit() {
    this.setState({
      toggle: false
    })
  }

  handleEditExit() {
    this.setState({
      editToggle: false
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

  render() {
    console.log(this.state.list, 'list line 166 app');
    return (
      <div className="App">
        <h1 className="title">Kitty Flitter</h1>
        <div className="center">
          <Cats />
        </div>
        <main>
          <Calendar handleClick={this.handleClick} />
          <div className="list" >
            <List data={this.state.list} handleEditClick={this.handleEditClick} handleDeleteClick={this.handleDeleteClick} />
          </div>
          {this.state.toggle ? <Popup handleExit={this.handleExit} handleSubmitClick={this.handleSubmitClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
          {this.state.editToggle ? <EditPopup handleIdChange={this.handleIdChange} handleEditExit={this.handleEditExit} handleEditClick={this.handleEditClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
