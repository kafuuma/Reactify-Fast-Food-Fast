import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import LoginForm from '../../components/Login/LoginForm';
import LoginUser from '../../actions/authActions/loginAction';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { message } = nextProps;
    if (message.message == 'login successfull') {
      toast.success(message.message);
      const { history } = this.props;
      window.localStorage.setItem('token', message.Athentication);
      history.push('/');
    } else {
      toast.error(message.message);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { LoginUser } = this.props;
    LoginUser(this.state);
  };

  render() {
    return (
      <LoginForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Login.propTypes = {
  LoginUser: PropTypes.func
};

Login.defaultProps = {
  LoginUser: () => {}
};

export const mapStateToProps = state => ({
  message: state.login.user
});

export default connect(
  mapStateToProps,
  { LoginUser }
)(Login);
