import React from 'react'


function navBar() {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Positive Thoughts</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/Home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/profile">Profile</a>
            <a class="nav-item nav-link" href="/signup">Sign Up</a>
            <a class="nav-item nav-link" href="/signup">Login</a>
            </div>
        </div>
    </nav>
  );
}

export default navBar;