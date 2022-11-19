import React from 'react'

function Navbar_loggedin() {
    function handleClickLogout(){
        window.location.href = '/';
    }
    function handleClick(){
      window.location.href = '/analysis'
    }
    function handleClickBuy(){
      window.location.href = '/buy'
    }
    function handleCLickSell(){
      window.location.href = '/sell'
    }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h3 style = {{color: 'white', paddingRight : '0.5vw',fontSize:'2.5rem',paddingLeft:'0.01rem',fontWeight:'bolder'}} id = 'logo'>PaperMarket</h3>
        </div>
        <div className="navbar-links_container">
        </div>
      </div>
      <div className="navbar-sign" >
        <button type="button" onClick={handleClickLogout} className = ' btn mx-2' style={{borderRadius:'1.4rem',backgroundColor:'#5c11ac',color:'#efbdf4',fontWeight:'bold'}}>Logout</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2' onClick={handleClick} style={{borderRadius:'1.4rem',backgroundColor:'#5c11ac',color:'#efbdf4',fontWeight:'bold'}}>Prediction Game</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2' onClick={handleClickBuy} style={{borderRadius:'1.4rem',backgroundColor:'#5c11ac',color:'#efbdf4',fontWeight:'bold'}}>Buy</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2' style={{borderRadius:'1.4rem',backgroundColor:'#5c11ac',color:'#efbdf4',fontWeight:'bold'}}>Dashboard</button>
      <div className="navbar-sign">
        <button type="button" className = ' mx-2' id='credits' style={{borderRadius:'1.4rem',fontWeight:'bold'}} >$Credits</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar_loggedin