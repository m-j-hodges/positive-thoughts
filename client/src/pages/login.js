import React, { useState, useEffect } from 'react';
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

import '../styles/loginPage.css';
// import {useMutation} from '@apollo/client'
// import { LOGIN } from '@apollo/client'
// import Auth from '../utils/auth';


export default function Login() {

    // const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);
  
    // const [login, { error }] = useMutation(LOGIN);
  
    // useEffect(() => {
    //   if (error) {
    //     setShowAlert(true);
    //   } else {
    //     setShowAlert(false);
    //   }
    // }, [error]);
  
    // const handleInputChange = (event) => {
    //   const { name, value } = event.target;
    //   setUserFormData({ ...userFormData, [name]: value });
    // };
  
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
  
    //   const form = event.currentTarget;
    //   if (form.checkValidity() === false) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //   }
  
    //   try {
    //     const { data } = await login({
    //       variables: { ...userFormData },
    //     });
  
    //     console.log(data);
    //     Auth.login(data.login.token);
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    //   // clear form values
    //   setUserFormData({
    //     email: '',
    //     password: '',
    //   });
  
  
    // }





   return (
    
    <MDBContainer className='my-5'>
       <MDBCard className='square border border-primary border-3 rounded-6'>
      
        <MDBRow className='g-0 d-flex align-items-center'>
        
          <MDBCol md='5'>
            <MDBCardImage src={image}  className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='6'>
          <MDBTypography className='text-center h1'>Positive Thoughts</MDBTypography>
            <MDBCardBody>
                         
              <MDBInput className='col-xs-2' wrapperClass='mb-4' label='email address' id='typeEmail' type='email'/>
              <MDBInput wrapperClass='mb-4' label='password' id='typePassword' type='password'/>
              
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
              <MDBBtn className="mb-4 w-100" href="/signUp">Sign up</MDBBtn>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}