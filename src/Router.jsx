import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import NotFound from './containers/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

const Routes = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/" component={NavBar} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </Router>
);
export default Routes;
