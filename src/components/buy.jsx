import React, { Component } from "react";
import Chart from "react-google-charts";
import Image from '../Assets/buy.svg'
import Navbar_loggedin from "../Elements/Navbars/navbar_loggedin";
const moment = require("moment");
function Apitest() {
  //***********************************STATES******************************* */
  const [symbol, setsymbol] = React.useState("");
  const [data, setData] = React.useState(false);
  const [data2, setData2] = React.useState();
  const [canBuy, setCanBuy] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const Display = <h2 style={{ color: "red" }}>Not available at this time</h2>;
  //*************graph properties******************************** */
  var startdate = moment();
  startdate = startdate.subtract(1, "days");
  startdate = startdate.format("YYYY-MM-DD, HH:mm:00 a");
  const remainder = 5 - (moment().minutes() % 5);
  const dateTime = moment(startdate)
    .add(remainder, "minutes")
    .format("YYYY-MM-DD HH:mm:00");
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

    console.log('data2', data2);
    for (var i in data2) {
      if (i == dateTime) {
        setPrice(data2[i]["4. close"]);
        break;
      }
    }
  }, [data2]);

  return (
    <>
    <section>
    <Navbar_loggedin />
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
        {canBuy ? (
          // <div className="d-flex m-5" style={{ backgroundColor: "white" }}>
          //   <h2 className="mx-5">Stock Name</h2>
          //   <h2 className="mx-5">Price</h2>
          //   <h2 className="mx-5">select Quantity</h2>
          //   <button
          //     className="btn btn-danger"
          //     style={{ marginLeft: "auto", width: "10vw" }}
          //   >
          //     Buy
          //   </button>
          // </div>
          <section className="d-flex justify-content-start " style={{width : '95vw'}}>
            <div className="card col-md-5 mx-4" style={{marginTop : '0vh', maxHeight: '40vh', borderRadius:'3rem', backgroundColor:'#c1b9b9'}}>
              <h4 className="text-start m-5 " style={{fontSize:'2rem'}}>Stock Name: {symbol} </h4>
              <h4 className="text-start m-5" style={{fontSize:'2rem'}}>Stock Price: {price}</h4>
              <h4 className="text-start m-5" style={{fontSize:'2rem'}}>Quantity: </h4>
              <center><button className="btn btn-outline-success my-3 p-2" style={{borderRadius:'2rem',width:'24rem' ,fontWeight:'bolder',fontSize:'1.6rem'}}>Buy</button></center>
            </div>
            <div className="md-5" style={{marginLeft : '15vw'}}>
              <img src={Image} alt="" style={{height : '60vh'}} />
            </div>
          </section>
        ) : (
          <h3 style={{ color: "red" ,fontWeight:'bold',fontSize:'3rem'}}>Market is Closed . Not available at this time</h3>
        )}
      </center>
      </section>
    </>
  );
}

export default Apitest;

// <div className='m-5'>
//     </div>
    // <section className='d-flex justify-content-start my-5' style={{marginLeft : '3vw'}}>
    // <div className='card col-md-6 justify-content-center p-3' style={{border : '1px solid white', borderRadius: '5%'}}>
    // <h1 className='' style={{color : 'black'}}>Sell Stock</h1>
    //     <hr style={{
    //       height : '4px',
    //       color: '#040C18',
    //       backgroundColor : '#040C18'
    //     }} />
    //     <h2 className='m-3'>Stock Name: </h2>
    //     <h2 className='m-3'>Stock Purchased Price: </h2>
    //     <h2 className='m-3'>Stock Current Price: </h2>
    //     <h2 className='m-3'>Profit: </h2>
    //     <center><button  className="btn btn-danger" style={{height: '5vh', width : '20vw'}}>Sell</button></center>

    // </div>
    // <div className='d-flex justify-content-end col-md-6'>
    //   <img src={Image} alt="" style={{width : '33vw'}} />
    // </div>
    // </section>
    // <section className='d-flex justify-content-center'>
    // </section>