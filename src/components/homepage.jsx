
import React from "react";
import Navbar from "../Elements/Navbars/Navbar";
import Header from "../Elements/Headers/Header";

function homepage() {
  return (
    <>
      <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
      </div>
      </div>
      
    </>
  );
}

export default homepage;
{/* <nav
        id="navbarclr"
        className="navbar navbar-expand-sm shadow zProp fixed-top"
      >
        <div className="container-fluid px-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">logo</ul>
            <form className="d-flex" role="search">
              <Link className="nav-link" to="/login">
                <button
                  id="loginbtnclr"
                  className="btn btn-outline-primary rounded-pill ms-auto"
                >
                  <i className="fa fa-sign-in me-2"></i>Login
                </button>
              </Link>
              <Link className="nav-link" to="/register">
                <button
                  id="loginbtnclr"
                  className="btn btn-outline-primary rounded-pill ms-2"
                >
                  <i className="fa fa-user-plus me-2"></i>Register
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav> */}