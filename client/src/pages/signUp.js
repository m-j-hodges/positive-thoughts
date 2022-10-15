import React from 'react';
import './signUp.css';
//import Navbar from '../components/Navbar';

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
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-2">Sign up</h2>
              <h5 className='mb-5'>to receive inspiring quotes</h5>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' placeholder='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' placeholder='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              
              <MDBInput wrapperClass='mb-4' placeholder='email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' placeholder='Password' id='form4' type='password'/>

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

        <MDBCol col='6'>
          <p className='align-items-center'>Positive Thoughts</p>
        <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid w-100 rounded shadow-4' alt='' fluid/>
        
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default signUp



// function signUp() {
//   return (
//     <div className='signUp form-group container'>

//       <form className='card'>
//         <div className='text-center'>
//           <h3>Sign Up</h3>    
//           <h5>to recieve free inspiring quotes</h5>
//         </div>
        
//         {/* user enters name */}
//         {/* <label>First Name</label> */}
//         <div className='container'>
//           <div className='row'>
//             <div className='col'>
//               <input name="name" type="text" placeholder="First name" className="userInput form-control" />
//             </div>    
//             {/* <label>Last Name</label> */}
//             <div className='col'>
//               <input name="name"  type="text" placeholder="Last name" className="userInput form-control" />
//             </div>
//           </div>
//           <div className='col'> 
//             {/* user enters email */}
//             {/* <label>Enter your email:</label> */}
//             <input  name="email"  type="email" placeholder="email" className="userInput form-control" />
            
//             {/* user enters mobile number */}
//             {/* <label>Mobile number</label> */}
//             <input  name="email"  type="email" placeholder="mobile number" className="userInput form-control" />
            
//             {/* user enters password */}
//               {/* <label>Password</label> */}
//             <input  name="password"  type="password" placeholder="password" className="userInput form-control" />

//             <div className='text-center'>  
//               <small id="emailHelp" className="form-text text-muted">By clicking Sign Up, you agree to Positive Thoughts's Terms and Conditions of Use.</small>
//               <button type="button" className='btn btn-success btn-lg'>Sign Up</button>
//             </div>
//             </div>
//           </div>
      
//       </form>
// </div>
    
//   )
// };

// export default signUp