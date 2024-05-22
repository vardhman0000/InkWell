// import './App.css'
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import Notes from './Components/Notes'
// import AboutUs from './Components/AboutUs'
// import Contact from './Components/Contact'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import PageLoader from './Components/PageLoader'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <><Navbar/><Home/><PageLoader/></>,
//   },
//   {
//     path: "/Notes",
//     element: <><Navbar/><Notes/></>
//   },
//   {
//     path: "/AboutUs",
//     element: <><Navbar/><AboutUs/></>
//   },
//   {
//     path: "/Contact",
//     element: <><Navbar/><Contact/></>
//   },
// ]);

// function App() {

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Notes from './Components/Notes';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import PageLoader from './Components/PageLoader';

import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useNavigationType,
} from "react-router-dom";

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();
  
  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [location, navigationType]);

  return (
    <>
      <Navbar />
      {loading && <PageLoader />}
      {!loading && children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/Notes",
    element: (
      <MainLayout>
        <Notes />
      </MainLayout>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
  {
    path: "/Contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

