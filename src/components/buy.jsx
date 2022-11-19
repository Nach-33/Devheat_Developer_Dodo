import React, { Component } from "react";
import Chart from "react-google-charts";
const moment = require("moment");
function Apitest() {
  //***********************************STATES******************************* */
  const [symbol, setsymbol] = React.useState("");
  const [data, setData] = React.useState(false);
  const [data2, setData2] = React.useState();
  const [canBuy, setCanBuy] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const Display = <h2 style={{ color: "red" }}>Not available at this time</h2>;
  //*************graph properties******************* */
  var startdate = moment();
  startdate = startdate.subtract(2, "days");
  startdate = startdate.format("YYYY-MM-DD, HH:mm:00 a");
  const remainder = 5 - (moment().minutes() % 5);
  const dateTime = moment(startdate)
    .add(remainder, "minutes")
    .format("YYYY-MM-DD, HH:mm:00 a");
  console.log("finally done", dateTime);

  //**********************************FUNCTIONS****************************** */
  function handleChange(e) {
    const { value } = e.target;
    setsymbol(value);
  }
  async function handleClick2(e) {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=JBQTJBWV8LLJYL6Y`
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }
  //*****************************USEEFFECTS******************************************* */
  React.useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 12 && hours < 17) {
      console.log("camein");
      setCanBuy(1);
    } else {
      setCanBuy(0);
    }
  }, []);

  
  React.useEffect(() => {
    setData2(data["Time Series (5min)"]);
  }, [data]);



  React.useEffect(() => {
    console.log(data2);
    for (var i in data2) {
      if (i == dateTime) {
        setPrice(data2[i]["4. close"]);
        break;
      } else {
      }
    }
  }, [data2]);

  return (
    <>
      <center>
        <div className="card m-3 mb-5" style={{ width: "50vw" }}>
          <h3>Stocks</h3>
          <div>
            <input
              type="text"
              className=""
              placeholder="Enter stock name"
              onChange={handleChange}
            />
          </div>

          <center>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleClick2}
            >
              Success
            </button>
          </center>
        </div>
        {canBuy ? (
          <div className="d-flex m-5" style={{ backgroundColor: "white" }}>
            <h2 className="mx-5">Stock Name</h2>
            <h2 className="mx-5">Price</h2>
            <h2 className="mx-5">select Quantity</h2>
            <button
              className="btn btn-danger"
              style={{ marginLeft: "auto", width: "10vw" }}
            >
              Buy
            </button>
          </div>
        ) : (
          <h3 style={{ color: "red" }}>Not available at this time</h3>
        )}
      </center>
    </>
  );
}

export default Apitest;
