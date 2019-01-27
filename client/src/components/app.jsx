import React from 'react';
import Calendar from './calender.jsx';
import List from './list.jsx';
import Popup from './popup.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      date: '',
      event: '',
      toggle: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Kitty Flitter</h1>
        <main>
          <Calendar handleClick={this.handleClick} />
          <List />
          {this.state.toggle ? <Popup handleClick={this.handleClick} /> : null}
        </main>
      </div>
    );

  }
}

export default App;
