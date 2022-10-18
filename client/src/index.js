import React from 'react';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom/client'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App name="positive-thoughts" />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();