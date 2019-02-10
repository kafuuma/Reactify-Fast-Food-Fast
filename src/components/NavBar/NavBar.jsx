import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from 'mdbreact';
import { connect } from 'react-redux';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      active_state: {
        login: 'inactive',
        signup: 'inactive',
        home: 'active'
      },
      hide: { login: 'd-none', signup: '' }
    };
    false;
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.checkToken();
    const path = window.location.pathname.substring(1);
    this.Active(path);
  }

  checkToken = () => {
    const token = window.localStorage.getItem('token');
    console.log(token, '@@@@@');

    if (token) {
      if (token == '') {
        this.setState({
          hide: { signup: '', login: '', logout: '', logout: 'd-none' }
        });
      } else {
        this.setState({
          hide: { signup: 'd-none', login: 'd-none', logout: '' }
        });
      }
    } else {
      this.setState({
        hide: { signup: '', login: '', logout: '', logout: 'd-none' }
      });
    }
  };

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  logout = () => {
    setTimeout(() => {
      window.localStorage.setItem('token', '');
      this.checkToken();
      this.Active('home');
    }, 200);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      setTimeout(() => {
        this.Active('login');
      }, 200);
    }
    if (nextProps.loggedIn) {
      setTimeout(() => {
        const path = window.location.pathname.substring(1);
        this.checkToken(path);
        this.Active('login');
      }, 200);
    }
  }

  Active = value => {
    if (value === 'home') {
      this.setState({
        active_state: {
          login: 'inactive',
          signup: 'inactive',
          home: 'active'
        }
      });
    } else if (value === 'login') {
      this.setState({
        active_state: {
          login: 'active',
          signup: 'inactive',
          home: 'inactive'
        }
      });
    } else if (value === 'signup') {
      this.setState({
        active_state: {
          login: 'inactive',
          signup: 'active',
          home: 'inactive'
        }
      });
    }
  };

  render() {
    const bgPink = { backgroundColor: '#ff3300' };
    const { hide, active_state } = this.state;
    const loginclasses = `${active_state.login} ${hide.login}`;
    const signupclasses = `${active_state.signup} ${hide.signup}`;

    const logoutclasses = `${hide.logout}`;

    return (
      <div>
        <header>
          <MDBNavbar style={bgPink} dark expand="md" fixed="top">
            <MDBNavbarBrand href="/">
              <strong>Fast Food Fast</strong>
            </MDBNavbarBrand>
            {!this.state.isWideEnough && (
              <MDBNavbarToggler id="togler" onClick={this.onClick} />
            )}
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav right>
                <MDBNavItem
                  onClick={() => {
                    this.Active('home');
                  }}
                  className={this.state.active_state.home}
                >
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  onClick={() => {
                    this.Active('signup');
                  }}
                  className={signupclasses}
                >
                  <MDBNavLink to="/signup">Signup</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  onClick={() => {
                    this.Active('login');
                  }}
                  className={loginclasses}
                >
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem onClick={this.logout} className={logoutclasses}>
                  <MDBNavLink to="/">Logout</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { loggedIn: state.login.user, signup: state.signup.user };
};

export default connect(mapStateToProps)(NavBar);
