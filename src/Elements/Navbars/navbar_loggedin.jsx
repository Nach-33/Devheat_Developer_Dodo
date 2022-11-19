import React,{useEffect, useState} from "react";

function Navbar_loggedin() {
  function handleClickLogout() {
    window.localStorage.removeItem("user");
    window.location.href = "/";
  }
  function handleClick() {
    window.location.href = "/analysis";
  }
  function handleClickBuy() {
    window.location.href = "/buy";
  }
  function handleClickDashboard() {
    window.location.href = "/dashboard";
  }
  const [user, setUser] = useState({
    username:'',
    portfolio: [],
    transactions: [],
    balance: 0,
  });

  const token = localStorage.getItem("user");
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/dashboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "BEARER " + token,
        },
      });
      const data = await response.json();
      setUser(data.userData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getData();
  },[]);
  if(user.username==''){
    return(<h1 className="text-center text-danger mt-4">Not Authorized to Access this Route</h1>)
  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h3 style={{ color: "white" }} id="logo">
            PaperMarket
          </h3>
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#">About us</a>
          </p>
          <p>
            <a href="#">FAQ</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <button
          type="button"
          onClick={handleClickLogout}
          className=" btn btn-danger mx-4"
        >
          Logout
        </button>
      </div>
      <div className="navbar-sign">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClick}
        >
          Prediction Game
        </button>
      </div>
      <div className="navbar-sign">
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleClickBuy}
        >
          Buy
        </button>
      </div>
      <div className="navbar-sign">
        <button type="button" className="btn btn-primary mx-2">
          Dashboard
        </button>
        <div className="navbar-sign">
          <button type="button" className=" mx-2" id="credits">
            ${user.balance}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar_loggedin;
