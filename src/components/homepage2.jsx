import React from "react";
import Navbar_loggedin from "../Elements/Navbars/navbar_loggedin";
import Header from "../Elements/Headers/Header";
import Feautres from "../Elements/feautres/Feautres";
import Homepagesignup from "../Elements/Homepagesignup/Homepagesignup";
import Blog from "../Elements/blog/blog";
import Footer from "../Elements/footer/footer";
function homepage2() {
  return (
    <>
    {/* Renders components of homepage after log in */}
    <div className="gradient__bg">
      <Navbar_loggedin />
      <Header />
      <Feautres />
      <Homepagesignup />
      <Blog />
      <Footer /></div>
      
    </>
  );
}

export default homepage2;
