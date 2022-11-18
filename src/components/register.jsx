import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  const nameChange = (event) => {
    const { value } = event.target;
    setContact(value);
  };
  const passwordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };
  const confirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };
  const registerClick = async () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      window.alert("No Field can be empty");
      return;
    }
    if (password !== confirmPassword) {
      window.alert("Password and Confirm Password don't match");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    const requestBody = JSON.stringify({
      name,
      email,
      password,
    });
    try {
      const response = await fetch("http://localhost:4000/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody,
      });
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section
        className="row justify-content-center align-items-center m-0 p-2"
        style={{
          height: "100vh",
          width: "100%",
          background: "rgb(34, 33, 35)",
        }}
      >
        <div className="card col-md-6 p-4">
          <div className="row justify-content-center">
            <div className="col-md-9 d-flex flex-column align-items-start">
              <label className="form-label my-1" style={{ fontSize: "1.5rem" }}>
                Name
              </label>
              <input
                type="tel"
                className="form-control my-1"
                id="name"
                placeholder="Enter Your Name"
                onChange={nameChange}
                value={name}
                style={{ width: "95%" }}
              />
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
              <label className="form-label my-1" style={{ fontSize: "1.5rem" }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control my-1"
                id="confirmPassword"
                placeholder="Re-Enter The Password"
                onChange={confirmPasswordChange}
                value={confirmPassword}
                style={{ width: "95%" }}
              />
              <div className="row w-100 justify-content-center mt-4 mb-3 mx-0">
                <div
                  className="btn btn-outline-primary col-md-6 my-1 p-2 rounded-pill"
                  onClick={registerClick}
                >
                  Sign-Up
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
