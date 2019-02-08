import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import store from './store';
import NotFound from './containers/NotFound/NotFound';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import NavBar from './components/NavBar/NavBar';

const Routes = () => {
  return (
    <Router>
      <Provider store={store}>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/signup" component={Signup} exact />
          <Route path="/login" component={Login} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default Routes;
