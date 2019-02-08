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

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      homeActive: false,
      signupActive: false,
      loginActive: false
    };
    false;
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  homeActive = () => {
    this.setState({
      homeActive: true,
      signupActive: false,
      loginActive: false
    });
  };

  signupActive = () => {
    this.setState({
      homeActive: false,
      signupActive: true,
      loginActive: false
    });
  };
  loginActive = () => {
    this.setState({
      homeActive: false,
      signupActive: false,
      loginActive: true
    });
  };

  render() {
    const bgPink = { backgroundColor: '#ff3300' };
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
                  onClick={this.homeActive}
                  active={this.state.homeActive}
                >
                  <MDBNavLink to="/">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  onClick={this.signupActive}
                  active={this.state.signupActive}
                >
                  <MDBNavLink to="/signup">Signup</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem
                  onClick={this.loginActive}
                  active={this.state.loginActive}
                >
                  <MDBNavLink to="/login">Login</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default NavBar;
