import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Notes from './Components/Notes'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login'


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
  },
  {
    path: "/Notes",
    element: <><Navbar/><Notes/></>
  },
  {
    path: "/AboutUs",
    element: <><Navbar/><AboutUs/></>
  },
  {
    path: "/Contact",
    element: <><Navbar/><Contact/></>
  },
  // {
  //   path: "/Login",
  //   element: <Login/>
  // },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
