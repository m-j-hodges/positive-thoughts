import React, { useState } from 'react';
import image from '../images/PositiveThoughts.bmp'
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginPage.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/loginMutation';

import Auth from '../utils/auth';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
}
from 'mdb-react-ui-kit';


const Login = (props) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);
  let navigate = useNavigate();

// Change userFormData when input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };
//Submit form 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
      navigate(`/home`);
    } catch (e) {
      console.error(e);
    }

// Clear the form values
    setUserFormData({
      email: '',
      password: '',
    });
  };



  return (

    <MDBContainer fluid className='my-5'>
    <MDBRow className='g-0 align-items-center'>
      <MDBCol size='lg' col='6'>
        <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
          <MDBCardBody className='p-5 shadow-5 text-center'>
            <MDBRow className='g-0 align-items-center'>
              <MDBCol className='mr-5 mb-3' md='5' col='4'>
                <MDBCardImage src={image}  className='w-0' fluid />
              </MDBCol>
              <MDBCol>   
                
                <form onSubmit={handleFormSubmit}>
                <h2 className="fw-bold mb-5">Positive Thoughts</h2>
               {/* future development... */}
                  {/* <MDBInput name='username' wrapperClass='mb-4' onChange={handleInputChange} label='username' id='form3' type='text'/> */}
                  <MDBInput name='email' wrapperClass='mb-4' onChange={handleInputChange} label='Email Address' id='typeEmail' type='email'/>
                  <MDBInput name='password' wrapperClass='mb-4' onChange={handleInputChange} label='Password' id='typePassword' type='password'/>
                  <MDBBtn className='w-100 mb-4' size='lg'>Login</MDBBtn>
                  <h6 className="mb-2">Don't have an account?</h6>
                  <Link to="/signUp"><MDBBtn className="mb-4 w-100" size='lg'>Sign Up</MDBBtn></Link>
                      
                </form>  
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow> 
    </MDBContainer>
  
  );
};
    export default Login;