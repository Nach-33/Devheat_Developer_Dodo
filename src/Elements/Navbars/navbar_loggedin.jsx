import React from 'react'

function Navbar_loggedin() {
    function handleClickLogout(){
        window.location.href = '/';
    }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h3 style = {{color: 'white'}} id = 'logo'>LOGO</h3>
        </div>
        <div className="navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#">About us</a></p>
          <p><a href="#">FAQ</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <button type="button" onClick={handleClickLogout} className = ' btn btn-success mx-4'>Logout</button>
      </div>
      <div className="navbar-sign">
        <button type="button" className = 'mx-4' id='credits'>$Credits</button>
      </div>
    </div>
  )
}

export default Navbar_loggedin