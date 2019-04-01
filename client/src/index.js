import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <div>
    <HashRouter>
      <App />
    </HashRouter>
  </div>,
   document.getElementById('app'));