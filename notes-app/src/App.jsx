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

import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Notes from "./Components/Notes";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import PageLoader from "./Components/PageLoader";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  useLocation,
  useNavigationType,
  useNavigate,
} from "react-router-dom";
import NotesMain from "../pages/Notes/NotesMain";
import axiosInstance from "../utils/axiosInstance";

// const routes = (
//   <Router>
//     <Routes>
//       <Route path='/login' exact element={<Login/>} />
//       <Route path='/signUp' exact element={<Login/>} />
//     </Routes>
//   </Router>
// );

const MainLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }

  }, [location, navigationType]);

  //  **************************************************************************

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  // **************************************************************************

  return (
    <>
      <Navbar userInfo={userInfo} />
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
    path: "/notes",
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
    path: "/contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <MainLayout>
        <SignUp />
      </MainLayout>
    ),
  },
  {
    path: "/notes-updated",
    element: (
      <MainLayout>
        <NotesMain />
      </MainLayout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
