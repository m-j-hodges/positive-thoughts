import React from 'react';
import image from '../images/PositiveThoughts.bmp'
import {
  MDBBtn,
  MDBTypography,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
}

from 'mdb-react-ui-kit';

import '../styles/loginPage.css'

export default function Login() {
   return (
    
    <MDBContainer className='my-5'>
       <MDBCard className='square border border-primary border-3 rounded-6'>
      
        <MDBRow className='g-0 d-flex align-items-center'>
        
          <MDBCol md='4'>
            <MDBCardImage src={image}  className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='10'>
          <MDBTypography className='text-center h1'>Positive Thoughts</MDBTypography>
            <MDBCardBody>
                         
              <MDBInput className='col-xs-2' wrapperClass='mb-4' label='email address' id='typeEmail' type='email'/>
              <MDBInput wrapperClass='mb-4' label='password' id='typePassword' type='password'/>
              
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}