import React, { useState } from "react";
import { Link } from "react-router-dom";
function Dashboard() {
  const [credit, setCredit] = React.useState(0);
  const [topGainer, setTopGainer] = React.useState(0);
  const [portfolio, setPortfolio] = React.useState([]);
  const [totalProfite, setTotalProfit] = React.useState(0);
  const [currentPrice, setCurrentPrice] = React.useState(10000);
  // React.useEffect(() => {
  //   setCredit(data.userData.balance);
  //   setPortfolio(data.userData.portfolio);
  // }, []);
  React.useEffect(() => {
    var largest = 0;
    var sum = 0;
    for (let i = 0; i < portfolio.length; i++) {
      sum = sum + (currentPrice - portfolio[i].price * portfolio[i].qty);
      if (currentPrice - portfolio[i].price * portfolio[i].qty > largest) {
        largest = currentPrice - portfolio[i].price * portfolio[i].qty;
      }
    }
    setTopGainer(largest);
    setTotalProfit(sum);
  }, [portfolio]);
  function handleClick(e) {
    window.location.href = "/analysis";
  }
  const render = portfolio.map((element, index) => {
    return (
      <tr>
        <td className="align-items-center">
          <p>{element.stock}</p>
        </td>
        <td>
          <p>{element.price}</p>
        </td>
        <td>
          <p class="status completed">element.qty</p>
        </td>
        <td>
          <button onClick={handleClick}>Analysis</button>
        </td>
      </tr>
    );
  });
  return (
    <>
      <section className="row bg-light m-0 p-0" style={{ height: "100vh" }}>
        <div className="row m-0 p-2 justify-content-between " style={{ height: "10vh" }} id='top-row'>
          <div className="col-1">
            <h1 className="text-center">PaperMarket</h1>
          </div>
          <div className="col-4 bg-primary"></div>
          <div className="col-1 bg-success"></div>
        </div>
        <div className="row m-0 p-1 justify-content-between" style={{ height: "90vh" }} id='bottom-row'>
          <div className="col-md-2 d-flex flex-column justify-content-between py-2" id="left-panel">
            <div className="py-3">
              <div className="p-2 text-center my-2 card bg-dark text-light shadow-lg">Dashboard</div>
              <div className="p-2 text-center my-2">Analysis</div>
              <div className="p-2 text-center my-2">History</div>
              <div className="p-2 text-center my-2">Help</div>
            </div>
            <div className="p-3 d-flex justify-content-center align-items-end">
              <div className="px-4 py-2 text-center btn btn-outline-danger rounded-pill">Logout</div>
            </div>
          </div>
          <div className="col-md-10 bg-secondary p-2" id="right-panel" style={{borderRadius:'1rem'}}>
            <div className="row justify-content-around align-items-center h-25">
              <div className="col-md-3 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-primary"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h3>Profit</h3>
                  <h3>$1000</h3>
                </div>
              </div>
              <div className="col-md-3 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-danger"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h3>Top Gainer</h3>
                  <h3>$1000</h3>
                </div>
              </div>
              <div className="col-md-3 card d-flex flex-row justify-content-between p-2">
                <div
                  className="col-3 bg-success"
                  style={{
                    height: "6rem",
                    width: "6rem",
                    borderRadius: "0.5rem",
                  }}
                ></div>
                <div className="col-7">
                  <h3>Balance</h3>
                  <h3>$1000</h3>
                </div>
              </div>
            </div>
            <div className="row h-75 justify-content-around">
              <div className="col-md-7 bg-danger card"></div>
              <div className="col-md-4 bg-primary card"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;

// const [user, setUser] = React.useState("");
// const token = localStorage.getItem("user");
// const getData = async () => {
//   try {
//     const response = await fetch("http://localhost:4000/api/v1/dashboard", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ token }),
//     });
//     console.log(response);
//     const { id, email } = await response.json();
//     setUser({ id, email });
//   } catch (error) {
//     console.log(error);
//   }
// };
// React.useEffect(() => {
//   getData();
// }, []);
