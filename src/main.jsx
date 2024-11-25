import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import AuthProvider from './proviers/AuthProvider';
import Orders from './Components/Orders/Orders';
import PrivateRout from './assets/routs/PrivateRout';
import Profile from './Components/profile/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'orders',
        element: <PrivateRout><Orders></Orders></PrivateRout>
      },
      {
        path: 'profile',
        element:<PrivateRout><Profile></Profile></PrivateRout>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
