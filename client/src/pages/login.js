import React, { useState } from 'react';
import image from '../images/PositiveThoughts.bmp'
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
import '../styles/loginPage.css';
import {useMutation} from '@apollo/client'
import { LOGIN } from '../utils/loginMutation'
import Auth from '../utils/auth';


export default function Login() {

    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [login, { error}] = useMutation(LOGIN);

  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setUserFormData({
         ...userFormData, 
         [name]: value 
        });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
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
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setUserFormData({
        email: '',
        password: '',
      });
  
  
    }





   return (
    
    <div className='my-5'>
       
      
        <div className='card row '>
        
          <div className="col" md='5'>
            <img src={image} alt={"login"}  width={250}
              height={250}  className=''/>
          </div>

          <div className="card-body" md='6'>
          <h5 className='text-center h1'>Positive Thoughts</h5>
           
                <form onSubmit={handleFormSubmit}>
                  
              <input name='email' onChange={handleInputChange} className='col-xs-2'  label='email address' id='typeEmail' type='email'/>
              <input name='password'  onChange={handleInputChange}  label='password' id='typePassword' type='password'/>

              <button className="mb-4 w-100">Sign in</button>
              <button className="mb-4 w-100" href="/signUp">Sign up</button>
                </form>         

          </div>

        </div>

      </div>
  
  );
}