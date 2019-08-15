import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../styles/index.scss';

const fetch = require('node-fetch');

fetch('./static/projectData.json').then(resp => resp.json()).then((data) => {
  ReactDOM.render(<App projectData={data} />, document.getElementById('app'));
});
