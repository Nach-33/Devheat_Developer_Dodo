import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar_loggedin from "../Elements/Navbars/navbar_loggedin";
function Dashboard() {
  const [totalProfit, setTotalProfit] = React.useState(0);
  const [user, setUser] = React.useState({
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
      //   console.log("here", user);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
    let largest = 0;
    let sum = 0;
    const Array = user.transactions;
    console.log("here", Array);
    for (let index = 0; index < Array.length; index++) {
      console.log("sum", sum);
      const element = Array[index];
      if (element.trade === "buy") sum -= element.price * element.qty;
      else sum += element.price * element.qty;
    }
    setTotalProfit(sum);
  }, [user.balance]);
  const render = user.portfolio.map((element, index) => {
    return (
      <div
        className="d-flex card flex-row justify-content-around p-1 m-2"
        key={index}
      >
        <div>
          <h2>{element.stock}</h2>
        </div>
        <div>
          <h2>{element.qty}</h2>
        </div>
        <div>
          <h2>{element.price}</h2>
        </div>
      </div>
    );
  });
  const historyRender = user.transactions.map((element, index) => {
    return (
      <div
        className="d-flex card flex-row justify-content-around p-1 m-2"
        key={index}
      >
        <div>
          <h2 className="text-dark">{element.stock}</h2>
        </div>
        <div>
          <h2 className="text-dark">{element.trade}</h2>
        </div>
        <div>
          <h2 className="text-dark">{element.qty}</h2>
        </div>
        <div>
          <h2 className="text-dark">{element.price}</h2>
        </div>
      </div>
    );
  });
  return (
    <>
      <section className="m-0 p-0" style={{ height: "100vh" }}>
        {/* <div className="d-flex m-0 p-2 justify-content-between " style={{ height: "10vh" }} id='top-d-flex'>
          <div className="col-1">
            <h1 className="text-center">PaperMarket</h1>
          </div>
          <div className="col-4 bg-primary"></div>
          <div className="col-1 bg-success"></div>
        </div> */}
        <Navbar_loggedin />
        <div
          className="d-flex m-0 p-1 justify-content-between"
          style={{ height: "87vh" }}
          id="bottom-d-flex"
        >
          <div
            className="col-md-2 d-flex flex-column justify-content-between py-2"
            id="left-panel"
          >
            <div className="py-3">
              <div className="p-2 text-center my-4 card text-dark shadow-lg">
                <h2>Dashboard</h2>
              </div>
              <div className="p-2 text-center my-4 text-light">
                <h2><Link to='/analysis'>Analysis</Link></h2>
              </div>
              <div className="p-2 text-center my-4 text-light">
                <h2>Help</h2>
              </div>
            </div>
          </div>
          <div
            className="col-md-10 bg-secondary p-2"
            id="right-panel"
            style={{ borderRadius: "1rem" }}
          >
            <div className="d-flex justify-content-around align-items-center h-25">
              <div className="col-md-2 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-primary"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h2>Hello </h2>
                  <h2>{user.username}</h2>
                </div>
              </div>
              <div className="col-md-2 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-primary"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h2>Profit</h2>
                  <h2>${totalProfit}</h2>
                </div>
              </div>
              <div className="col-md-2 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-success"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h2>Balance</h2>
                  <h2>${user.balance}</h2>
                </div>
              </div>
            </div>
            <div className="d-flex h-75 justify-content-around">
              <div className="col-md-7 bg-danger card p-2">
                <div className="d-flex card flex-row justify-content-around p-1 m-2">
                  <div>
                    <h1 className="fw-bold">Stock</h1>
                  </div>
                  <div>
                    <h1 className="fw-bold">Qty</h1>
                  </div>
                  <div>
                    <h1 className="fw-bold">Price</h1>
                  </div>
                </div>
                {render}
              </div>
              <div className="col-md-4 bg-primary card">
                <div
                  className="d-flex card flex-row justify-content-around p-1 m-2"
                >
                  <div>
                    <h1 className="text-dark fw-bold">Stock</h1>
                  </div>
                  <div>
                    <h1 className="text-dark fw-bold">Trade</h1>
                  </div>
                  <div>
                    <h1 className="text-dark fw-bold">Qty</h1>
                  </div>
                  <div>
                    <h1 className="text-dark fw-bold">Price</h1>
                  </div>
                </div>
                {historyRender}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
