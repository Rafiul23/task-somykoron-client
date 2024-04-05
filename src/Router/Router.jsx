import Home from '../Components/Home/Home';
import Users from '../Components/Users/Users';
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
        }
      ]
    },
  ]);

export default router;  