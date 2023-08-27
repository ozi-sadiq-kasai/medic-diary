import React from 'react'
import ReactDOM from 'react-dom/client'
import { app } from "./firebaseConfig"
// import App from './App.jsx'
// import './index.css'
import Login from './Pages/Login.jsx'
import Post from './Pages/Post.jsx'
import Register from './Pages/Register.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
   <RouterProvider router={router} />
   <ToastContainer/>
  </React.StrictMode>
)
