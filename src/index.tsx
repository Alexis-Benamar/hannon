import React from 'react'

import { GoogleOAuthProvider } from '@react-oauth/google'
import ReactDOM from 'react-dom/client'

import App from './App'
import './app.css'
import './reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
