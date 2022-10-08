import React from 'react';


function signUp() {
  return (
    <div>
    <h3>Contact Me</h3>
    <form className="form">
        <label>Enter your name:</label>
        <input name="name"  type="text" placeholder="name" class="form-control" />
        <label>Enter your email:</label>
        <input  name="email"  type="email" placeholder="Email" class="form-control" />
        <label>Leave a message:</label>
        <textarea name="password"  type="textarea" placeholder="Please enter a message." rows="4" class="form-control" />
        <br></br>
        <button type="button" >Submit</button></form>
</div>
    
  )
};

export default signUp