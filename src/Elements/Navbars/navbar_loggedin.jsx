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
        <button type="button" onClick={handleClickLogout} className = ' btn btn-danger mx-4'>Logout</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2' onClick={handleClick}>Prediction Game</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2' onClick={handleClickBuy}>Buy</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'btn btn-primary mx-2'>Dashboard</button>
      <div className="navbar-sign">
        <button type="button" className = ' mx-2' id='credits' >$Credits</button>
      </div>
      </div>
    </div>
  )
}

export default Navbar_loggedin