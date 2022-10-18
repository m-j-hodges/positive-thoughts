import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
const root = ReactDOM.createRoot(document.getElementById( 'root'));
root.render(
  <React.StrictMode>
      <App />
    </React.StrictMode>,
)


reportWebVitals();