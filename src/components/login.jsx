import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
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
    if (email === "" || password === "") {
      window.alert("No Field can be empty");
      return;
    }
    const requestBody = JSON.stringify({
      email,
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
        className="d-flex justify-content-center align-items-center row m-0 p-2"
        style={{
          height: "100vh",
          width: "100%",
          background: "rgb(34, 33, 35)",
        }}
      >
        <div className="card col-md-5 p-4">
          <div className="row justify-content-center">
            <div className="col-md-9 d-flex flex-column align-items-start">
              <label className="form-label my-1" style={{ fontSize: "1.5rem" }}>
                Email Address
              </label>
              <input
                type="email"
                className="form-control my-1"
                id="email"
                placeholder="Eg. abc@xyz.com"
                onChange={emailChange}
                value={email}
                style={{ width: "95%" }}
              />
              <label className="form-label my-1" style={{ fontSize: "1.5rem" }}>
                Password
              </label>
              <input
                type="password"
                className="form-control my-1"
                id="password"
                placeholder="Set A Password"
                onChange={passwordChange}
                value={password}
                style={{ width: "95%" }}
              />
              <div className="row w-100 justify-content-center mt-4 mb-3 mx-0">
                <div
                  className="btn btn-outline-primary col-md-6 my-1 p-2 rounded-pill"
                  onClick={loginClick}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
