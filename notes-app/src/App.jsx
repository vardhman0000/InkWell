import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Notes from './Components/Notes'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/></>,
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
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
