import React from 'react'
import './Footer.css'
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="footer-about">
        <h3>About Faizan</h3>
        <p>Leading technology solutions provider specializing <br />
           in web development and AI solutions. <br /> Empowering businesses worldwide since 2023.</p>
      </div>
      <div className="footer-menu">
        <h3>Quick links</h3>
      <ul><li><Link to="/about">About</Link></li>
         <li> <Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          
          </ul>

      </div>
      <div className="footer-links">
        <h3>My links</h3>
        <ul>
          <li><a href="#"> Facebook</a></li>
          <li><a href="#"> Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/faizan-ishtiaq-9332a137a/" target='_blank'> Linkedin</a></li>
          <li><a href="https://github.com/Faizan-ishtiaq" target='_blank'> Github</a></li>

          </ul>
      </div>
      <div className="contact">
        <h3>Contact Info</h3>
            <p>@faizanIshtiaqwork@gmail.com</p>
            <p>Mon to Sat 9am to 6pm</p>
            
      </div>
       </div>
    
    <hr className='footer-divider' />
    
    <p className="footer-copy">
      &copy; 2025 Faizan Ahmed.All rights reserved.
    </p>
   
    
    </>
  )
}

export default Footer
