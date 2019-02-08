import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import signupUser from '../../actions/authActions/signupActions';
import SignupForm from '../../components/signup/SignupForm';

export class Signup extends Component {
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
    const { message } = nextProps;
    if (message == 'signup successfull') {
      toast.success(message);
      const { history } = this.props;
      history.push('/login');
    } else {
      toast.error(message);
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signupUser } = this.props;
    signupUser(this.state);
  };

  render() {
    return (
      <SignupForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
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
  return {
    message: state.signup.user,
    time_flag: state.signup.time_flag
  };
};

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup);
