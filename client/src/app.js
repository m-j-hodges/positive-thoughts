import React from 'react';
import Home from './pages/home';
import Profile from './pages/profilePage';
import Login from './pages/login';
import SignUp from './pages/signUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
// import thoughtsPage from './pages/thoughtsPage';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql
} from "@apollo/client";

const httpLink = createHttpLink({
  uri:'/graphql',
})

const authLink = setContext((_, {headers}) => {

  const token = localStorage.getItem('id_token')
  return {
    headers: {
      ...headers, authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

//    let Component
//    switch (window.location.pathname) {
//      case "/":
//        Component = <Login />
//        break
//        case "/signUp":
//        Component = <SignUp />
//        break
//        case "/home":
//        Component = <Home />
//        break
//        case "/profile":
//        Component = <Profile />
//        break
// }

    return (
      
<ApolloProvider client={client}>
      <Router>
       
       <div className="container">
         <Routes>
           <Route 
             path="/" 
             element={<Login />} 
           />
           <Route 
             path="/home" 
             element={<Home />} 
           />
           <Route 
             path="/signUp" 
             element={<SignUp />} 
           />
           <Route 
             path="/profile" 
             element={<Profile />} 
           />
         </Routes>
       </div>

   </Router>
    </ApolloProvider>
    );
  }

  export default App;