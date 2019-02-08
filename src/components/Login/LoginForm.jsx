import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from 'mdbreact';

const Login = ({ handleChange, handleSubmit }) => {
  const bgPink = { background: '#ff3300' };
  return (
    <MDBContainer>
      <MDBRow className="d-flex flex-center pt-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">
                  <MDBInput
                    name="email"
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleChange}
                  />
                  <MDBInput
                    name="password"
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={handleChange}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn id="bg" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
