import Navbar from './components/Navbar/Nav';
import Footer from './components/Footer/Foot';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
    return (

        <BrowserRouter>
            <Navbar />
            
            <Routes>


                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />

            </Routes>


<Footer />
        </BrowserRouter>

    )
}

export default App;