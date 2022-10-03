import React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
  }  from "@apollo/client";

  //next three lines direct from an activity, they have not been properly defined yet
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

//client configuration
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

//code on line 22-29 from an activity, code has not amended to our wireframing yet
function App() {
    return (
      <ApolloProvider client={client}>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Home />
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  }

  export default App;