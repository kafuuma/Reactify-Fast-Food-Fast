import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignupForm from '../../components/Signup/SignupForm';
import signupUser from '../../actions/authActions/signupActions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
      contact: '',
      password: '',
      confirm_password: ''
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
    e.preventDefault();
    const { signupUser } = this.props;
    signupUser(this.state);
  };

  render() {
    const { message } = this.props;
    console.log(message);
    return (
      <SignupForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        message={message}
      />
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func
};

Signup.defaultProps = {
  signupUser: () => {}
};

export const mapStateToProps = state => {
  console.log(state.signup.user, '....................');
  return {
    message: state.signup.user
  };
};

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
