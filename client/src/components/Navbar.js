import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'
function Navbar() {
  return (
    
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Positive Thoughts</a>
      </div>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div className="navbar-nav">

           <Link to={`/home`}><a className="nav-item nav-link" href="/home">Home</a></Link> 
           <Link to={`/profile`}><a className="nav-item nav-link" href="/profile">Profile</a></Link> 
           <Link onClick={Auth.logout}  to={`/`}> <a className="nav-item nav-link" href="/">Logout</a></Link> 
          
            </div>
        {/* </div> */}
    </nav>
  );
}

export default Navbar;