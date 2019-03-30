import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router';

ReactDOM.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
   document.getElementById('app'));