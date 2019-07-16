import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const title = 'Welcome to React using Webpack bundle';
ReactDOM.render(
    <App title={title}/>,
    document.getElementById('app')
  );

module.hot.accept();
