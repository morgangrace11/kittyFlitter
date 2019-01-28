import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import Popup from './popup.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      time: '',
      event: '',
      toggle: false,
      date: ''
    }

    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleSubmitClick(e) {

    this.setState({
      toggle: !this.state.toggle,
      date: `2/${e.target.innerHTML}/2019`
    })

    var data = {
      event: this.state.event,
      time: this.state.time,
      date: this.state.date
    }

    Axios
      .post('/api/event', data)
      .then(response => {
        console.log('post worked!')
      })

  }

  handleExit() {
    this.setState({
      toggle: !this.state.toggle
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
    console.log(this.state)
    return (
      <div className="App">
        <h1 id="title">Kitty Flitter</h1>
        <main>
          <Calendar handleClick={this.handleSubmitClick} />
          <List />
          {this.state.toggle ? <Popup handleExit={this.handleExit} handleSubmitClick={this.handleSubmitClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
