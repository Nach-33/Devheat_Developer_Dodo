import React, { Component } from "react";
import Chart from "react-google-charts";
import Navbar_loggedin from "../Elements/Navbars/navbar_loggedin";

function Apitest() {
  //***********************************STATES******************************* */
  const [symbol, setsymbol] = React.useState("");
  const [data, setData] = React.useState(false);
  const [data2, setData2] = React.useState();
  const [data3, setData3] = React.useState("");
  const [xaxis, setXaxis] = React.useState([]);
  const [open, setOpen] = React.useState([]);
  const [high, setHigh] = React.useState([]);
  const [low, setLow] = React.useState([]);
  const [close, setClose] = React.useState([]);
  const [volume, setVolume] = React.useState([]);
  const [clicked, setClicked] = React.useState("");
  const [prediction, setPrediction] = React.useState(false);
  const [graph, setgraph] = React.useState([
    ["day", "low", "open", "close", "high"],
  ]);
  //*************graph properties******************* */
  var options = {
    legend: "none",
    backgroundColor: "#040C18",

    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#f6465d" }, // red
      risingColor: { strokeWidth: 0, fill: "#0ccb80" }, // green
    },
    colors: ["#808080"],
    explorer: {
      maxZoomout: 2,
      keepInBounds: true,
    },
  };

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
  function handleClickGraph() {
    setClicked("hello");

    class GoogleChart extends Component {
      constructor(props) {
        super(props);
      }
    }
  }
  function handleCheckbox1() {
    setPrediction(true);
    console.log(prediction);
  }
  function handleCheckbox2() {
    setPrediction(false);
    console.log(prediction);
  }
  const token = localStorage.getItem("user");
  const getPrediction = async () => {
    let predict = 1;
    if (!prediction) predict = 0;
    const response = await fetch("http://localhost:4000/api/v1/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "BEARER " + token,
      },
      body: JSON.stringify({
        prediction: predict,
        stock: symbol,
      }),
    });
    const data = await response.json();
    // console.log(data);
    if (data.status == "not ok") {
      if (data.msg == "limit exceeded") {
        window.alert("Daily Limit Exceeded");
      } else {
        window.alert("Low Balance");
      }
    } else {
      if (data.win) {
        Window.alert("Congrats!!! Your Prediction is Accurate...");
      }
      else{
        Window.alert("Alas, Better Luck Next Time...");
      }
    }
  };
  //*****************************USEEFFECTS******************************************* */

  React.useEffect(() => {
    setData2(data["Time Series (5min)"]);
  }, [data]);

  //converting data into format required for candlestick graph
  React.useEffect(() => {
    for (var i in data2) {
      setData3(data2[i]);
      break;
    }
    for (var i in data2) {
      for (var j in data2[i]) {
        if (j == "1. open") {
          open.push(data2[i][j]);
        } else if (j == "2. high") {
          high.push(data2[i][j]);
        } else if (j == "3. low") {
          low.push(data2[i][j]);
        } else if (j == "4. close") {
          close.push(data2[i][j]);
        } else {
          volume.push(data2[i][j]);
        }
      }
    }
    open.reverse();
    high.reverse();
    low.reverse();
    close.reverse();
    xaxis.reverse();
    for (let i = 0; i < open.length; i++) {
      graph.push([
        xaxis[i],
        parseFloat(low[i]),
        parseFloat(open[i]),
        parseFloat(close[i]),
        parseFloat(high[i]),
      ]);
    }
  }, [data2]);

  return (
    <>
      <Navbar_loggedin />
      <center>
        <div
          className="card  "
          style={{
            width: "50vw",
            marginBottom: "8vh",
            marginTop: "2vh",
            backgroundColor: "#040C18",
          }}
        >
          <h3
            style={{
              color: "white",
              fontWeight: "bolder",
              fontSize: "3rem",
              paddingBottom: "1.5rem",
            }}
          >
            Stocks
          </h3>
          <div>
            <input
              type="text"
              className="m-2 rounded-pill p-3"
              placeholder="Enter stock name"
              onChange={handleChange}
              style={{
                width: "25vw",
                borderRadius: "3rem",
                height: "4rem",
                fontSize: "2rem",
                textAlign: "center",
              }}
            />
          </div>

          <center className="m-3">
            <button
              type="button"
              className=" btn btn-outline-primary my-1 p-2 rounded-pill"
              style={{ width: "10rem", fontWeight: "bold", fontSize: "1.5rem" }}
              onClick={handleClick2}
            >
              Search
            </button>
          </center>
        </div>
      </center>
      {data3 && (
        <center>
          <section
            style={{
              border: "1px solid white",
              borderTopLeftRadius: "25px",
              borderTopRightRadius: "25px",
              width: "70vw",
              background:
                "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",
              padding: "2vh",
            }}
          >
            <div>
              <center>
                <p
                  style={{ color: "white", fontSize: "23px" }}
                  className="fw-bold"
                >
                  The Prediction game costs $50, correct guess gives a reward of
                  $75
                </p>
              </center>
              <center>
                <p
                  style={{ color: "white", fontSize: "18px" }}
                  className="fw-bold"
                >
                  Will the stock increase in future? What's your prediction?
                </p>
              </center>
            </div>
            <div className="d-flex justify-content-center">
              <input type="radio" onClick={handleCheckbox1} name="1" />
              <label
                htmlFor="High"
                style={{
                  color: "#A4BE7B",
                  fontSize: "1.8rem",
                  fontWeight: "bolder",
                  padding: "1rem",
                }}
              >
                {" "}
                High
              </label>
              <input type="radio" onClick={handleCheckbox2} name="1" />
              <label
                htmlFor="Low"
                style={{
                  color: "#A4BE7B",
                  fontSize: "1.8rem",
                  fontWeight: "bolder",
                  padding: "1rem",
                }}
              >
                Low
              </label>
              <button
                type="button"
                className=" btn my-1 p-2 rounded-pill"
                style={{
                  width: "10rem",
                  fontWeight: "bolder",
                  fontSize: "1.5rem",
                  padding: "0.3rem",
                  backgroundColor: "#E5D9B6",
                  color: "#285430",
                }}
                onClick={getPrediction}
              >
                Predict
              </button>
            </div>
          </section>
        </center>
      )}

      {data3 && (
        <center>
          <div
            className="shadow p-3 mb-5"
            style={{
              width: "70vw",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              fontWeight: "bold",
              fontSize: "2rem",
              backgroundColor: "#040C18",
              border: "1px solid white",
            }}
          >
            <h3
              className="fw-bold "
              style={{ color: "white", fontSize: "2.3rem" }}
            >
              {" "}
              Previous one day status :
            </h3>
            {data3 &&
              Object.keys(data3).map(function (key) {
                return (
                  <p className="text-capitalize" style={{ color: "white" }}>
                    {key} : {data3[key]}
                  </p>
                );
              })}
            <button
              onClick={handleClickGraph}
              style={{
                borderRadius: "2rem",
                fontSize: "1.5rem",
                width: "20rem",
              }}
            >
              Check Graphical Data
            </button>
            {clicked && (
              <div className="container mt-3">
                <Chart
                  width={"100%"}
                  height={450}
                  chartType="CandlestickChart"
                  loader={<div>Loading Chart</div>}
                  data={graph}
                  options={options}
                  rootProps={{ "data-testid": "1" }}
                />
              </div>
            )}
          </div>
        </center>
      )}
    </>
  );
}

export default Apitest;
