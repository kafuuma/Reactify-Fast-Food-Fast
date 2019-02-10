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

const SignupForm = ({ handleSubmit, handleChange }) => {
  return (
    <MDBContainer>
      <MDBRow className="d-flex flex-center pt-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    name="full_name"
                    onChange={handleChange}
                    label="Your username"
                    icon="user"
                    group
                    type="text"
                    validate
                    required={true}
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    name="email"
                    onChange={handleChange}
                    label="Your email"
                    icon="envelope"
                    required={true}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    name="contact"
                    onChange={handleChange}
                    label="Your contact"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    required={true}
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    name="password"
                    onChange={handleChange}
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    required={true}
                  />
                  <MDBInput
                    name="confirm_password"
                    onChange={handleChange}
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    required={true}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn id="bg" type="submit">
                    Register
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

export default SignupForm;
