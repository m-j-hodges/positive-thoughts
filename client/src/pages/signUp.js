import React from 'react';
import '../styles/signUp.css';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
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

              <h2 className="fw-bold mb-2">Sign up</h2>
              <h5 className='mb-5'>to receive inspiring quotes</h5>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              
              <MDBInput wrapperClass='mb-4' label='email' id='typeEmail' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='typePassword' type='password'/>

              <MDBBtn className='w-100 mb-4' size='md'>Sign Up</MDBBtn>

              <div className="text-center">

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
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        {/* image with logo above....still working on logo */}
        <MDBCol size='lg' col='6'>
          <p className='text-center'>Positive Thoughts</p>
        <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid w-100 rounded shadow-4' alt='' fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default signUp

