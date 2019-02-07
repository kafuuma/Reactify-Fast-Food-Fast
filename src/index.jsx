import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
