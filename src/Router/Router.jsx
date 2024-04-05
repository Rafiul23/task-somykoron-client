import Home from '../Components/Home/Home';
import ShowMessages from '../Components/ShowMessages/ShowMessages';
import Users from '../Components/Users/Users';
import WriteMessage from '../Components/WriteMessage/WriteMessage';
import Root from './../Root/Root';
import {
    createBrowserRouter
  } from "react-router-dom";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: '/users',
            element: <Users></Users>
        },
        {
            path: '/addmessage',
            element: <WriteMessage></WriteMessage>
        },
        {
            path: '/messages',
            element: <ShowMessages></ShowMessages>
        }
      ]
    },
  ]);

export default router;  