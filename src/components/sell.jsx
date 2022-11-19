import React from 'react'
import Image from '../Assets/sell.svg'
import Navbar_loggedin from '../Elements/Navbars/navbar_loggedin'
const moment = require("moment");

function Sell() {
  //******states*******
  const [symbol, setsymbol] = React.useState("");
  const [data, setData] = React.useState(false);
  const [data2, setData2] = React.useState();
  const [canBuy, setCanBuy] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  //******************gets current date and time and converts into YYYY-MM-DD HH:mm:00 format because we recive data in interval of 5 minutes********************
  var startdate = moment();
  startdate = startdate.subtract(1, "days");
  startdate = startdate.format("YYYY-MM-DD, HH:mm:00");
  const remainder = 5 - (moment().minutes() % 5);
  const dateTime = moment(startdate)
    .add(remainder, "minutes")
    .format("YYYY-MM-DD, HH:mm:00");
  console.log("finally done", dateTime);


  async function handleClick2(e) {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=JBQTJBWV8LLJYL6Y`
    )
      .then((response) => response.json())
      .then((response) => console.log('hi', response))
      .catch((err) => console.error(err));
  }


  //*****************************USEEFFECTS******************************************* */

  //checks if stock market is open to buy and sell
  React.useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 12 && hours < 20) {
      console.log("camein");
      setCanBuy(1);
    } else {
      setCanBuy(0);
    }
  }, []);

  //sets data in data2
  React.useEffect(() => {
    setData2(data["Time Series (5min)"]);
  }, [data]);



  React.useEffect(() => {
    console.log(data2);
    //checks in data for the current price at this time.
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
    <Navbar_loggedin />
    <div className='m-5'>
      .
    </div>
    <section className='d-flex justify-content-start my-5' style={{marginLeft : '3vw'}}>
    <div className='card col-md-5 justify-content-center p-3 pt-1' style={{border : '1px solid white', borderRadius: '5%' , backgroundColor:'#c1b9b9'}}>
    <h1 className='' style={{color : 'black'}}>Sell Stock</h1>
        <hr style={{
          height : '4px',
          color: '#040C18',
          backgroundColor : '#040C18'
        }} />
        <h2 className='m-3'>Stock Name: {symbol}</h2>
        <h2 className='m-3'>Stock Purchased Price: {}</h2>
        <h2 className='m-3'>Stock Current Price: {price}</h2>
        <h2 className='m-3'>Profit: {}</h2>
        <h2 className='m-3 pb-4'>Quantity: {}</h2>

        <center><button  className="btn btn-danger" style={{height: '6vh', width : '16vw',borderRadius:'2rem',fontSize:'1.9rem',alignItems:'center'}}>Sell</button></center>

    </div>
    <div className='d-flex justify-content-end col-md-6'>
      <img src={Image} alt="" style={{width : '33vw'}} />
    </div>
    </section>
    <section className='d-flex justify-content-center'>
    </section>

    </>
  )
}

export default Sell