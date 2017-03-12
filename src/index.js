import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import data from './data';

ReactDOM.render(
  <App products={data}/>,
  document.getElementById('root')
);
