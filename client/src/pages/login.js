import React, { useState } from 'react';
import image from '../images/PositiveThoughts.bmp'
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginPage.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/loginMutation';

import Auth from '../utils/auth';
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


const Login = (props) => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);
  let navigate = useNavigate();


  const handleInputChange = (event) => {
  
    const { name, value } = event.target;
  

    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };
  //submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log("hi");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      console.log(userFormData)
      const { data } = await login({
        variables: { ...userFormData },
      });

      console.log(data);
      Auth.login(data.login.token);
      navigate(`/home`);
    } catch (e) {
      console.error(e);
    }

    // clear form values
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
              {/* logo image */}
              <MDBCol className='mr-5 mb-3' md='5' col='4'>
                <MDBCardImage src={image}  className='w-0' fluid />
              </MDBCol>
              <MDBCol>   
                
                <form onSubmit={handleFormSubmit}>
                <h2 className="fw-bold mb-5">Positive Thoughts</h2>
               
                  {/* <MDBInput name='username' wrapperClass='mb-4' onChange={handleInputChange} label='username' id='form3' type='text'/> */}
                  <MDBInput name='email' wrapperClass='mb-4' onChange={handleInputChange} label='Email Address' id='typeEmail' type='email'/>
                  <MDBInput name='password' wrapperClass='mb-4' onChange={handleInputChange} label='Password' id='typePassword' type='password'/>
                  <MDBBtn className='w-100 mb-4' size='lg'>Login</MDBBtn>
                  <MDBBtn className='w-100 mb-4' size='lg' href='/signUp'>Sign Up</MDBBtn>
                      
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