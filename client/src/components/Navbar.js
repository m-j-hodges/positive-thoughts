import React from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Positive Thoughts</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
            
           <Link to={`/profile`}><a className="nav-item nav-link" href="/profile">Profile</a></Link> 
           <Link to={`/signUp`}> <a className="nav-item nav-link" href="/signUp">Sign Up</a></Link> 
            <a className="nav-item nav-link" href="/">Login</a>
            {/* <Link to={`/logOut`}> <a className="nav-item nav-link" href="/logOut">Log out</a></Link>  */}
            </div>
        </div>
    </nav>
  );
}

export default Navbar;