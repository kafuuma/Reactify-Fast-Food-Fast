import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './Router';
import './App.css';
/**
 * create the main component
 * @returns {<Routes />} route component
 * @argument {props} props
 */

const App = () => (
  <div className="App">
    <Routes />
  </div>
);

export default hot(module)(App);
