import React from 'react';
import '../app.css';


function signUp() {
  return (
    <div className='signUp form-group container'>

      <form className='card'>
        <div className='text-center'>
          <h3>Sign Up</h3>    
          <h5>to recieve free encouraging quotes</h5>
        </div>
        
        {/* user enters name */}
        {/* <label>First Name</label> */}
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <input name="name" type="text" placeholder="First name" className="userInput form-control" />
            </div>    
            {/* <label>Last Name</label> */}
            <div className='col'>
              <input name="name"  type="text" placeholder="Last name" className="userInput form-control" />
            </div>
          </div>
          <div className='col'> 
            {/* user enters email */}
            {/* <label>Enter your email:</label> */}
            <input  name="email"  type="email" placeholder="email" className="userInput form-control" />
            
            {/* user enters mobile number */}
            {/* <label>Mobile number</label> */}
            <input  name="email"  type="email" placeholder="mobile number" className="userInput form-control" />
            
            {/* user enters password */}
              {/* <label>Password</label> */}
            <input  name="password"  type="password" placeholder="password" className="userInput form-control" />

            <div className='text-center'>  
              <small id="emailHelp" className="form-text text-muted">By clicking Sign Up, you agree to Positive Thoughts's Terms and Conditions of Use.</small>
              <button type="button" className='btn btn-success btn-lg'>Sign Up</button>
            </div>
            </div>
          </div>
      
      </form>
</div>
    
  )
};

export default signUp