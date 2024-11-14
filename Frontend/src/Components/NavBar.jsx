
// import AnchorLink from "react-anchor-link-smooth-scroll";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {TemperatureConverter} from './Project Pages/Temperature converter.html';
import './NavBar.css';

function NavBar(){
    return(
        <>
        <ul className="NavBar">
            <li className="li">Home</li>
            {/* <AnchorLink href="#projects"> */}
            <Router>
            <li  className="li">Projects</li>
            <Routes>
              <Route path='/Project Pages/Temperature converter' element={<TemperatureConverter/>} />
            </Routes>
            </Router>
            {/* </AnchorLink> */}
            <li  className="li">contact</li>
            <li  className="li">Career</li>
        </ul>
        </>
    )
}

export default NavBar;