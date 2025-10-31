import './Hero.css'
 import hero from '../../assets/hero.jpg'
 import {Link} from "react-router-dom"


function Hero(){
 return(
    <div className='hero'>
       <img src={hero} alt="Faizan Pic" />
       <h1>I am Faizan Ahmed, frontent develpor based in Pakistan.</h1>
       <div className="hero-action">
        <Link to="/contact"  className="hero-connect">Connect with me</Link>
        <a href='/Faizan-Ishtiaq-Resume.pdf' download="Faizan-Ishtiaq-Resume.pdf" className="hero-resume"> My resume</a>
       </div>
       
    </div>
 )
}
export default Hero