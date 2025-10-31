import './Navbar.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

function Navbar(){



    // minimal JS: toggle .open on header
useEffect(() => {
  const navbar = document.querySelector('.navbar');
  const openBtn = document.querySelector('.hamburger');
  const closeBtn = document.querySelector('.nav-menu-mobile .close-btn');
  const mobileLinks = document.querySelectorAll('.nav-menu-mobile a');

  if (!navbar || !openBtn) return;

  const openMenu = () => navbar.classList.add('open');
  const closeMenu = () => navbar.classList.remove('open');

  openBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  mobileLinks.forEach(a => a.addEventListener('click', closeMenu));

  // cleanup on unmount (prevents duplicates)
  return () => {
    openBtn.removeEventListener('click', openMenu);
    if (closeBtn) closeBtn.removeEventListener('click', closeMenu);
    mobileLinks.forEach(a => a.removeEventListener('click', closeMenu));
  };
}, []);
  return(
    <>
      <header className='navbar'>
        <h1>Faizan's Portfolio</h1>

        {/* checkbox toggle for CSS-only menu (keeps desktop behaviour unchanged) */}
         {/* <input id="menu-toggle" className="menu-toggle" type="checkbox" />  */}

        {/* hamburger button (label for checkbox) - only visible on mobile/tablet */}
        <button className="hamburger" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* main nav - keep same markup you had for desktop */}
        <ul className='nav-menu'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Connect button stays same on desktop; we'll hide it on mobile via CSS */}
        <div className="nav-connect">Connect with me</div>

        {/* Slide-in menu for small screens duplicates links and includes a close label.
            We keep it as a nav element (aria) — CSS will move it off-screen and slide in. */}
        <nav className="nav-menu-mobile" aria-hidden="true">
          {/* Close button (also a label for the same checkbox) */}
          <button className="close-btn" aria-label="Close menu">✕</button>

          <ul>
            <li><Link to="/" onClick={() => document.getElementById('menu-toggle')}>Home</Link></li>
            <li><Link to="/about" onClick={() => document.getElementById('menu-toggle')}>About</Link></li>
            <li><Link to="/services" onClick={() => document.getElementById('menu-toggle')}>Services</Link></li>
            <li><Link to="/portfolio" onClick={() => document.getElementById('menu-toggle')}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => document.getElementById('menu-toggle')}>Contact</Link></li>
          </ul>

          <div className="nav-menu-cta">
            <Link to="/contact" className="nav-connect">Connect with me</Link>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar;