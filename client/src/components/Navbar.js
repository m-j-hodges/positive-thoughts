import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'
function Navbar() {
  return (
    
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link to={`/home`} className="nav-item nav-link navbar-brand">Positive Thoughts</Link> 
      </div>
    
          <Link to={`/home`} className="nav-item nav-link" href="/home">Home</Link> 
          <Link to={`/profile`} className="nav-item nav-link" >Profile</Link> 
          <Link onClick={Auth.logout}  to={`/`} className="nav-item nav-link" href="/">Logout</Link> 
   
    </nav>
     
  );
}

export default Navbar;