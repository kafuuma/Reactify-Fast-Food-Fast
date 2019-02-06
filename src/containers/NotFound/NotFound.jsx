import React from 'react';
import { MDBContainer } from 'mdbreact';
import notFound from '../../assets/notFound.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <MDBContainer className="w-75 mt-5 pt-5">
      <div style={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <img src={notFound} alt="NotFoud" />
      </div>
    </MDBContainer>
  );
};
export default NotFound;
