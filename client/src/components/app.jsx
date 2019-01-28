import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import Popup from './popup.jsx';

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

    this.handleClick = this.handleClick.bind(this);
    this.handleEventChange = this.handleEventChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleClick(e) {
    console.log(e.target.innerHTML)
    this.setState({
      toggle: !this.state.toggle,
      date: `2/${e.target.innerHTML}/2019`
    })
  }

  handleEventChange(e) {
    console.log(e.target.value)
    this.setState({
      event: e.target.value
    })
  }

  handleTimeChange(e) {
    console.log(e.target.value)
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
          <Calendar handleClick={this.handleClick} />
          <List />
          {this.state.toggle ? <Popup handleClick={this.handleClick} handleEventChange={this.handleEventChange} handleTimeChange={this.handleTimeChange} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
