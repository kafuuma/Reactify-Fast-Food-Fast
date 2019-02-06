import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../../components/Login/LoginForm';
import LoginUser from '../../actions/authActions/loginAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const errors = nextProps.data;
    if (errors) {
      this.setState({ errors: errors });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    console.log('this was deleted');
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
  //data: state.user.user
});

export default connect(
  mapStateToProps,
  { LoginUser }
)(Login);
