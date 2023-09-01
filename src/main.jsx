import React from 'react'
import ReactDOM from 'react-dom/client'
import { app } from "./firebaseConfig"
import App from './App.css'
import './index.scss'
import Login from './Pages/Login.jsx'
import Post from './Pages/Post.jsx'
// import Profile from './Pages/Profile.jsx'
import Register from './Pages/Register.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfileLayout from './Layout/ProfileLayout'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/post",
    element: <Post/>,
  },   
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/profile",
    element: <ProfileLayout/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer/>
  </React.StrictMode>
)
