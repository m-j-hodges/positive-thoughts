import React from 'react';
import Home from './pages/home';
// import Profile from './pages/profilePage';
import SignUp from './pages/signUp';
// import thoughtsPage from './pages/thoughtsPage';

function App() {

  let Component
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case "/":
      Component = <Home />
      break
      case "/signUp":
      Component = <SignUp />
      break
      // case "/contactMe":
      // Component = <ContactMe />
      // break
      // case "/resume":
      //   Component = <Resume />
      //   break
  }

    return (
      <div>
        {Component}
      </div>
      
    );
  }

  export default App;