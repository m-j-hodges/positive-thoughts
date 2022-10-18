import React, {useState} from 'react';
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

function SignUp() {

const [firstNameInput, setFirstName] = useState('')
const [lastNameInput, setLastName] = useState('')
const [emailInput, setEmail] = useState('')
const [passwordInput, setPassword] = useState('')


function createUser() {
  

}

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
                  <div className='row'>
                    <div className="col-4 d-block">
                      {/* <label for="form1"> first name:</label> */}
                      <input className="form-control" onChange={(e) => setFirstName(e.target.value)} label='First name' id='form1' type='text'/>

                    </div>
                  
                    <div className="col-4">
                      <input  className="form-control" onChange={(e) => setLastName(e.target.value)} label='Last name' id='form2' type='text'/>
                    </div>
                  </div>
                    <MDBInput wrapperClass='mb-4' onChange={(e) => setEmail(e.target.value)} label='email' id='typeEmail' type='email'/>
                    <MDBInput wrapperClass='mb-4' onChange={(e) => setPassword(e.target.value)} label='Password' id='typePassword' type='password'/>
                    <MDBBtn className='w-100 mb-4' onClick={(e) => createUser} size='md'>Sign Up</MDBBtn>
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

export default SignUp

