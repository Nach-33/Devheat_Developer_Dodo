import React from "react";
import Navbar_loggedin from "../Elements/Navbars/navbar_loggedin";
import Header from "../Elements/Headers/Header";
import Feautres from "../Elements/feautres/Feautres";
import Homepagesignup from "../Elements/Homepagesignup/Homepagesignup";
import Blog from "../Elements/blog/blog";
function homepage2() {
  return (
    <>
    {/* Renders components of homepage after log in */}
      <Navbar_loggedin />
      <Header />
      <Feautres />
      <Homepagesignup />
      <Blog />
    </>
  );
}

export default homepage2;
