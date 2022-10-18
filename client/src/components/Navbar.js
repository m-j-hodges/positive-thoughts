import React from 'react';
import { Link } from 'react-router-dom';
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
           <Link to={`/logOut`}> <a className="nav-item nav-link" href="/logOut">Logout</a></Link> 
          
            </div>
        {/* </div> */}
    </nav>
  );
}

export default Navbar;