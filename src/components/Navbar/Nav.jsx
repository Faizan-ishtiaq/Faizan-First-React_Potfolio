import './Navbar.css'
import {Link} from "react-router-dom";


function Navbar(){
    return(
        <>
        <div className='navbar'>
            <h1>Faizan's Portfolio</h1>
            <ul className='nav-menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="nav-connect">Connect with me</div>
               
        </div>
        
         </>

    )
}
export default Navbar