import React from 'react';
import Routes from './routes.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
