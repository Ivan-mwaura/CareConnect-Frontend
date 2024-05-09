import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../App.css";
import { Audio } from 'react-loader-spinner'


// Lazy load components
const Homepage = React.lazy(() => import("../HomePage/Homepage"));
const Login = React.lazy(() => import("../Login/login")); // Corrected import path
const SignUp = React.lazy(() => import("../SignUp/SignUp"));
const WelcomePage = React.lazy(() => import("../../WelcomePage/WelcomePage"));
const AdminHomepage = React.lazy(() => import("../AdminHomepage/AdminHomepage"));


const Layout = () => {

  const [loading, setLoading] = React.useState(true);

  const loaderContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Adjust this as needed
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Set the delay duration in milliseconds (e.g., 5000 ms = 5 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={ loading ? <div style={loaderContainer}>

      <Audio
        height="80"
        width="80"
        radius="9"     
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
    />
    </div> : null}>
 
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/adminpage"element={<AdminHomepage/>}/>
          </Routes>

    </Suspense>
  );
};

export default Layout;
