
import React, { Component } from "react";
import Chart from "react-google-charts";

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
  const [graph, setgraph] = React.useState([
    ["day", "low", "open", "close", "high"],
  ]);
//*************graph properties******************* */
  var options = {
    legend: "none",
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#f6465d" }, // red
    risingColor: { strokeWidth: 0, fill: "#0ccb80" }, // green
  },
  colors: ['#808080'],
    explorer: {
        maxZoomout:2,
        keepInBounds: true

    }
  }

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
  //*****************************USEEFFECTS******************************************* */

  React.useEffect(() => {
    setData2(data["Time Series (5min)"]);
    console.log(data);
  }, [data]);

  React.useEffect(() => {
    for (var i in data2) {
      setData3(data2[i]);
      break;
    }
    for (var i in data2) {
      xaxis.push(i);
    }
    for (var i in data2) {
      for (var j in data2[i]) {
        // console.log(j);
        if (j == "1. open") {
          open.push(data2[i][j]);
          // console.log('open', open
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
      <center>
      <div className="card  " style={{ width: "50vw", marginBottom : '8vh', marginTop: '2vh', backgroundColor : '#040C18'}}>
          <h3 style = {{color:'white', fontWeight:'bolder',fontSize:'3rem',paddingBottom:'1.5rem'}}>Stocks</h3>
          <div>
            <input
              type="text"
              className="m-2 rounded-pill p-3"
              placeholder="Enter stock name"
              onChange={handleChange}
              style={{width : '25vw', borderRadius:'3rem',height:'4rem',fontSize:'2rem',textAlign:'center'}}
            />
          </div>

          <center className='m-3'>
            <button
              type="button"
              className=" btn btn-outline-primary my-1 p-2 rounded-pill"
              style={{width:'10rem',fontWeight:'bold',fontSize:'1.5rem'}}
              onClick={handleClick2}
              
            >
              Search
            </button>
          </center>
        </div>
      </center>
      {data3 && (
        <center>
          <h3 className="fw-bold " style={{color:'white',fontSize:'2.3rem'}}> Current Status :</h3>
        </center>
      )}
      {data3 && (
        <center >
          <div
            className="shadow p-3 mb-5 bg-white"
            style={{
              backgroundColor: "white",
              width: "70vw",
              borderRadius:'2rem',
              fontWeight:'bold',
              fontSize:'2rem'
            }}
          >
            {data3 &&
              Object.keys(data3).map(function (key) {
                return (

                  <p className="text-capitalize">
                    {key} : {data3[key]}
                    
                  </p>
                );
              })}
            {console.log("graph", graph)}
            <button onClick={handleClickGraph} style={{borderRadius:'2rem',fontSize:'1.5rem',width:'20rem'}}>Check Graphical Data</button>
            {clicked && (
              <div className="container mt-5">
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
