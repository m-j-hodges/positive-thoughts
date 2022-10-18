import React, { useState } from 'react';
import image from '../images/PositiveThoughts.bmp'
import { useNavigate, Link } from 'react-router-dom';
import '../styles/loginPage.css';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/loginMutation';

import Auth from '../utils/auth';
// import {
//   MDBBtn,
//   MDBTypography,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox,
// }
// from 'mdb-react-ui-kit';



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

    <div className='my-5'>


      <div className='card row '>

        <div className="col" md='5'>
          <img src={image} alt={"login"} width={250}
            height={250} className='' />
        </div>

        <div className="card-body" md='6'>
          <h5 className='text-center h1'>Positive Thoughts</h5>

          <form onSubmit={handleFormSubmit}>

            <input name='email' onChange={handleInputChange} className='col-xs-2' label='email address' id='typeEmail' type='email' />
            <input name='password' onChange={handleInputChange} label='password' id='typePassword' type='password' />

            <button className="mb-4 w-100">Sign in</button>
          <Link to="/signUp"><button className="mb-4 w-100">Sign up</button></Link>  
                </form>         

          </div>

        </div>

      </div>
  
  );

};
    export default Login;