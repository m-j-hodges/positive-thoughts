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
import { useMutation } from '@apollo/client';
import {NEW_USER} from "../utils/createUser";
import Auth from "../utils/auth";

function SignUp() {

const [successNote, setSuccess] = useState('d-none') 
// set initial form state
const [userFormData, setUserFormData] = useState({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
});

const [addUser, { error }] = useMutation(NEW_USER);


const handleInputChange = (event) => {
  const { name, value } = event.target;
  setUserFormData({ ...userFormData, [name]: value });
};

const handleFormSubmit = async (event) => {
  event.preventDefault();

  // check if form has everything (as per react-bootstrap docs)
  const form = event.currentTarget;
 

  try {
    const { data } = await addUser({
      variables: { ...userFormData },
    });
    if(data) {
      setSuccess('d-block')
    }
    console.log(data);
    Auth.login(data.addUser.token);
  } catch (err) {
    console.error(err);
  }

  setUserFormData({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });
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
                  <form onSubmit={handleFormSubmit}>
                    <h2 className="fw-bold mb-2">Sign up</h2>
                    <h5 className='mb-5'>to receive inspiring quotes</h5>   
                      {/* <label for="form1"> first name:</label> */}
                  <MDBRow>
                    <MDBCol className='col-6'>
                      <MDBInput name='firstName' wrapperClass='mb-4' onChange={handleInputChange} label='First Name' id='form1' type='text'/>
                    </MDBCol> 
                    <MDBCol className='col-6'>
                      <MDBInput name='lastName' wrapperClass='mb-4' onChange={handleInputChange} label='Last Name' id='form2' type='text'/>
                    </MDBCol>
                  </MDBRow>
                    <MDBInput name='username' wrapperClass='mb-4' onChange={handleInputChange} label='username' id='form3' type='text'/>
                    <MDBInput name='email' wrapperClass='mb-4' onChange={handleInputChange} label='email' id='typeEmail' type='email'/>
                    <MDBInput name='password' wrapperClass='mb-4' onChange={handleInputChange} label='Password' id='typePassword' type='password'/>
                    <MDBBtn className='w-100 mb-4'  size='md'>Sign Up</MDBBtn>
                    <div className={successNote}>Account Created&#128077;</div> 
                        
                  </form>
                    
                      
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

