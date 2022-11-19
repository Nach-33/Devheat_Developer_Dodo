import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const passwordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const loginClick = async () => {
    if (username === "" || password === "") {
      window.alert("No Field can be empty");
      return;
    }
    const requestBody = JSON.stringify({
      username,
      password,
    });
    try {
      const response = await fetch("http://localhost:4000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const { token} = await response.json();
      localStorage.setItem("user", token);
      const path = "/dashboard";
      window.location.href = path;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section
        className="justify-content-start row m-0"
        style={{
          height: "100vh",
          width: "100%",
          background: "rgb(34, 33, 35)",
        }}
      >
        <div className="col-md-6 p-4 text-light d-flex align-items-center justify-content-center" style={{backgroundColor:"#040C18"}}>
          <div className="col-md-7">
            <div className="col d-flex flex-column align-items-start">
              <div className="mb-3">
                <h1 className="fw-bold">Login</h1>
                <p>Get Started with demo cash and start your trading journey</p>
              </div>
              <label className="form-label my-1" style={{ fontSize: "1.3rem" }}>
                Email
              </label>
              <input
                type="username"
                className="form-control my-1 w-75"
                id="username"
                placeholder="Eg. abc@xyz.com"
                onChange={emailChange}
                value={username}
              />
              <label className="form-label my-1" style={{ fontSize: "1.3rem" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control my-1 w-75"
                id="password"
                placeholder="Set A Password"
                onChange={passwordChange}
                value={password}
              />
              <div className="row w-100 justify-content-start mt-4 mb-3 mx-0">
                <div
                  className="btn btn-outline-primary my-1 p-2 rounded-pill w-75"
                  onClick={loginClick}
                >
                  Login
                </div>
              </div>
              <p>Not Registered Yet? <Link to="/register" className="text-primary">Create an account</Link></p>
            </div>
          </div>
        </div>
        <div className="col-md-6  p-4"  >

        </div>
      </section>
    </>
  );
}

export default Login;
