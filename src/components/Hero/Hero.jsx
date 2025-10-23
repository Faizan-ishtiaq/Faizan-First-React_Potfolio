import './Hero.css'
 import hero from '../../assets/hero.jpg'


function Hero(){
 return(
    <div className='hero'>
       <img src={hero} alt="Faizan Pic" />
       <h1>I am Faizan Ahmed, frontent develpor based in Pakistan.</h1>
       <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume"> My resume</div>
       </div>
       
    </div>
 )
}
export default Hero