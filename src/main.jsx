import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import MessageProvider from './Components/MessageProvider/MessageProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MessageProvider>
    <RouterProvider router={router} />
    </MessageProvider>
  </React.StrictMode>,
)
