import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Overview from "./components/Profile/Overview";
import Prices from "./components/Profile/Prices";
import Features from "./components/Profile/Features";
import Reveiws from "./components/Profile/Reveiws";
import Photos from "./components/Profile/Photos";


const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} >
            <Route path="overview" element={<Overview />} />
            <Route path="features" element={<Features/>} />
            <Route path="prices" element={<Prices/>} />
            <Route path="photos" element={<Photos/>} />
            <Route path="reveiws" element={<Reveiws/>} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
