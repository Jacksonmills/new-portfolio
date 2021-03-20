import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <GlobalStyles />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
