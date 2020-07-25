import React from 'react';
import ReactDOM from 'react-dom';
// Auth stuff
import { Auth0Provider } from './auth/react-auth0-spa';
import { auth0Config } from './config';
import App from './components/App';

ReactDOM.render(
  <Auth0Provider {...auth0Config}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
