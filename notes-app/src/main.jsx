import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-6rem56bphs8i75qh.us.auth0.com"
  clientId="t6szebgcYSnvGuDsU5ExJ3Yl5lrAfAxC"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
)
