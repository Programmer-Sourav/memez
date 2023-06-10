import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { makeServer } from "./server";

import { BrowserRouter } from 'react-router-dom';
import { ApplicationContext, ApplicationProvider } from './context/ApplicationContext.jsx';

export { ApplicationContext }

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApplicationProvider>
    <App />
    </ApplicationProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
