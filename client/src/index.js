import React from 'react';

import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: `/graphql`,
  cache: new InMemoryCache(),
});

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
<ApolloProvider client={client}>
<App name="positive-thoughts" />
</ApolloProvider>,)

reportWebVitals();