import React from 'react';
import '../styles/signUp.css';
import image from '../images/shutterstock_299372690.jpg'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  // MDBIcon,
  MDBRow,
  MDBCol
}
from 'mdb-react-ui-kit';

function signUp() {
  return (
    <MDBContainer fluid className='my-5'>
      <MDBRow className='g-0 align-items-center'>
        <MDBCol size='lg' col='6'>
          <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>
              <MDBRow className='g-0 align-items-center'>
                {/* <MDBCol size='lg' md='5' col='6'> */}
                {/* logo image */}
                <MDBCol className='mr-5 mb-3' md='5' col='4'>
                  <MDBCardImage src={image}  className='w-0' fluid />
                </MDBCol>
                <MDBCol>    
                  <h2 className="fw-bold mb-2">Sign up</h2>
                  <h5 className='mb-5'>to receive inspiring quotes</h5>
                  <MDBRow>
                    <MDBCol col='4'>
                      <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                    </MDBCol>
                  
                    <MDBCol col='4'>
                      <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                    </MDBCol>
                  </MDBRow>
                    <MDBInput wrapperClass='mb-4' label='email' id='typeEmail' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='typePassword' type='password'/>
                    <MDBBtn className='w-100 mb-4' size='md'>Sign Up</MDBBtn>
                </MDBCol>
              </MDBRow>

              {/* future development for SSO */}
              {/* <div className="text-center">

              <p>or sign up with:</p>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
              </div> */}

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow> 
    </MDBContainer>
  );
}

export default signUp

