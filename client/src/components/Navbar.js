import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth'
function Navbar() {
  return (


    <nav className="navbar fixed-top navbar-expand-lg  bg-light">
      <div className="container-fluid">
        <Link to={`/home`} className="nav-item nav-link navbar-brand ml-4 text-primary " style={{ color: '#1974d2' }}><strong>Positive Thoughts</strong></Link>
      </div>
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
      <div className="navbar-nav mr-4">

        <Link to={`/home`} className="nav-item nav-link text-primary">Home</Link>
        <Link to={`/profile`} className="nav-item nav-link text-primary">Profile</Link>
        <Link to={`/`} onClick={Auth.logout} className="nav-item nav-link text-primary"> Logout</Link>

      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;