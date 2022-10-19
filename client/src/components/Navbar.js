import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'
function Navbar() {
  return (
    
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link to={`/home`} className="nav-item nav-link navbar-brand">Positive Thoughts</Link> 
      </div>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div className="navbar-nav">

           <Link to={`/home`} className="nav-item nav-link">Home</Link> 
           <Link to={`/profile`} className="nav-item nav-link">Profile</Link> 
           <Link to={`/`} onClick={Auth.logout} className="nav-item nav-link"> Logout</Link> 
          
            </div>
        {/* </div> */}
    </nav>
  );
}

export default Navbar;