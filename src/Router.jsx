import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import NotFound from './containers/NotFound/NotFound';

export const Signup = () => <div>This is Signup page</div>;
export const Login = () => <div>This is Login Page</div>;

const Routes = () => (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path="/signup" component={Signup} exact />
        <Route path="/login" component={Login} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </Provider>
  </Router>
);
export default Routes;
