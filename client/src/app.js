import React from 'react';
import Home from './pages/home';
// import Profile from './pages/profilePage';
import Login from './components/login';
import SignUp from './pages/signUp';
// import thoughtsPage from './pages/thoughtsPage';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";


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
      case "/login":
      Component = <Login />
      break
      // case "/resume":
      //   Component = <Resume />
      //   break
  }

    return (
      <ApolloProvider client={client}>
      <div>
        {Component}
      </div>
      </ApolloProvider>
    );
  }

  export default App;