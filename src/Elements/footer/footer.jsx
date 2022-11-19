import React from 'react'

function footer() {
    function handleClick(){
        window.location.href = 'register'
    }
  return (
    <>
    <div className="footer section__padding my-4">
    <div className="footer-links" style={{borderTop : '1px solid white'}}>
      <div className="footer-links_logo">
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
    </>
  )
}

export default footer