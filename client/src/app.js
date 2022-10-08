import React from 'react';
import Home from './pages/home';
// import {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     createHttpLink,
//   }  from "@apollo/client";
//   import { setContext } from '@apollo/client/link/context';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  //next three lines direct from an activity, they have not been properly defined yet

// import Header from './components/Header';
// import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//     uri: '/graphql',
//   });

  // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('id_token');
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token}` : '',
//       },
//     };
//   });
//client configuration
// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
// });

//code on line 22-29 from an activity, code has not amended to our wireframing yet
function App() {
    return (
      <div>
        hello 
        <Home />


      </div>
      
    );
  }

  export default App;